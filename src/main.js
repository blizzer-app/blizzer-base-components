import Vue from "vue";
import App from "./App.vue";

// import css
import "./assets/css/fonts.css";
import "./assets/css/tailwind.css";

// import plugins
import "./plugins/fontsource.js";
import AOS from "./plugins/aos.js";
Vue.use(AOS);
import VueScrollTo from "./plugins/vue-scrollto";
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
