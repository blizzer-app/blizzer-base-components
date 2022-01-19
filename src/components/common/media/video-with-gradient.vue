<template>
  <grid-stack :slots="3">
    <template #layer-1>
      <div class="relative h-full w-full">
        <video
          class="absolute h-full w-full object-cover"
          :poster="poster"
          playsinline
          autoplay
          muted
          loop
        >
          <source type="video/mp4" :src="video" />
        </video>
      </div>
    </template>
    <template #layer-2>
      <div class="h-full w-full" :style="{ background: gradient }" />
    </template>
  </grid-stack>
</template>

<script>
export default {
  props: {
    video: { type: String, required: true },
    poster: { type: String, default: null },
    gradient: { type: String, required: true },
  },
};
</script>
