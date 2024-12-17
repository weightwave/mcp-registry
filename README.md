# MCP Registry

A curated list of Model Context Protocol (MCP) servers and tools.

## Contents

- [Fetch](#fetch)
- [Memory](#memory)
- [Puppeteer](#puppeteer)
- [Sequential-Thinking](#sequential-thinking)

## Servers

### Fetch

HTTP request server for making API calls

**Details:**
```json
{
  "command": "uvx",
  "args": [
    "mcp-server-fetch"
  ],
  "type": "stdio"
}
```

### Memory

Memory management server for conversation history

**Details:**
```json
{
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-memory"
  ],
  "type": "stdio"
}
```

### Puppeteer

Browser automation server using Puppeteer

**Details:**
```json
{
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-puppeteer"
  ],
  "type": "stdio"
}
```

### Sequential-Thinking

Sequential thinking server for step-by-step reasoning

**Details:**
```json
{
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-sequential-thinking"
  ],
  "type": "stdio"
}
```

---

Last updated: 2024-12-17 18:32:08