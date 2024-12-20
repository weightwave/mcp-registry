const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const fs = require('fs').promises;
const path = require('path');

const PORT = process.env.PORT || 3000;

// Register CORS
fastify.register(cors);

// Load registry from directories recursively
async function scanDirectory(dir, registry = [], prefix = '') {
    try {
        const items = await fs.readdir(dir);
        for (const item of items) {
            // ignore directory starting with '.' and node_modules
            if (item.startsWith('.') || item === 'node_modules') {
                continue;
            }
            const fullPath = path.join(dir, item);
            const mcpJsonPath = path.join(fullPath, 'mcp.json');
            const relativePath = prefix ? path.join(prefix, item) : item;
            
            try {
                const stat = await fs.stat(fullPath);
                if (stat.isDirectory()) {
                    try {
                        const configData = await fs.readFile(mcpJsonPath, 'utf8');
                        const mcpData = JSON.parse(configData);
                        registry.push(mcpData);
                    } catch (err) {
                        // If no mcp.json, continue scanning subdirectories
                        await scanDirectory(fullPath, registry, relativePath);
                    }
                }
            } catch (err) {
                continue;
            }
        }
        return registry;
    } catch (err) {
        console.error(`Error scanning directory ${dir}:`, err);
        return registry;
    }
}

async function loadRegistry() {
    try {
        return await scanDirectory('.');
    } catch (err) {
        console.error('Error loading registry:', err);
        return [];
    }
}

// Welcome endpoint
fastify.get('/', async (request, reply) => {
    return { message: 'Welcome to MCP Registry API' };
});

// Get entire registry
fastify.get('/registry', async (request, reply) => {
    try {
        const registry = await loadRegistry();
        return registry;
    } catch (err) {
        reply.code(500);
        return { error: 'Failed to load registry' };
    }
});

fastify.get('/list', async (request, reply) => {
    try {
        const registry = await loadRegistry();
        return registry.map(mcp => mcp.id);
    } catch (err) {
        reply.code(500);
        return { error: 'Failed to load registry' };
    }
});

// Search registry
fastify.get('/search', async (request, reply) => {
    try {
        const { q } = request.query;
        if (!q) {
            reply.code(400);
            return { error: 'Search query is required' };
        }

        const registry = await loadRegistry();
        const searchTerm = q.toLowerCase();
        
        const results = registry.filter(mcp => {
            return (
                mcp.id.toLowerCase().includes(searchTerm) ||
                mcp.title.toLowerCase().includes(searchTerm) ||
                mcp.description.toLowerCase().includes(searchTerm) ||
                (mcp.tags && mcp.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
            );
        });

        return results;
    } catch (err) {
        reply.code(500);
        return { error: 'Search failed' };
    }
});

// Get specific MCP by ID
fastify.get('/registry/:id', async (request, reply) => {
    try {
        const registry = await loadRegistry();
        const mcp = registry.find(m => m.id === request.params.id);
        
        if (!mcp) {
            reply.code(404);
            return { error: 'MCP not found' };
        }
        
        return mcp;
    } catch (err) {
        reply.code(500);
        return { error: 'Failed to get MCP' };
    }
});

// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
