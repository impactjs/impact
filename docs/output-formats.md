# Output Formats

Impact supports multiple output formats for its analysis results. You can specify the output format using the `--format` option or in your configuration file.

## Available Formats

### JSON

The JSON format provides a structured representation of the analysis results.

```bash
impact --format json --outfile impact.json
```

Example output:
```json
{
  "entries": [
    {
      "path": "src",
      "description": "Source code",
      "updates": [
        {
          "update": "abc123",
          "files": {
            "primary": ["file1.ts", "file2.ts"],
            "secondary": ["file3.ts"]
          }
        }
      ]
    }
  ],
  "files": {
    "file1.ts": {
      "path": "src/file1.ts",
      "status": "modified"
    }
  },
  "updates": {
    "abc123": {
      "id": "abc123",
      "title": "Update feature X",
      "author": "John Doe",
      "timestamp": 1678901234,
      "references": [],
      "meta": ["abc123", "Update feature X"]
    }
  }
}
```

### YAML

The YAML format provides a human-readable representation of the analysis results.

```bash
impact --format yaml --outfile impact.yaml
```

Example output:
```yaml
entries:
  - path: src
    description: Source code
    updates:
      - update: abc123
        files:
          primary:
            - file1.ts
            - file2.ts
          secondary:
            - file3.ts
files:
  file1.ts:
    path: src/file1.ts
    status: modified
updates:
  abc123:
    id: abc123
    title: Update feature X
    author: John Doe
    timestamp: 1678901234
    references: []
    meta:
      - abc123
      - Update feature X
```

### HTML

The HTML format provides a visual representation of the analysis results with an interactive interface.

```bash
impact --format html --outfile impact.html
```

The HTML output includes:
- Interactive file tree
- Change visualization
- Filtering options
- Search functionality
- Export options

## Configuration

You can specify the default output format in your `impact.config.ts`:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  entries: [...],
  format: 'html',
  outfile: 'impact.html'
})
```

## Output Structure

The output structure is consistent across all formats and includes:

### Entries

Array of entry points that were analyzed:
- `path`: Path to the entry point
- `description`: Description of the entry point
- `updates`: Array of updates affecting this entry

### Files

Map of files that were changed:
- `path`: Full path to the file
- `status`: File status (added, modified, deleted)

### Updates

Map of updates that were found:
- `id`: Unique identifier
- `title`: Update title
- `author`: Author of the update
- `timestamp`: Update timestamp
- `references`: Array of references
- `meta`: Additional metadata

## Custom Output Formats

You can create custom output formats by implementing the appropriate interface:

```typescript
interface OutputFormatter {
  format: (result: ImpactResult) => string;
  extension: string;
}
```

Example custom formatter:

```typescript
const markdownFormatter: OutputFormatter = {
  format: (result: ImpactResult) => {
    let output = '# Impact Analysis Report\n\n';
    
    // Add entries section
    output += '## Entries\n\n';
    for (const entry of result.entries) {
      output += `### ${entry.path}\n`;
      output += `${entry.description}\n\n`;
      
      // Add updates
      for (const update of entry.updates) {
        const updateData = result.updates[update.update];
        output += `- ${updateData.title} (${updateData.author})\n`;
      }
      output += '\n';
    }
    
    return output;
  },
  extension: 'md'
};
```

## Best Practices

1. **Format Selection**
   - Use JSON for programmatic processing
   - Use YAML for human readability
   - Use HTML for visual presentation

2. **File Naming**
   - Include timestamp in filename
   - Use appropriate file extensions
   - Consider using different formats for different purposes

3. **Output Location**
   - Use consistent output directory
   - Consider using environment-specific paths
   - Implement proper file permissions

4. **Error Handling**
   - Handle file system errors
   - Validate output before writing
   - Implement proper error reporting 