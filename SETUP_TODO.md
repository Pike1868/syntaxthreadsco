# Multi-Agent Infrastructure Setup for Syntax Threads

## Quick Setup Commands

1. **Bootstrap the multi-agent infrastructure:**
```bash
python ~/SyncDrive/codeProjects/llm-bootstrap/bootstrap.py ~/SyncDrive/codeProjects/llm-bootstrap/templates/web-app.yaml
```

2. **Customize the generated files for Syntax Threads context:**
   - Update project name from "Web Application" to "Syntax Threads"
   - Add Printify API integration context
   - Include e-commerce + clothing brand specifics
   - Note: This is a React + TypeScript project with Redux Toolkit

3. **Add bootstrap files to .gitignore:**
```bash
echo "
# Multi-agent development workflow files  
CLAUDE.md
gemini-cli.md
chatgpt.md
DEV_LOG.md
docker-compose.yml" >> .gitignore
```

4. **Clean up unnecessary directories:**
   - Remove frontend/ and backend/ dirs (this is frontend-only)
   - Remove tests/frontend/ and tests/backend/ (keep main tests/ if needed)

## Project Context for Agents

- **Project:** Syntax Threads (clothing e-commerce store)
- **Tech Stack:** React + TypeScript + Redux Toolkit + TailwindCSS + Vite
- **Special Features:** Printify API integration, clothing brand focus
- **Current Status:** Deployed and functional store

## Agent Roles

- **Claude Code:** Implementation, refactoring, testing
- **Gemini CLI:** Planning, git operations, architecture, deployment
- **ChatGPT:** UX/UI brainstorming, documentation, content

*Delete this file after setup is complete.*