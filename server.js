const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load registry from directories
async function loadRegistry() {
    const registry = {};
    try {
        const items = await fs.readdir('.');
        for (const item of items) {
            const mcpJsonPath = path.join(item, 'mcp.json');
            try {
                const stat = await fs.stat(item);
                if (stat.isDirectory()) {
                    try {
                        const configData = await fs.readFile(mcpJsonPath, 'utf8');
                        registry[item] = JSON.parse(configData);
                    } catch (err) {
                        // Skip if mcp.json doesn't exist or can't be read
                        continue;
                    }
                }
            } catch (err) {
                continue;
            }
        }
        return registry;
    } catch (err) {
        console.error('Error loading registry:', err);
        return {};
    }
}

// Welcome endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to MCP Registry API' });
});

// Get entire registry
app.get('/registry', async (req, res) => {
    try {
        const registry = await loadRegistry();
        res.json(registry);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load registry' });
    }
});

// Get specific MCP configuration
app.get('/registry/:name', async (req, res) => {
    try {
        const registry = await loadRegistry();
        const name = req.params.name;
        
        if (!registry[name]) {
            return res.status(404).json({ error: `MCP '${name}' not found` });
        }
        
        res.json({
            name,
            config: registry[name]
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to load registry item' });
    }
});

// Search registry
app.get('/search', async (req, res) => {
    try {
        const registry = await loadRegistry();
        const query = (req.query.q || '').toLowerCase();
        
        if (!query) {
            return res.json(registry);
        }
        
        const results = {};
        for (const [name, config] of Object.entries(registry)) {
            if (name.toLowerCase().includes(query) || 
                config.description.toLowerCase().includes(query)) {
                results[name] = config;
            }
        }
        
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: 'Failed to search registry' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
