import { promises as fs } from 'fs';
import path from 'path';
import { MCPConfig } from '../types';

export class RegistryService {
  private static async scanDirectory(
    dir: string,
    registry: MCPConfig[] = [],
    prefix = ''
  ): Promise<MCPConfig[]> {
    try {
      const items = await fs.readdir(dir);
      for (const item of items) {
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
              const mcpData = JSON.parse(configData) as MCPConfig;
              registry.push(mcpData);
            } catch (err) {
              await RegistryService.scanDirectory(fullPath, registry, relativePath);
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

  public static async loadRegistry(): Promise<MCPConfig[]> {
    try {
      return await RegistryService.scanDirectory('./servers');
    } catch (err) {
      console.error('Error loading registry:', err);
      return [];
    }
  }

  public static async searchRegistry(searchTerm: string): Promise<MCPConfig[]> {
    const registry = await RegistryService.loadRegistry();
    const term = searchTerm.toLowerCase();
    
    return registry.filter(mcp => 
      mcp.id.toLowerCase().includes(term) ||
      mcp.title.toLowerCase().includes(term) ||
      mcp.description.toLowerCase().includes(term) ||
      (mcp.tags && mcp.tags.some(tag => tag.toLowerCase().includes(term)))
    );
  }

  public static async getMCPById(id: string): Promise<MCPConfig | null> {
    const registry = await RegistryService.loadRegistry();
    return registry.find(m => m.id === id) || null;
  }
}
