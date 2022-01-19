import AOS from "aos";
import "aos/dist/aos.css";

export default {
  install(Vue) {
    AOS.init({});

    Vue.mixin({
      updated() {
        this.$nextTick(function () {
          AOS.refreshHard(); // This is needed to avoid the un-animate aos effect
        });
      },
    });
  },
};
