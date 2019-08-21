/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/bull.svg",
    infoLink: "https://www.polymath.network",
    pinned: true
  }
];

const siteConfig = {
  title: "Polymath Network Developer Portal" /* title for your website */,
  tagline: "What you need to get started developing with Polymath",
  url: "https://developers.polymath.network" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  defaultVersionShown: "2.1.0",
  projectName: "Polymath-Developer-Portal",
  organizationName: "Polymath",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "doc1", label: "Docs" },
    // { doc: "doc2", label: "Bug Bounty" },
    { doc: "doc4", label: "Tutorial" },
    { doc: "sdkhome", label: "SDK" },
    { href: "/docs/version-2.1.0-interfaces_ISTO.html", label: "Contracts" },
    { page: "help", label: "Help" },
    {
      href: "https://blog.polymath.network/tech/home",
      external: true,
      label: "Tech Blog"
    }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/text.svg",
  footerIcon: "img/bull.svg",
  favicon: "img/favicon.png",

  /* colors for website */
  colors: {
    primaryColor: "#313A62",
    secondaryColor: "#366FA0"
  },

  /* custom fonts for website */
  fonts: {
    myFont: ["Overpass", "sans-serif"],
    myOtherFont: ["-apple-system", "system-ui"]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Polymath Network",

  gaGtag: "GTM-W3NC5DT",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://code.jquery.com/jquery-3.3.1.min.js",
    "https://js.hsforms.net/forms/v2-legacy.js",
    "https://js.hsforms.net/forms/v2.js"
  ],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  /* Open Graph and Twitter card images */
  ogImage: "img/bull.png",
  twitterImage: "img/bull.png"

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
