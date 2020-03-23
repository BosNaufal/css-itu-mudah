// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  bookTitle: "CSS Itu Mudah",
  author: {
    name: "Naufal Rabbani",
    link: "https://github.com/BosNaufal",
    email: "bosnaufalemail@gmail.com",
  },
  license: "CC BY-NC 3.0",

  siteName: 'CSS Itu Mudah | e-book by Naufal Rabbani',
  siteDescription: "Sebuah ebook untuk pemula memulai belajar CSS secara mudah",
  siteUrl: 'https://bosnaufal.github.io',
  pathPrefix: '/css-itu-mudah',
  titleTemplate: "%s",

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
    Content: [{
      path: '/chapter/:slug',
      component: './src/templates/Content/ContentContainer.vue',
    }],
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

