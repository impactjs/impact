# Output Formats

Impact supports multiple output formats for its analysis results. You can specify the output format using the `--format` option or in your configuration file.

## Available Formats

### JSON

The JSON format provides a structured representation of the analysis results.

```bash
npx impact run --format json --outfile impact.json
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
npx impact run --format yaml --outfile impact.yaml
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

### Serve

Serves the analysis results as a JSON API endpoint on port 3630.

```bash
npx impact run --format serve
```

This will start a local server at `http://localhost:3630` that serves the analysis results as JSON. The server supports CORS and can be accessed from web applications.

### Impact

Uploads the analysis results to the Impact platform for storage and sharing.

```bash
npx impact run --format impact
```

This format requires:
- A project `id` in your configuration
- Authentication via global configuration (`~/.config/impact/config.json`)
- The results will be uploaded to the Impact platform and associated with your project

## Configuration

You can specify the default output format in your `impact.config.ts`:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  id: 'my-project', // Required for 'impact' format
  entries: [...],
  output: {
    format: 'yaml', // 'json', 'yaml', 'serve', or 'impact'
    outfile: 'impact.yaml'
  }
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

## Best Practices

1. **Format Selection**
   - Use JSON for programmatic processing
   - Use YAML for human readability
   - Use `serve` for web application integration
   - Use `impact` for platform storage and sharing

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

5. **Authentication**
   - Ensure global configuration is set up for `impact` format
   - Verify project ID is configured for platform uploads 