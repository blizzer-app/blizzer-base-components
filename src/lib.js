// import models
import { models } from "./models/index.js";

// import css
import "./assets/css/fonts.css";
import "./assets/css/tailwind.css";

// import plugins
import "./plugins/fontsource.js";
import AOS from "./plugins/aos.js";
import VueScrollTo from "./plugins/vue-scrollto";

const clientPlugins = [AOS, VueScrollTo];

const favicon = require("./assets/favicon.png");

const plugin = {
  install(Vue) {
    Object.entries(models).forEach(([slug, model]) => {
      Vue.component(slug, model.component);
    });
  },
};

export { plugin, models, favicon, clientPlugins };
