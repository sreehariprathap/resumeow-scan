# Features Directory

This directory contains all the feature modules of the application. Each feature should be organized in its own folder with the following structure:

```
features/
├── feature-name/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── guards/ (if needed)
│   ├── feature-name.component.ts
│   ├── feature-name.routes.ts
│   └── index.ts
```

## Feature Guidelines

1. **Self-contained**: Each feature should be as self-contained as possible
2. **Lazy loading**: Features should be lazy-loaded when possible
3. **Standalone components**: Use standalone components for better tree-shaking
4. **Core dependencies**: Import core services and constants as needed

## Current Features

### 🏠 Home
- Main dashboard with navigation cards
- Overview of all ResumeOw features
- Quick access to all tools

### 🐱 Cat Scan
- AI-powered resume analysis
- Job description matching
- Scoring and feedback system
- DaisyUI modal for help information

### 📄 Resumes
- Resume management system
- Create, edit, and organize resumes
- Version control for different resume variants
- Quick actions for resume operations

### 🚀 ResumeOw Prompter (External)
- External link to https://prompter-five.vercel.app/
- Professional AI prompting tool
- Resume content generation

Each feature is implemented as standalone components with lazy-loaded routes for optimal performance.
