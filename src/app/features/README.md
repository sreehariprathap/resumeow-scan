# Features Directory

This directory contains all the feature modules of the application. Each feature should be organized in its own folder with the following structure:

```
features/
├── feature-name/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── guards/ (if needed)
│   ├── feature-name.module.ts
│   ├── feature-name-routing.module.ts
│   └── index.ts
```

## Feature Guidelines

1. **Self-contained**: Each feature should be as self-contained as possible
2. **Lazy loading**: Features should be lazy-loaded when possible
3. **Shared dependencies**: Use the shared module for common functionality
4. **Core dependencies**: Import core services and constants as needed

## Example Features to be Added

- Authentication
- Dashboard
- Resume Scanning
- Profile Management
- Settings

Each feature will be added as development progresses.
