import type { WOPRPlugin, WOPRPluginContext } from "@wopr-network/plugin-types";
import { buildWebSearchA2ATools } from "./web-search.js";

const plugin: WOPRPlugin = {
  name: "wopr-plugin-websearch",
  version: "1.0.0",
  description: "Web search via Brave, Google, and xAI with fallback chain and SSRF protection",

  async init(ctx: WOPRPluginContext) {
    // Config is read from environment variables at search time:
    //   GOOGLE_SEARCH_API_KEY, GOOGLE_SEARCH_CX
    //   BRAVE_SEARCH_API_KEY
    //   XAI_API_KEY
    if (ctx.registerA2AServer) {
      ctx.registerA2AServer(buildWebSearchA2ATools({}));
    }

    ctx.log.info("Web search plugin initialized");
  },

  async shutdown() {
    // No persistent resources to clean up
  },
};

export default plugin;

export { BraveSearchProvider } from "./providers/brave.js";
export { GoogleSearchProvider } from "./providers/google.js";
export type { WebSearchProvider, WebSearchProviderConfig, WebSearchResult } from "./providers/index.js";
export { XaiSearchProvider } from "./providers/xai.js";
// Re-export types for consumers
export type { WebSearchPluginConfig } from "./web-search.js";
export { isPrivateUrl } from "./web-search.js";
