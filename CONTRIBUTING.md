# Contributing to Impact

Thank you for your interest in contributing to Impact! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/impact.git
   cd impact
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. Make your changes and commit them:
   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve bug"
   ```

3. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request from your fork to the main repository.

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or modifying tests
- `chore:` for maintenance tasks

Example:
```
feat: add support for custom output formats
fix: resolve issue with plugin loading
docs: update README with new features
```

## Testing

1. Run tests:
   ```bash
   pnpm test
   ```

2. Run linting:
   ```bash
   pnpm lint
   ```

3. Run type checking:
   ```bash
   pnpm type-check
   ```

## Documentation

1. Update documentation in the `docs` directory
2. Follow the existing documentation style
3. Include examples where appropriate
4. Update README.md if necessary

## Pull Request Process

1. Ensure your PR description clearly describes the changes
2. Include any relevant issue numbers
3. Add tests for new features or bug fixes
4. Update documentation for any changes
5. Ensure all tests pass
6. Wait for review and address any feedback

## Issue Guidelines

1. Use the issue templates
2. Provide clear and detailed information
3. Include steps to reproduce for bugs
4. Include expected and actual behavior
5. Add screenshots if relevant

## Release Process

1. Version bumping is handled automatically
2. Changelog is generated from commit messages
3. Releases are created by maintainers

## Questions?

Feel free to [open an issue](https://github.com/impactjs/impact/issues/new) for any questions about contributing.
