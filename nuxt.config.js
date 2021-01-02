export default {
  mode: "universal",
  head: {
    title: "Plume Nomade",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-touch-icon.png",
        sizes: "180x180"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon/favicon-32x32.png",
        sizes: "32x32"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon/favicon-16x16.png",
        sizes: "16x16"
      },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Indie+Flower&family=Quicksand:wght@300;400;500;600;700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "@/assets/styles/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "@/plugins/aos", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  },
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        const yOffset = document.querySelector(".nav").clientHeight + 30;
        const el = document.querySelector(to.hash);
        const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
        return window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
