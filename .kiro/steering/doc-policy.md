---
inclusion: always
---

# AI Assistant Execution Policy

## Execution Efficiency Rules

- Read and select the best agent from the agents folder in the steering directory for each task


## Component Reusability (MANDATORY)

### Reuse-First Approach
Before creating any new component, utility, or hook:
1. **Search existing codebase** for reusable components
2. Check `src/components/` for shared UI components
3. Look for existing hooks in `src/hooks/`
4. Review utility functions in `src/lib/` and `src/utils/`

### Reuse Criteria
- Extend existing components if API is compatible
- Reuse if behavior matches ≥80% of requirements
- Compose existing components rather than duplicate

### Creation Guidelines
Only create new components when:
- No suitable existing component found
- Extension would introduce breaking changes or complexity

When creating new components:
- Keep focused and single-responsibility
- Place in appropriate shared or feature-based folders
- Avoid near-duplicates

### Safety Rules
- **Never modify shared components** without explicit permission
- **Never change public APIs** without user confirmation
- Preserve existing component contracts