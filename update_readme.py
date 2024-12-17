import json
import os
from datetime import datetime

def generate_markdown():
    # Read the registry.json file
    with open('registry.json', 'r') as f:
        registry = json.load(f)
    
    # Generate markdown content
    markdown = [
        "# MCP Registry",
        "\nA curated list of Model Context Protocol (MCP) servers and tools.\n",
        "## Contents\n"
    ]
    
    # Add table of contents
    for server_name in registry:
        markdown.append(f"- [{server_name.title()}](#{server_name})")
    
    markdown.append("\n## Servers\n")
    
    # Add detailed server information
    for server_name, server_info in registry.items():
        markdown.extend([
            f"### {server_name.title()}",
            f"\n{server_info['description']}\n",
            "**Details:**",
            "```json",
            json.dumps({
                "command": server_info['command'],
                "args": server_info['args'],
                "type": server_info['type']
            }, indent=2),
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
