import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Motorcycle Off-Road Explorers',
  tagline: 'M.O.R.E. Adventure awaits on the next ride',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ride-more.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bcdady', // Usually your GitHub org/user name.
  projectName: 'ride-more-org', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Club News & Ride Reports',
          blogDescription: 'Latest updates, announcements, and adventure stories from the Motorcycle Off-Road Explorers club',
          postsPerPage: 5,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove editUrl for now - can add later if you want GitHub editing
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MORE Club',
      logo: {
        alt: 'MORE Club Logo',
        src: 'img/more-logo.svg',
      },
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {to: '/events', label: 'Events', position: 'left'},
        {to: '/rides', label: 'Rides', position: 'left'},
        {to: '/members', label: 'Members', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Resources',
        },
        {to: '/blog', label: 'News', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Club Info',
          items: [
            {
              label: 'About MORE',
              to: '/about',
            },
            {
              label: 'Membership',
              to: '/members',
            },
            {
              label: 'Safety Guidelines',
              to: '/docs/safety',
            },
          ],
        },
        {
          title: 'Activities',
          items: [
            {
              label: 'Upcoming Events',
              to: '/events',
            },
            {
              label: 'Ride Reports',
              to: '/rides',
            },
            {
              label: 'Trail Maps',
              to: '/docs/trails',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Contact Us',
              to: '/contact',
            },
            {
              label: 'News & Updates',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Motorcycle Off-Road Explorers Club. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
