import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/seo",
    "@nuxt/content",
  ],
  future: {
    compatibilityVersion: 4,
  },

  site: {
    name: "Barnsby Consulting",
    url: "https://barnsby-consulting.nl",
    indexable: true,
  },

  experimental: {
    typedPages: true,
  },
  i18n: {
    langDir: "../app/lang",
    locales: [
      {
        code: "en",
        language: "en-UK",
        name: "English",
        files: ["en.json"],
      },
      {
        code: "nl",
        language: "nl-NL",
        name: "Nederlands",
        files: ["nl.json"],
      },
    ],
    defaultLocale: "nl",
    types: "composition",
    experimental: {
      typedOptionsAndMessages: "all",
    },

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  googleFonts: {
    families: {
      Fustat: true,
      Inter: true,
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    customCollections: [
      {
        prefix: "barnsby",
        dir: "./app/assets/icons",
      },
    ],
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
  },
  ogImage: {
    componentDirs: ["app/components/og-image"],
    componentOptions: {
      global: true,
    },
  },

  nitro: {
    static: import.meta.env.NODE_ENV === "production",
    prerender: {
      routes: ["/", "/en"],
    },
  },
});
