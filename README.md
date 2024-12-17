# MCP Registry

A curated list of Model Context Protocol (MCP) servers and tools.

## Contents

- [Fetch Server](#fetch)
- [Memory Server](#memory)
- [Puppeteer Server](#puppeteer)
- [Sequential Thinking Server](#sequential-thinking)

## Servers

### Fetch Server

HTTP request server for making API calls

**Details:**
```json
{
  "id": "fetch",
  "title": "Fetch Server",
  "description": "HTTP request server for making API calls",
  "version": "latest",
  "type": "stdio",
  "command": "uvx",
  "args": [
    "mcp-server-fetch"
  ],
  "tags": [
    "http",
    "api",
    "networking"
  ]
}
```

### Memory Server

Memory management server for conversation history

**Details:**
```json
{
  "id": "memory",
  "title": "Memory Server",
  "description": "Memory management server for conversation history",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-memory"
  ],
  "tags": [
    "memory",
    "conversation history",
    "context management"
  ]
}
```

### Puppeteer Server

Browser automation server using Puppeteer

**Details:**
```json
{
  "id": "puppeteer",
  "title": "Puppeteer Server",
  "description": "Browser automation server using Puppeteer",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-puppeteer"
  ],
  "tags": [
    "browser automation",
    "web scraping",
    "testing"
  ]
}
```

### Sequential Thinking Server

Sequential thinking server for step-by-step reasoning

**Details:**
```json
{
  "id": "sequential-thinking",
  "title": "Sequential Thinking Server",
  "description": "Sequential thinking server for step-by-step reasoning",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-sequential-thinking"
  ],
  "tags": [
    "reasoning",
    "step-by-step",
    "problem solving"
  ]
}
```

---

Last updated: 2024-12-17 21:23:52