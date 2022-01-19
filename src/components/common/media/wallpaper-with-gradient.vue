<template>
  <grid-stack :slots="3">
    <template #layer-1>
      <div
        class="h-full w-full bg-center bg-no-repeat bg-cover"
        :style="{ backgroundImage: `url('${wallpaper}')` }"
        :class="{ 'bg-fixed': wallpaperFixed }"
      />
    </template>
    <template #layer-2>
      <div class="h-full w-full" :style="{ background: gradient }" />
    </template>
  </grid-stack>
</template>

<script>
export default {
  props: {
    wallpaper: { type: String, required: true },
    gradient: { type: String, default: null },
    wallpaperFixed: { type: Boolean, default: true },
  },
};
</script>
