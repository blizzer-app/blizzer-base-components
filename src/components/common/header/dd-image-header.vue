<template>
  <dd-section :height="height">
    <grid-stack>
      <template #layer-1>
        <wallpaper-with-gradient
          v-if="backgroundImage"
          :wallpaper="backgroundImage"
          :gradient="backgroundGradient"
          :wallpaper-fixed="backgroundImageFixed"
        />
      </template>
      <template #layer-2>
        <div class="h-full w-full flex flex-col justify-center">
          <slot />
        </div>
      </template>
    </grid-stack>
  </dd-section>
</template>

<script>
export default {
  props: {
    height: { type: String, default: "full" },
    backgroundImage: { type: String, default: null },
    backgroundGradient: { type: String, default: null },
    backgroundImageFixed: { type: Boolean, default: true },
  },
};
</script>
