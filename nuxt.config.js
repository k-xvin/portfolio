export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '‎',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'a website dedicated to a dedicated website' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/crab.ico' }
        ]
    },

    css: [
        '~/assets/css/main.scss',
    ]
}