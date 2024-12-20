# Create A template

You can copy this template and rename it to your MCP's id.

The MCP's id should be the same as the directory name.

If there is a README.md in the directory, it will be used as the description. If not, the description will be the README.md in your source.

```json
{
    // Same as the directory name
    "id": "airtable",
    "title": "Airtable",
    "description": "MCP server for managing Airtable bases and tables with comprehensive API support for base, table, field, and record operations",
    "tags": ["database", "api", "tables", "records", "fields"],
    "creator": "felores",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/airtable.svg",
    "publishDate": "2024-01-17T00:00:00Z",
    "rating": 5,
    // "sse" / "stdio"
    "type": "stdio",
    "commandInfo": {
        "command": "node",
        "args": ["build/index.js"],
        "env": {
            "AIRTABLE_API_KEY": "<YOUR_API_KEY>"
        }
    },
    // Just keep it
    "defVersion": "1",
    // Available environment variables
    "parameters": {
        "AIRTABLE_API_KEY": {
            "type": "string",
            "required": true,
            "description": "Airtable Personal Access Token for authentication"
        }
    },
    "sources": {
        "github": "https://github.com/felores/mcp-airtable",
        "npm": "https://www.npmjs.com/package/mcp-airtable"
    }
}
```
