# MCP Registry

A curated list of Model Context Protocol (MCP) servers and tools.

## Contents

- [Airtable](#airtable)
- [AWS KB Retrieval](#aws-kb-retrieval)
- [Axiom](#axiom)
- [Brave Search](#brave-search)
- [Cloudflare](#cloudflare)
- [EverArt](#everart)
- [Fetch Server](#fetch)
- [Filesystem](#filesystem)
- [Google Drive](#gdrive)
- [Git](#git)
- [GitHub](#github)
- [Google Maps](#google-maps)
- [Home Assistant](#home-assistant)
- [Kubernetes](#kubernetes)
- [Pandoc](#mcp-pandoc)
- [Memory Server](#memory)
- [MongoDB](#mongodb)
- [Playwright](#playwright)
- [PostgreSQL](#postgres)
- [Puppeteer Server](#puppeteer)
- [Sequential Thinking Server](#sequential-thinking)
- [Slack](#slack)
- [Timezone](#time)
- [Todoist](#todoist)
- [X(Twitter)](#twitter-mcp)
- [Windows CLI](#windows-cli)
- [YouTube Transcript](#youtube-transcript)

## Servers

### Airtable

MCP server for managing Airtable bases and tables with comprehensive API support for base, table, field, and record operations

**Details:**
```json
{
  "id": "airtable",
  "title": "Airtable",
  "description": "MCP server for managing Airtable bases and tables with comprehensive API support for base, table, field, and record operations",
  "version": "latest",
  "type": "stdio",
  "command": "node",
  "args": [
    "build/index.js"
  ],
  "tags": [
    "database",
    "api",
    "tables",
    "records",
    "fields"
  ]
}
```

### AWS KB Retrieval

Retrieval from AWS Knowledge Base using Bedrock Agent Runtime

**Details:**
```json
{
  "id": "aws-kb-retrieval",
  "title": "AWS KB Retrieval",
  "description": "Retrieval from AWS Knowledge Base using Bedrock Agent Runtime",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-aws-kb-retrieval"
  ],
  "tags": [
    "knowledge base"
  ]
}
```

### Axiom

MCP server for querying data using Axiom Processing Language (APL) with support for dataset operations and APL queries

**Details:**
```json
{
  "id": "axiom",
  "title": "Axiom",
  "description": "MCP server for querying data using Axiom Processing Language (APL) with support for dataset operations and APL queries",
  "version": "latest",
  "type": "stdio",
  "command": "axiom-mcp",
  "args": [
    "--config",
    "config.txt"
  ],
  "tags": [
    "database",
    "query",
    "apl",
    "datasets"
  ]
}
```

### Brave Search

MCP server for Brave Search API integration

**Details:**
```json
{
  "id": "brave-search",
  "title": "Brave Search",
  "description": "MCP server for Brave Search API integration",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-brave-search"
  ],
  "tags": [
    "search",
    "api"
  ]
}
```

### Cloudflare

MCP server for Cloudflare API integration with support for DNS, Workers, and security services

**Details:**
```json
{
  "id": "cloudflare",
  "title": "Cloudflare",
  "description": "MCP server for Cloudflare API integration with support for DNS, Workers, and security services",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@cloudflare/mcp-server-cloudflare"
  ],
  "tags": [
    "cdn",
    "dns",
    "security",
    "workers"
  ]
}
```

### EverArt

AI image generation using various models

**Details:**
```json
{
  "id": "everart",
  "title": "EverArt",
  "description": "AI image generation using various models",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-everart"
  ],
  "tags": [
    "image generation"
  ]
}
```

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

### Filesystem

Node.js server implementing Model Context Protocol (MCP) for filesystem operations

**Details:**
```json
{
  "id": "filesystem",
  "title": "Filesystem",
  "description": "Node.js server implementing Model Context Protocol (MCP) for filesystem operations",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem"
  ],
  "tags": [
    "file operation",
    "filesystem"
  ]
}
```

### Google Drive

MCP server for Google Drive integration, providing file management and sharing capabilities

**Details:**
```json
{
  "id": "gdrive",
  "title": "Google Drive",
  "description": "MCP server for Google Drive integration, providing file management and sharing capabilities",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-gdrive"
  ],
  "tags": [
    "storage",
    "files",
    "google",
    "cloud"
  ]
}
```

### Git

Tools to read, search, and manipulate Git repositories

**Details:**
```json
{
  "id": "git",
  "title": "Git",
  "description": "Tools to read, search, and manipulate Git repositories",
  "version": "latest",
  "type": "N/A",
  "command": "uvx",
  "args": [
    "mcp-server-git",
    "--repository",
    "$REPO_PATH|path$"
  ],
  "tags": [
    "git"
  ]
}
```

### GitHub

MCP server for using the GitHub API

**Details:**
```json
{
  "id": "github",
  "title": "GitHub",
  "description": "MCP server for using the GitHub API",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-github"
  ],
  "tags": [
    "git",
    "github",
    "api"
  ]
}
```

### Google Maps

MCP server for using the Google Maps API

**Details:**
```json
{
  "id": "google-maps",
  "title": "Google Maps",
  "description": "MCP server for using the Google Maps API",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-google-maps"
  ],
  "tags": [
    "maps",
    "location",
    "api"
  ]
}
```

### Home Assistant

MCP server for interacting with Home Assistant home automation platform, providing control over smart home devices and automation

**Details:**
```json
{
  "id": "home-assistant",
  "title": "Home Assistant",
  "description": "MCP server for interacting with Home Assistant home automation platform, providing control over smart home devices and automation",
  "version": "latest",
  "type": "stdio",
  "command": "python",
  "args": [
    "-m",
    "mcp_server_home_assistant"
  ],
  "tags": [
    "home-automation",
    "iot",
    "smart-home",
    "automation"
  ]
}
```

### Kubernetes

Connect to Kubernetes cluster and manage pods, deployments, and services.

**Details:**
```json
{
  "id": "kubernetes",
  "title": "Kubernetes",
  "description": "Connect to Kubernetes cluster and manage pods, deployments, and services.",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "mcp-server-kubernetes"
  ],
  "tags": [
    "kubernetes"
  ]
}
```

### Pandoc

MCP server for seamless document format conversion using Pandoc, supporting Markdown, HTML, and plain text, with other formats like PDF, csv and docx in development.

**Details:**
```json
{
  "id": "mcp-pandoc",
  "title": "Pandoc",
  "description": "MCP server for seamless document format conversion using Pandoc, supporting Markdown, HTML, and plain text, with other formats like PDF, csv and docx in development.",
  "version": "latest",
  "type": "N/A",
  "command": "uvx",
  "args": [
    "mcp-pandoc"
  ],
  "tags": [
    "file operation"
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

### MongoDB

MCP server for executing MongoDB queries and managing MongoDB databases with local connection support

**Details:**
```json
{
  "id": "mongodb",
  "title": "MongoDB",
  "description": "MCP server for executing MongoDB queries and managing MongoDB databases with local connection support",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@pash1986/mcp-server-mongodb"
  ],
  "tags": [
    "database",
    "query",
    "nosql",
    "mongodb"
  ]
}
```

### Playwright

MCP server for browser automation and testing using Playwright with support for multiple browser engines

**Details:**
```json
{
  "id": "playwright",
  "title": "Playwright",
  "description": "MCP server for browser automation and testing using Playwright with support for multiple browser engines",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@automatalabs/mcp-server-playwright"
  ],
  "tags": [
    "automation",
    "testing",
    "browser",
    "scraping"
  ]
}
```

### PostgreSQL

MCP server for PostgreSQL database operations with support for queries, transactions, and schema management

**Details:**
```json
{
  "id": "postgres",
  "title": "PostgreSQL",
  "description": "MCP server for PostgreSQL database operations with support for queries, transactions, and schema management",
  "version": "latest",
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-postgres"
  ],
  "tags": [
    "database",
    "sql",
    "postgresql",
    "relational"
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

### Slack

Channel management and messaging capabilities

**Details:**
```json
{
  "id": "slack",
  "title": "Slack",
  "description": "Channel management and messaging capabilities",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-slack"
  ],
  "tags": [
    "slack"
  ]
}
```

### Timezone

Time and timezone conversion capabilities

**Details:**
```json
{
  "id": "time",
  "title": "Timezone",
  "description": "Time and timezone conversion capabilities",
  "version": "latest",
  "type": "N/A",
  "command": "uvx",
  "args": [
    "mcp-server-time"
  ],
  "tags": [
    "time"
  ]
}
```

### Todoist

Interact with Todoist to manage your tasks.

**Details:**
```json
{
  "id": "todoist",
  "title": "Todoist",
  "description": "Interact with Todoist to manage your tasks.",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@abhiz123/todoist-mcp-server"
  ],
  "tags": [
    "todoist"
  ]
}
```

### X(Twitter)

Interact with twitter API. Post tweets and search for tweets by query.

**Details:**
```json
{
  "id": "twitter-mcp",
  "title": "X(Twitter)",
  "description": "Interact with twitter API. Post tweets and search for tweets by query.",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@enescinar/twitter-mcp"
  ],
  "tags": [
    "twitter"
  ]
}
```

### Windows CLI

MCP server for secure command-line interactions on Windows systems, enabling controlled access to PowerShell, CMD, and Git Bash shells.

**Details:**
```json
{
  "id": "windows-cli",
  "title": "Windows CLI",
  "description": "MCP server for secure command-line interactions on Windows systems, enabling controlled access to PowerShell, CMD, and Git Bash shells.",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@simonb97/server-win-cli"
  ],
  "tags": [
    "windows"
  ]
}
```

### YouTube Transcript

Retrieval of transcripts from YouTube videos

**Details:**
```json
{
  "id": "youtube-transcript",
  "title": "YouTube Transcript",
  "description": "Retrieval of transcripts from YouTube videos",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@kimtaeyoon83/mcp-server-youtube-transcript"
  ],
  "tags": [
    "youtube"
  ]
}
```

---

Last updated: 2024-12-19 16:08:29