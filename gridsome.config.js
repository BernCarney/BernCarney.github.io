class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

module.exports = {
  siteName: 'BernCarney',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:year/:month/:day/:slug'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics'
      // options: {
      //   id: 'UA-123456789-1'
      // }
    }
  ],

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(
          ...[
            require('postcss-import'),
            require('postcss-nested'),
            require('tailwindcss')
          ]
        )

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(
            ...[
              require('@fullhuman/postcss-purgecss')({
                content: ['src/assets/**/*.css', 'src/**/*.vue', 'src/**/*.js'],
                extractors: [
                  {
                    extractor: TailwindExtractor,
                    extensions: ['css', 'vue', 'js']
                  }
                ],
                whitelistPatterns: [/shiki/]
              })
            ]
          )
        }
        return options
      })
  }
}
