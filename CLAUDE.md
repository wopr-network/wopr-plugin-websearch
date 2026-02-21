# wopr-plugin-websearch

`@wopr-network/wopr-plugin-websearch` — Multi-provider web search plugin for WOPR with SSRF protection.

## Commands

```bash
npm run build     # tsc -p tsconfig.plugin.json
npm run dev       # tsc -p tsconfig.plugin.json --watch
npm run check     # biome check + tsc --noEmit (run before committing)
npm run lint:fix  # biome check --fix src/
npm run format    # biome format --write src/
npm test          # vitest run
```

**Linter/formatter is Biome.** Never add ESLint/Prettier config.

## Architecture

```
src/
  index.ts              # Plugin entry — exports WOPRPlugin default
  web-search.ts         # A2A tool builder, SSRF filter, rate limiter, provider factory
  providers/
    index.ts            # Barrel export
    types.ts            # WebSearchResult, WebSearchProvider, WebSearchProviderConfig
    brave.ts            # Brave Search API provider
    google.ts           # Google Custom Search provider
    xai.ts              # xAI/Grok search provider
```

## Plugin Contract

This plugin imports ONLY from `@wopr-network/plugin-types` — never from wopr core internals.

```typescript
import type { WOPRPlugin, WOPRPluginContext } from "@wopr-network/plugin-types";
```

The default export must satisfy `WOPRPlugin`. The plugin receives `WOPRPluginContext` at `init()` time.

## Key Conventions

- Node >= 22, ESM (`"type": "module"`)
- Biome for linting/formatting
- Conventional commits with issue key: `feat: add search caching (WOP-XXX)`
- `npm run check` must pass before every commit

## Issue Tracking

All issues in **Linear** (team: WOPR). No GitHub issues. Issue descriptions start with `**Repo:** wopr-network/wopr-plugin-websearch`.
