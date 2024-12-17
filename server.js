const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load registry from directories recursively
async function scanDirectory(dir, registry, prefix = '') {
    try {
        const items = await fs.readdir(dir);
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const mcpJsonPath = path.join(fullPath, 'mcp.json');
            const relativePath = prefix ? path.join(prefix, item) : item;
            
            try {
                const stat = await fs.stat(fullPath);
                if (stat.isDirectory()) {
                    // Check for mcp.json in current directory
                    try {
                        const configData = await fs.readFile(mcpJsonPath, 'utf8');
                        registry[relativePath] = JSON.parse(configData);
                    } catch (err) {
                        // If no mcp.json, continue scanning subdirectories
                        await scanDirectory(fullPath, registry, relativePath);
                    }
                }
            } catch (err) {
                continue;
            }
        }
    } catch (err) {
        console.error(`Error scanning directory ${dir}:`, err);
    }
}

async function loadRegistry() {
    const registry = {};
    try {
        await scanDirectory('.', registry);
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
