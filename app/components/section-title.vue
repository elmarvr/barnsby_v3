<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <div :class="cx('flex flex-col pb-16 gap-y-4 text-pretty', props.class)">
    <div class="font-bold text-accent-foreground">
      <slot name="subtitle" />
    </div>
    <h2 class="text-5xl">
      <slot />
    </h2>
  </div>
</template>
