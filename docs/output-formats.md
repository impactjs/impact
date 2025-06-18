# Output Formats

Impact supports multiple output formats for its analysis reports.

## Supported Formats

### JSON

A structured format providing data for programmatic use.

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

Configure the output format in your `impact.config.ts`:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  id: 'my-project', // Required for 'impact' format
  entries: [
    {
      path: 'src',
      description: 'Source code'
    }
  ],
  output: {
    format: 'json', // 'json', 'yaml', 'serve', or 'impact'
    directory: 'impact-reports'
  }
})
```

## Command Line Usage

You can also specify the format directly via command line:

```bash
# Output as JSON
npx impact run --format json

# Output as YAML
npx impact run --format yaml

# Serve results on localhost:3630
npx impact run --format serve

# Upload to Impact platform
npx impact run --format impact
```

## Default Format

The default output format is YAML if not specified in configuration or command line options. 