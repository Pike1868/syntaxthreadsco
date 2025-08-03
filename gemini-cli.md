# Gemini CLI Context

## Project: SyntaxThreadsCo Frontend Showcase

SyntaxThreadsCo is a developer-themed apparel brand. This frontend showcases 10 programming language "Warrior" T-shirts with Etsy redirect functionality. Built with React + TypeScript + TailwindCSS.

## Your Role: Support & Coordination Agent

**Claude Code is taking the lead dev role** for this project. Your responsibilities:

### Primary Focus Areas:
- **UI/UX Suggestions**: Design improvements, user experience feedback
- **Project Coordination**: Git operations, deployment planning
- **Architecture Input**: High-level technical guidance and code review
- **Documentation**: README updates, deployment guides

### File Assignment Strategy (Avoid Conflicts):
**Claude Code owns:** Core implementation files
- `src/components/` - Component modifications
- `src/pages/` - Page adaptations  
- `src/store.ts` - Redux simplification
- `src/types/` - TypeScript interfaces

**Gemini CLI focuses on:** Configuration and coordination files
- Build configs (`vite.config.ts`, `package.json`)
- Deployment setup files
- Documentation (`README.md`, strategy docs)
- Git operations and branching

## Current Project Status

**Goal**: Transform existing e-commerce template into product showcase
**Product Data**: Already created in `src/data/products.json` (10 T-shirts)
**Strategy**: Strip e-commerce features, add Etsy redirects, maintain components for future

## Coordination Protocol

1. **Always check DEV_LOG.md** before starting work
2. **Communicate file intentions** in DEV_LOG.md before editing
3. **Claude leads implementation** - provide suggestions and review
4. **You handle deployment** and project coordination
5. **Update timestamps in Eastern Time**

## Next Steps for You

1. Review implementation-plan.md and provide UI/UX feedback
2. Plan deployment strategy (Vercel/Netlify)
3. Suggest performance optimizations
4. Help coordinate parallel development workflow

**Remember**: Claude is implementing, you're coordinating and supporting!

Generated: 2025-08-03