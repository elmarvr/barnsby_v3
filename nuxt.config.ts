import tailwindcss from "@tailwindcss/vite";
import { visit } from "unist-util-visit";

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
    locales: [
      {
        code: "en",
        language: "en-UK",
      },
      {
        code: "nl",
        language: "nl-NL",
      },
    ],
    defaultLocale: "nl",
    vueI18n: "~/i18n.config.ts",
    types: "composition",
    experimental: {
      typedOptionsAndMessages: "all",
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
  vueuse: {},
});
