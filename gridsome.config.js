// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Super Grid Blog',
  siteDescription: '',
  siteUrl: '',
  pathPrefix: '',
  host: "192.168.3.10",
  //port: "8080",
  plugins: [

    // content BlogPost = daily posts
    {
      options: {
        typeName: 'BlogPost',
        // source files
        path: 'vault/blog/*.md',
        // view permalink
        route: '/post/:slug'
      },
      use: '@gridsome/source-filesystem'
    },

    // content ProjInfo = projects descriptions
    {
      options: {
        typeName: 'ProjectInfo',
        path: 'vault/project/*.md',
        route: '/project/:slug'
      },
      use: '@gridsome/source-filesystem'
    }
  ],


  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  }


}
