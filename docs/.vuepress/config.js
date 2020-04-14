module.exports = {

    title: 'Hard Times',
    
    description: 'This is a hard test ',
     themeConfig:{
        nav:[
            { text: 'Updates', link: '/Updates'},
            { text: 'Playground', link: '/Playground'},
            { text: 'About', link: '/About'},
        ]
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
        ['link', { rel: 'manifest', href: '/images/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo.svg' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/images/logo.svg' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
      ],
      plugins: [
        [
          '@vuepress/pwa',
          {
            serviceWorker: true,
            updatePopup: true
          },
          'vuepress-plugin-container',
          '@vuepress/register-components',
          '@vuepress/active-header-links',
         '@vuepress/search',
         '@vuepress/nprogress',

         '@vuepress/blog',
         {
           directories: [
             {
               // Unique ID of current classification
               id: 'post',
               // Target directory
               dirname: '_posts',
               // Path of the `entry page` (or `list page`)
               path: '/_posts',
             },
           ],
           sitemap: {
            hostname: 'https://that-s-so-me.firebaseapp.com/'
          },
         },


        ]
      ],
  }