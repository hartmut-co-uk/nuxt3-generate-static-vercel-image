import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
    ],
    image: {
        provider: "vercel",
        screens: {
            custom1: 500,
            custom2: 1000,
        }
    }
})
