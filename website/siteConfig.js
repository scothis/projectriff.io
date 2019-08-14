// https://docusaurus.io/docs/site-config

// This site does not use built-in docusuarus versioning or docusaurus publish
// projectriff.io is generated by running a docusarus build per version
// See /website/README.md for details about adding versions

const siteConfig = {

  projectName: 'riff',
  organizationName: 'projectriff',
  title: 'riff is for functions',
  tagline: '',

  cname: 'projectriff.io',
  url: 'https://projectriff.io',
  baseUrl: '/',

  docsUrl: 'docs',
  customDocsPath: 'docs',
  docsSideNavCollapsible: true,

  // used only in pages/en/versions.js
  versions: [
    { name:'v0.4.x (Next)', url:'docs/v0.4/getting-started' },
    { name:'v0.3.x (Stable)', url:'docs/v0.3/getting-started' }
  ],

  headerLinks: [
    {doc: 'v0.3/getting-started', label: 'v0.3.x (Stable)'},
    {doc: 'v0.4/getting-started', label: 'v0.4.x (Next)'},
    {blog: true, label: 'Blog'},
  ],

  headerIcon: 'img/riff-white.svg',
  footerIcon: 'img/riff-white.svg',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#52adc8',
    secondaryColor: '#111111',
  },

  // theme for syntax highlighting
  highlight: {
    theme: 'default',
  },

  // on-page navigation
  onPageNav: 'separate',

  // no .html extensions
  cleanUrl: true,

  // open Graph and twitter card images
  ogImage: 'img/riff.svg',
  twitterImage: 'img/riff.svg',
  
  // show all blog posts in sidebar
  blogSidebarCount: 'ALL',

};

module.exports = siteConfig;
