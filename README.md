# MCP Registry

A curated list of Model Context Protocol (MCP) servers and tools.

## Contents

- [Airtable Server](#airtable)
- [Axiom Server](#axiom)
- [Brave Search Server](#brave-search)
- [Cloudflare Server](#cloudflare)
- [Fetch Server](#fetch)
- [Filesystem Server](#filesystem)
- [GitHub Server](#github)
- [Google Drive Server](#google-drive)
- [Google Maps Server](#google-maps)
- [Home Assistant Server](#home-assistant)
- [Memory Server](#memory)
- [MongoDB Server](#mongodb)
- [Playwright Server](#playwright)
- [PostgreSQL Server](#postgresql)
- [Puppeteer Server](#puppeteer)
- [Sequential Thinking Server](#sequential-thinking)
- [Slack](#slack)
- [Timezone](#time)
- [Todoist](#todoist)
- [X(Twitter)](#twitter-mcp)
- [Windows CLI](#windows-cli)
- [YouTube Transcript](#youtube-transcript)

## Servers

### Airtable Server

MCP server for managing Airtable bases and tables with comprehensive API support

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-airtable"],
    "type": "stdio"
}
```

### Axiom Server

MCP server for querying data using Axiom Processing Language (APL)

**Details:**
```json
{
    "command": "axiom-mcp",
    "args": ["--config", "config.txt"],
    "type": "stdio"
}
```

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

### Cloudflare Server

MCP server for Cloudflare API integration with support for DNS, Workers, and security services

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@cloudflare/mcp-server-cloudflare"],
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

### Google Drive Server

MCP server for Google Drive integration with file management and sharing capabilities

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-gdrive"],
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

### Home Assistant Server

MCP server for Home Assistant home automation platform integration

**Details:**
```json
{
    "command": "python",
    "args": ["-m", "mcp_server_home_assistant"],
    "type": "stdio"
}
```

### Filesystem

Secure file operations with configurable access controls

**Details:**
```json
{
  "id": "filesystem",
  "title": "Filesystem",
  "description": "Secure file operations with configurable access controls",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "$ALLOWED_DIRS|path$"
  ],
  "tags": [
    "file operation"
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

### Github

Repository management, file operations, and GitHub API integration

**Details:**
```json
{
  "id": "github",
  "title": "Github",
  "description": "Repository management, file operations, and GitHub API integration",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-github"
  ],
  "tags": [
    "git",
    "github"
  ]
}
```

### Google Maps

Location services, directions, and place details

**Details:**
```json
{
  "id": "google-maps",
  "title": "Google Maps",
  "description": "Location services, directions, and place details",
  "version": "latest",
  "type": "N/A",
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-google-maps"
  ],
  "tags": [
    "location"
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
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-memory"],
    "type": "stdio"
}
```

### MongoDB Server

MCP server for executing MongoDB queries and managing MongoDB databases

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@pash1986/mcp-server-mongodb"],
    "type": "stdio"
}
```

### Playwright Server

MCP server for browser automation and testing using Playwright

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@automatalabs/mcp-server-playwright"],
    "type": "stdio"
}
```

### PostgreSQL Server

MCP server for PostgreSQL database operations with comprehensive query support

**Details:**
```json
{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-postgres"],
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

Last updated: 2024-01-17 15:30:00
