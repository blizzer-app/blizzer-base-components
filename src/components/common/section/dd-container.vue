<template>
  <div
    :class="{
      'max-w-screen-md': width === 'md',
      'max-w-screen-lg': width === 'lg',
      'max-w-screen-xl': width === 'xl',
      'max-w-screen-2xl': width === '2xl',
    }"
    class="w-full mx-auto px-8"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'lg',
    },
  },
}
</script>
