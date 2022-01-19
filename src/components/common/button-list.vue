<template>
  <div
    class="
      w-full
      flex flex-col
      justify-center
      items-center
      space-y-8
      md:flex-wrap md:flex-row md:items-start md:space-y-0 md:space-x-4
    "
    :class="{ 'lg:justify-start': align === 'left' }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    align: { type: String, default: "left" },
  },
};
</script>
