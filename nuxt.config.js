export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '‎',
        htmlAttrs: {
            lang: 'en'
        },
        // https://stackoverflow.com/a/54266944
        // https://metatags.io/
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'title', name: 'title', content: "it's the place with the things" },
            { hid: 'description', name: 'description', content: "im kevin. i make some stuff." },
            { hid: 'image', name: 'image', content: 'crab.ico' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'crab.ico' }
        ]
    },

    css: [
        '~/assets/css/main.scss',
    ],

    buildModules: [
        '@nuxtjs/fontawesome',
    ],

    fontawesome: {
        icons: {
            // solid: ['faHeart'],
            brands: ['faGithub', 'faLinkedin', 'faYoutubeSquare'],
        }
    }
}