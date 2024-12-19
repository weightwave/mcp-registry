import json
import os
from datetime import datetime

def generate_markdown():
    # Get all directories that contain mcp.json
    registry = {}
    for item in os.listdir('.'):
        mcp_json_path = os.path.join(item, 'mcp.json')
        if os.path.isdir(item) and os.path.exists(mcp_json_path):
            with open(mcp_json_path, 'r') as f:
                registry[item] = json.load(f)
    
    # Generate markdown content
    markdown = [
        "# MCP Registry",
        "\nA curated list of Model Context Protocol (MCP) servers and tools.\n",
        "## Contents\n"
    ]
    
    # Add table of contents
    for server_name in sorted(registry.keys()):
        server_info = registry[server_name]
        markdown.append(f"- [{server_info.get('title', server_name.title())}](#{server_name})")
    
    markdown.append("\n## Servers\n")
    
    # Add detailed server information
    for server_name in sorted(registry.keys()):
        server_info = registry[server_name]
        command_info = server_info.get('commandInfo', {})
        
        details = {
            "id": server_info['id'],
            "title": server_info['title'],
            "description": server_info['description'],
            "version": server_info.get('version', 'latest'),
            "type": server_info.get('type', 'N/A'),
            "command": command_info.get('command', ''),
            "args": command_info.get('args', [])
        }
        
        if 'tags' in server_info:
            details['tags'] = server_info['tags']
            
        markdown.extend([
            f"### {server_info['title']}",
            f"\n{server_info['description']}\n",
            "**Details:**",
            "```json",
            json.dumps(details, indent=2),
            "```\n"
        ])
    
    # Add footer
    markdown.extend([
        "---",
        f"\nLast updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    ])
    
    # Write to README.md
    with open('README.md', 'w') as f:
        f.write('\n'.join(markdown))

if __name__ == "__main__":
    generate_markdown()
