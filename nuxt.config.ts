import { link } from "fs";
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: true,
  css: ["@/assets/css/styles.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  modules: [
    '@vueuse/nuxt',
  ],
  meta: {
    title: "Nuxt3",
    meta: [

    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]
  }
  

});