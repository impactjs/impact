# Output Formats

Impact supports multiple output formats for its analysis reports.

## Supported Formats

### JSON

The default format, providing structured data for programmatic use.

```json
{
  "changes": [
    {
      "file": "src/index.ts",
      "type": "modified",
      "impact": "high"
    }
  ]
}
```

### YAML

A human-readable format for configuration and reports.

```yaml
changes:
  - file: src/index.ts
    type: modified
    impact: high
```

### HTML

Interactive web-based reports with visualizations.

## Configuration

Configure the output format in your `impact.config.ts`:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  output: {
    format: 'json', // or 'yaml', 'html'
    directory: 'impact-reports'
  }
})
``` 