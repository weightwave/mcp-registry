# MCP Registry

A curated list of Model Context Protocol (MCP) servers and tools.

## Contents

- [Brave Search Server](#brave-search)
- [Fetch Server](#fetch)
- [Filesystem Server](#filesystem)
- [GitHub Server](#github)
- [Google Maps Server](#google-maps)
- [Memory Server](#memory)
- [Puppeteer Server](#puppeteer)
- [Sequential Thinking Server](#sequential-thinking)

## Servers

### Brave Search Server

MCP server for Brave Search API integration

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-brave-search"],
    "type": "stdio"
}
```

### Fetch Server

HTTP request server for making API calls

**Details:**
```json
{
    "command": "uvx",
    "args": ["mcp-server-fetch"],
    "type": "stdio"
}
```

### Filesystem Server

Node.js server implementing Model Context Protocol (MCP) for filesystem operations

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem"],
    "type": "stdio"
}
```

### GitHub Server

MCP server for using the GitHub API

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-github"],
    "type": "stdio"
}
```

### Google Maps Server

MCP server for using the Google Maps API

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-google-maps"],
    "type": "stdio"
}
```

### Memory Server

Memory management server for conversation history

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-memory"],
    "type": "stdio"
}
```

### Puppeteer Server

Browser automation server using Puppeteer

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-puppeteer"],
    "type": "stdio"
}
```

### Sequential Thinking Server

Sequential thinking server for step-by-step reasoning

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"],
    "type": "stdio"
}
```

---

Last updated: 2024-12-17 21:55:00
