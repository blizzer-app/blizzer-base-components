<template>
  <div class="fixed z-50 top-0 left-0 h-screen w-full bg-black bg-opacity-80">
    <div
      class="h-16 w-full flex items-center justify-end text-white px-8"
      @click="$emit('close')"
    >
      <svg
        class="w-6 h-6 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
    <div class="relative h-full-h-16 w-full">
      <div
        class="
          absolute
          top-0
          left-0
          z-20
          h-full
          w-full
          flex
          items-center
          justify-between
          px-8
          pointer-events-none
        "
      >
        <div
          class="
            h-10
            w-10
            rounded-full
            bg-black bg-opacity-30
            text-white
            flex
            items-center
            justify-center
            cursor-pointer
            pointer-events-auto
          "
          @click="goBackward()"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </div>
        <div
          class="
            h-10
            w-10
            rounded-full
            bg-black bg-opacity-30
            text-white
            flex
            items-center
            justify-center
            cursor-pointer
            pointer-events-auto
          "
          @click="goForward()"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="
          relaitve
          z-10
          h-full
          w-full
          flex
          items-center
          justify-center
          p-8
          lg:p-16
        "
      >
        <img
          :src="images[index].url"
          :alt="images[index].caption"
          class="h-full w-full object-contain block rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, default: () => [] },
    index: { type: Number, default: 0 },
  },

  methods: {
    goBackward() {
      this.index = (this.index - 1 + this.images.length) % this.images.length;
    },

    goForward() {
      this.index = (this.index + 1) % this.images.length;
    },
  },
};
</script>
