# MCP Registry API Documentation

This API provides access to the Model Context Protocol (MCP) Registry.

## Setup

### Local Development
1. Install dependencies:
```bash
npm install
```

2. Run the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

### Docker Deployment
1. Build the Docker image:
```bash
docker build -t mcp-registry .
```

2. Run the container:
```bash
# Run in detached mode
docker run -d -p 3000:3000 --name mcp-registry mcp-registry

# Run with interactive output
docker run -it -p 3000:3000 --name mcp-registry mcp-registry
```

3. Stop the container:
```bash
docker stop mcp-registry
```

The server will start at `http://localhost:3000`

## API Endpoints & Example Usage

### 1. Welcome Endpoint (GET /)
```bash
curl http://localhost:3000/
```
Response:
```json
{
    "message": "Welcome to MCP Registry API"
}
```

### 2. Get All Registry Items (GET /registry)
```bash
curl http://localhost:3000/registry
```
Response:
```json
{
    "fetch": {
        "description": "HTTP request server for making external API calls",
        "command": "uvx",
        "args": ["mcp-server-fetch"],
        "type": "stdio",
        "parameters": {}
    },
    "memory": {
        "description": "Memory management server for conversation history",
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-memory"],
        "type": "stdio",
        "parameters": {}
    }
    // ... other items
}
```

### 3. Get Specific MCP Configuration (GET /registry/{name})
```bash
# Get fetch configuration
curl http://localhost:3000/registry/fetch
```
Response:
```json
{
    "name": "fetch",
    "config": {
        "description": "HTTP request server for making external API calls",
        "command": "uvx",
        "args": ["mcp-server-fetch"],
        "type": "stdio",
        "parameters": {}
    }
}
```

### 4. Search Registry (GET /search)
```bash
# Search for memory-related servers
curl "http://localhost:3000/search?q=memory"

# Search by server type
curl "http://localhost:3000/search?q=server"
```
Response example:
```json
{
    "memory": {
        "description": "Memory management server for conversation history",
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-memory"],
        "type": "stdio",
        "parameters": {}
    }
}
```

## Testing All Endpoints

Here's a complete test script:
```bash
# Test welcome endpoint
echo "Testing welcome endpoint:"
curl http://localhost:3000/

echo -e "\n\nTesting full registry:"
curl http://localhost:3000/registry

echo -e "\n\nTesting specific item (fetch):"
curl http://localhost:3000/registry/fetch

echo -e "\n\nTesting search (memory):"
curl "http://localhost:3000/search?q=memory"
```
