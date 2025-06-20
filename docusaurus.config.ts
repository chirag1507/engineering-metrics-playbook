import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Engineering Metrics Playbook",
  tagline: "A Guide to Measuring and Improving Engineering Productivity",
  // favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://main.d2p1jk0k7cu670c.amplifyapp.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Avesta Technologies",
  projectName: "engineering-metrics-playbook",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/AvestaTechnologies/engineering-metrics-playbook/tree/main/', // Example edit URL
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/AvestaTechnologies/engineering-metrics-playbook/tree/main/', // Example edit URL
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Engineering Metrics Playbook",
      // logo: {
      //   alt: "Avesta Technologies Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Playbook",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Playbook",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
            {
              label: "Why Metrics Matter",
              to: "/docs/why-metrics-matter",
            },
            {
              label: "Understanding Our Approach",
              to: "/docs/understanding-our-approach",
            },
            {
              label: "Metrics Categorization",
              to: "/docs/metrics-categorization",
            },
            {
              label: "Implementing a Metrics Culture",
              to: "/docs/implementing-metrics-culture",
            },
            {
              label: "Conclusion",
              to: "/docs/conclusion",
            },
          ],
        },
        {
          title: "Metric Categories",
          items: [
            {
              label: "Project Flow",
              to: "/docs/project-flow-metrics",
            },
            {
              label: "Code Delivery",
              to: "/docs/code-delivery-metrics",
            },
            {
              label: "Code Quality",
              to: "/docs/code-quality-metrics",
            },
            {
              label: "Team Health",
              to: "/docs/team-health-metrics",
            },
            {
              label: "Product Impact",
              to: "/docs/product-impact-metrics",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Glossary",
              to: "/docs/glossary",
            },
            {
              label: "References",
              to: "/docs/references",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Avesta Technologies.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
