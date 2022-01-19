<template>
  <header>
    <dd-section height="full">
      <grid-stack>
        <template #layer-1>
          <video-with-gradient
            v-if="backgroundVideo"
            :video="backgroundVideo"
            :gradient="backgroundGradient"
            :poster="backgroundVideoPoster"
          />
        </template>
        <template #layer-2>
          <div class="h-full w-full flex flex-col justify-center">
            <slot />
          </div>
        </template>
      </grid-stack>
    </dd-section>
  </header>
</template>

<script>
export default {
  props: {
    backgroundVideo: { type: String, default: null },
    backgroundVideoPoster: { type: String, default: null },
    backgroundGradient: { type: String, default: null },
  },
};
</script>
