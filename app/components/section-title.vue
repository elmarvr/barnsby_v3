<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
</script>

<template>
  <div :class="cx('flex flex-col pb-12 xl:pb-16 gap-y-4 ', props.class)">
    <div class="font-bold text-accent-foreground">
      <slot name="subtitle" />
    </div>
    <h2 class="text-3xl xl:text-5xl text-pretty whitespace-normal">
      <slot />
    </h2>
  </div>
</template>
