const express = require('express')
const cors = require('cors')
const fs = require('fs').promises
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Load registry from directories recursively
async function scanDirectory(dir, registry = [], prefix = '') {
  try {
    const items = await fs.readdir(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const mcpJsonPath = path.join(fullPath, 'mcp.json')
      const relativePath = prefix ? path.join(prefix, item) : item

      try {
        const stat = await fs.stat(fullPath)
        if (stat.isDirectory()) {
          try {
            const configData = await fs.readFile(mcpJsonPath, 'utf8')
            const mcpData = JSON.parse(configData)
            registry.push(mcpData)
          } catch (err) {
            // If no mcp.json, continue scanning subdirectories
            await scanDirectory(fullPath, registry, relativePath)
          }
        }
      } catch (err) {
        continue
      }
    }
    return registry
  } catch (err) {
    console.error(`Error scanning directory ${dir}:`, err)
    return registry
  }
}

async function loadRegistry() {
  try {
    return await scanDirectory('.')
  } catch (err) {
    console.error('Error loading registry:', err)
    return []
  }
}

// 修改分页辅助函数
function paginateResults(array, page = 1, limit = null) {
  // 如果没有指定 limit，返回所有数据
  if (!limit) {
    return {
      data: array,
      pagination: {
        total: array.length,
        currentPage: 1,
        totalPages: 1,
        limit: array.length,
      },
    }
  }

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return {
    data: array.slice(startIndex, endIndex),
    pagination: {
      total: array.length,
      currentPage: page,
      totalPages: Math.ceil(array.length / limit),
      limit: limit,
    },
  }
}

// Welcome endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MCP Registry API' })
})

// 修改 registry 端点
app.get('/registry', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = req.query.limit ? parseInt(req.query.limit) : null

    const registry = await loadRegistry()
    const paginatedRegistry = paginateResults(registry, page, limit)
    res.json(paginatedRegistry)
  } catch (err) {
    res.status(500).json({ error: '加载注册表失败' })
  }
})

// Search registry
app.get('/search', async (req, res) => {
  try {
    const { q } = req.query
    const page = parseInt(req.query.page) || 1
    const limit = req.query.limit ? parseInt(req.query.limit) : null

    if (!q) {
      return res.status(400).json({ error: '需要搜索关键词' })
    }

    const registry = await loadRegistry()
    const searchTerm = q.toLowerCase()

    const results = registry.filter((mcp) => {
      return (
        mcp.id.toLowerCase().includes(searchTerm) ||
        mcp.title.toLowerCase().includes(searchTerm) ||
        mcp.description.toLowerCase().includes(searchTerm) ||
        (mcp.tags &&
          mcp.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
      )
    })

    const paginatedResults = paginateResults(results, page, limit)
    res.json(paginatedResults)
  } catch (err) {
    res.status(500).json({ error: '搜索失败' })
  }
})

// Get specific MCP by ID
app.get('/registry/:id', async (req, res) => {
  try {
    const registry = await loadRegistry()
    const mcp = registry.find((m) => m.id === req.params.id)

    if (!mcp) {
      return res.status(404).json({ error: 'MCP not found' })
    }

    res.json(mcp)
  } catch (err) {
    res.status(500).json({ error: 'Failed to get MCP' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
