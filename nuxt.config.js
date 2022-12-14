let baseUrl = "https://bugbusters-api.preview.im/api/v1/";

// let baseUrl = "https://bugbusters-api.preview.im/";

const appName = "TinyMiny | URL Shortner";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    // crawler: false,
    fallback: true,
  },

  head: {
    title: appName,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      { name: "title", content: "tinyminy" },
      {
        name: "description",
        content: "To generate the short url from the long url",
      },
      { name: "keywords", content: "short-url, shorten-url,tiny-miny" },
      { name: "robots", content: "index,follow" },
      { name: "robots", content: "text/html; charset=utf-8" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "1 day" },
      { name: "author", content: "Bug Busters" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Nunito+Sans:wght@300;400;700;800&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/index.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  axios: {
    baseURL: baseUrl,
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    crossdomain: true,
  },
  server: {
    port: 8000,
  },
  env: {
    baseUrl: baseUrl,
    NUXT_ENV_APPNAME: appName,
  },
};
