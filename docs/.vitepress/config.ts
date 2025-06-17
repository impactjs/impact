import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Impact.js",
  description: "Documentation for Impact.js",
  base: "/impact/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Plugins", link: "/plugins/" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "CLI", link: "/cli" },
          { text: "Configuration", link: "/configuration" },
          { text: "Output Formats", link: "/output-formats" },
        ],
      },
      {
        text: "Plugins",
        items: [
          { text: "Overview", link: "/plugins/README" },
          { text: "Explore", link: "/plugins/explore" },
          { text: "VCS", link: "/plugins/vcs" },
          { text: "Augment", link: "/plugins/augment" },
        ],
      },
      {
        text: "Community",
        items: [
          { text: "Contributing", link: "/contributing" },
          { text: "License", link: "/license" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/impactjs/impact" },
    ],
  },
});
