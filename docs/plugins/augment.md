# Augment Plugins

Augment plugins enhance the analysis by adding additional context and metadata to the results. They can integrate with external services and tools to provide more detailed information about changes.

## Built-in Augment Plugins

### Linear Plugin

The Linear plugin integrates with Linear to:
- Link changes to Linear issues
- Add issue metadata to results
- Track issue status and priority
- Include team information

### Configuration

```typescript
export default defineConfig({
  entries: [...],
  plugins: [
    {
      type: 'linear',
      options: {
        apiKey: process.env.LINEAR_API_KEY,
        teams: ['ENG', 'DESIGN'], // Optional: Filter by teams
        states: ['TODO', 'IN_PROGRESS'], // Optional: Filter by issue states
        labels: ['bug', 'feature'] // Optional: Filter by labels
      }
    }
  ]
})
```

### Environment Variables

- `LINEAR_API_KEY`: Your Linear API key (required)

### Features

- Tracks Linear issues referenced in commits
- Adds issue metadata to the analysis
- Groups changes by Linear issues
- Provides issue status and priority information

### Output Integration

The Linear plugin adds the following information to the output:

```json
{
  "updates": {
    "abc123": {
      "id": "abc123",
      "title": "Update feature X",
      "linear": {
        "issue": "ENG-123",
        "status": "IN_PROGRESS",
        "priority": "HIGH",
        "team": "ENG",
        "labels": ["feature"]
      }
    }
  }
}
```

### Best Practices

1. **API Key Security**
   - Never commit your Linear API key
   - Use environment variables for configuration
   - Rotate keys regularly

2. **Team Organization**
   - Use team filters to focus on relevant changes
   - Align teams with your project structure
   - Consider using multiple team configurations

3. **Issue Tracking**
   - Reference Linear issues in commit messages
   - Keep issue status up to date
   - Use labels for better categorization

## Creating Custom Augment Plugins

To create a custom augment plugin, you need to implement the following interface:

```typescript
interface AugmentPlugin {
  type: 'augment';
  options?: {
    // plugin-specific options
  };
  augment: (updates: Map<string, Update>, context: PluginContext) => Promise<void>;
}
```

### Example Custom Augment Plugin

Here's an example of a custom augment plugin for Jira:

```typescript
const jiraPlugin: AugmentPlugin = {
  type: 'augment',
  options: {
    baseUrl: 'https://your-domain.atlassian.net',
    username: process.env.JIRA_USERNAME,
    apiToken: process.env.JIRA_API_TOKEN,
    project: 'PROJ'
  },
  async augment(updates, context) {
    // Implement Jira integration logic
  }
}

export default defineConfig({
  entries: [...],
  plugins: [jiraPlugin]
})
```

## Best Practices

1. **API Rate Limiting**: Implement rate limiting for API calls
2. **Error Handling**: Handle API errors gracefully
3. **Caching**: Cache API responses when appropriate
4. **Logging**: Add detailed logging for debugging
5. **Testing**: Write comprehensive tests for your plugin

## Example Implementation

Here's a more complete example of a custom augment plugin:

```typescript
import { JiraClient } from 'jira-client';
import { logger } from '@impacts/logger';

interface JiraPluginOptions {
  baseUrl: string;
  username: string;
  apiToken: string;
  project: string;
  maxIssues?: number;
  includeComments?: boolean;
}

const jiraPlugin: AugmentPlugin = {
  type: 'augment',
  options: {
    baseUrl: 'https://your-domain.atlassian.net',
    username: process.env.JIRA_USERNAME,
    apiToken: process.env.JIRA_API_TOKEN,
    project: 'PROJ',
    maxIssues: 100,
    includeComments: false
  },
  async augment(updates, context) {
    const options = this.options as JiraPluginOptions;
    
    try {
      // Initialize Jira client
      const jira = new JiraClient({
        protocol: 'https',
        host: options.baseUrl,
        username: options.username,
        password: options.apiToken,
        apiVersion: '2',
        strictSSL: true
      });
      
      // Process each update
      for (const [id, update] of updates) {
        // Extract Jira issue keys from update title/description
        const issueKeys = extractIssueKeys(update.title);
        
        if (issueKeys.length > 0) {
          // Fetch issue details from Jira
          const issues = await Promise.all(
            issueKeys.map(key => jira.findIssue(key))
          );
          
          // Add Jira metadata to update
          update.meta = {
            ...update.meta,
            jira: issues.map(issue => ({
              key: issue.key,
              summary: issue.fields.summary,
              status: issue.fields.status.name,
              priority: issue.fields.priority.name,
              assignee: issue.fields.assignee?.displayName
            }))
          };
        }
      }
    } catch (error) {
      logger.error('Error in Jira plugin:', error);
    }
  }
}

function extractIssueKeys(text: string): string[] {
  const regex = /[A-Z]+-\d+/g;
  return text.match(regex) || [];
}

## Common Use Cases

1. **Issue Tracking Integration**
   - Link changes to issues
   - Add issue metadata
   - Track issue status

2. **Code Review Integration**
   - Link changes to pull requests
   - Add review status
   - Include reviewer information

3. **CI/CD Integration**
   - Link changes to builds
   - Add build status
   - Include test results

4. **Documentation Integration**
   - Link changes to documentation
   - Add documentation status
   - Include related docs

5. **Security Integration**
   - Link changes to security scans
   - Add security status
   - Include vulnerability information 