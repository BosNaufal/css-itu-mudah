// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CSS - Cara Styling Santuy | an e-book by Bos Naufal',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/**/*.md',
        typeName: 'Content',
      }
    }
  ],
  templates: {
    Content: '/chapter/:slug',
  },
  transformers: {
    remark: {
      plugins: [
        'remark-slug',
        'remark-autolink-headings',
        'remark-external-links',
        'remark-squeeze-paragraphs',
        'remark-fix-guillemets',
        '@gridsome/remark-prismjs',
      ]
    }
  }
}

