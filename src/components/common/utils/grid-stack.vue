<template>
  <div class="h-full w-full grid grid-rows-1 grid-cols-1">
    <div
      class="row-start-1 row-span-1 col-start-1 col-span-1"
      :class="`z-${slot}0`"
      v-for="slot in slots"
      :key="slot"
    >
      <slot :name="`layer-${slot}`" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slots: { type: Number, default: 2 },
  },
};
</script>
