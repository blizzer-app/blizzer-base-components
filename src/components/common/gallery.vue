<template>
  <div>
    <lightbox
      :images="images"
      :index="index"
      v-if="lightBox"
      @close="hideLightBox()"
    />
    <div class="gallery">
      <img
        v-if="images[0]"
        class="
          h-64
          w-full
          max-w-3/4
          md:h-96 md:w-full md:max-w-full
          mx-auto
          md:mx-0
          row-start-1 row-span-2
          col-start-1 col-span-2
          object-cover
          cursor-pointer
        "
        :alt="images[0].caption"
        :src="images[0].url"
        @click="showLightBox(0)"
        data-aos="fade-up"
      />
      <img
        v-if="images[1]"
        class="
          h-64
          w-full
          max-w-3/4
          md:h-64 md:w-full md:max-w-full
          mx-auto
          md:mx-0
          row-start-1 row-span-1
          col-start-3 col-span-1
          object-cover
          cursor-pointer
        "
        :alt="images[1].caption"
        :src="images[1].url"
        @click="showLightBox(1)"
        data-aos="fade-up"
      />
      <img
        v-if="images[2]"
        class="
          h-64
          w-full
          max-w-3/4
          md:h-64 md:w-full md:max-w-full
          mx-auto
          md:mx-0
          row-start-1 row-span-1
          col-start-4 col-span-1
          object-cover
          cursor-pointer
        "
        :alt="images[2].caption"
        :src="images[2].url"
        @click="showLightBox(2)"
        data-aos="fade-up"
      />
      <img
        v-if="images[3]"
        class="
          h-64
          w-full
          max-w-3/4
          md:h-64 md:w-full md:max-w-full
          mx-auto
          md:mx-0
          row-start-3 row-span-1
          col-start-1 col-span-1
          object-cover
          cursor-pointer
        "
        :alt="images[3].caption"
        :src="images[3].url"
        @click="showLightBox(3)"
        data-aos="fade-up"
      />
      <img
        v-if="images[4]"
        class="
          h-64
          w-full
          max-w-3/4
          md:h-64 md:w-full md:max-w-full
          mx-auto
          md:mx-0
          row-start-3 row-span-1
          col-start-2 col-span-1
          object-cover
          cursor-pointer
        "
        :alt="images[4].caption"
        :src="images[4].url"
        @click="showLightBox(4)"
        data-aos="fade-up"
      />
      <img
        v-if="images[5]"
        class="
          h-64
          w-full
          max-w-3/4
          md:h-96 md:w-full md:max-w-full
          mx-auto
          md:mx-0
          row-start-2 row-span-2
          col-start-3 col-span-2
          object-cover
          cursor-pointer
        "
        :alt="images[5].caption"
        :src="images[5].url"
        @click="showLightBox(5)"
        data-aos="fade-up"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, default: () => [] },
  },

  data() {
    return {
      index: 0,
      lightBox: false,
    };
  },

  methods: {
    showLightBox(index) {
      this.index = index;
      this.lightBox = true;
      document.body.style.overflow = "hidden";
    },

    hideLightBox() {
      this.lightBox = false;
      document.body.style.overflow = "visible";
    },
  },
};
</script>
