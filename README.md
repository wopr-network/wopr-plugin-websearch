# @wopr-network/wopr-plugin-websearch

> Web search plugin for WOPR — real-time search via Brave, Google, and xAI with automatic fallback and SSRF protection.

## Install

```bash
npm install @wopr-network/wopr-plugin-websearch
```

## Usage

```bash
wopr plugin install github:wopr-network/wopr-plugin-websearch
```

Then configure via `wopr configure --plugin @wopr-network/wopr-plugin-websearch`.

## Configuration

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `BRAVE_SEARCH_API_KEY` | env var | No | Brave Search API key |
| `GOOGLE_SEARCH_API_KEY` | env var | No | Google Custom Search API key |
| `GOOGLE_SEARCH_CX` | env var | No | Google Custom Search engine ID |
| `XAI_API_KEY` | env var | No | xAI API key for Grok search |

At least one provider key is required. Providers are tried in order: Brave → Google → xAI.

## What it does

The websearch plugin exposes a `web_search` A2A tool that agents can use to retrieve live search results during conversations. It chains across multiple search providers with automatic fallback (Brave, Google, xAI), so if one provider is unavailable the next is tried transparently. All outbound URLs are validated to prevent SSRF attacks before requests are made.

## License

MIT
