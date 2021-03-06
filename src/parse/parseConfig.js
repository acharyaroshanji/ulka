const path = require('path')

let ulkaConfigs

try {
  ulkaConfigs = require(path.join(process.cwd(), 'ulka-config.js'))
} catch (e) {
  console.log("\n>> Can't find ulka-config.js file in root directory")
  process.exit(1)
}

const defaultConfigs = {
  siteMetaData: {
    title: 'Ulka.Js',
    desription: 'UlkaJs - static site generator'
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  contents: {
    path: 'contents',
    generatePath: 'blog',
    template: 'blog.ulka',
    /**
     * You may not need this preparse and postparse feature but
     * if you, pass function to these arrays.
     * function takes one arg which is markdown for preparse and html for postparse
     * and function should return the value after changing the markdown or html
     */
    // Pre parse run before parsing markdown to html
    preParse: [],
    // post parse runs after parsing markdown to html
    postParse: []
  }
}

module.exports = {
  ...defaultConfigs,
  ...ulkaConfigs
}
