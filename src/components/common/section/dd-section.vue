<template>
  <section
    class="h-full w-full flex flex-row"
    :class="{
      'min-h-1/2-screen': height === '1/2',
      'min-h-3/4-screen': height === '3/4',
      'min-h-screen': height === 'full',
    }"
  >
    <div class="flex-1">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    height: { type: String, default: null },
  },
};
</script>
