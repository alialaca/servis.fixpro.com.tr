// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxt/eslint',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/scripts',
        'nuxt-api-shield'
    ],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    nuxtApiShield: {
        limit: {
            max: 12,
            duration: 108,
            ban: 3600
        }
    },
    nitro: {
        storage: {
            shield: {
                driver: 'memory'
            }
        },
        experimental: {
            tasks: true
        },
        scheduledTasks: {
            '*/15 * * * *': ['shield:clean']
        }
    }
})