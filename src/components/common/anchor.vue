<template>
  <a v-if="href.startsWith('http')" :href="href" target="_blank">
    <slot />
  </a>
  <a v-else-if="href.startsWith('/')" :href="href">
    <slot />
  </a>
  <a v-else :href="normalizedId" @click="scrollTo()">
    <slot />
  </a>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
  props: {
    href: { type: String, default: "#" },
  },

  computed: {
    normalizedId() {
      return this.href.replace(/ /g, "-").toLowerCase();
    },
  },

  methods: {
    scrollTo() {
      if (document.getElementById(this.normalizedId)) {
        VueScrollTo.scrollTo(this.normalizedId);
      }
      this.$emit("click");
    },
  },
};
</script>
