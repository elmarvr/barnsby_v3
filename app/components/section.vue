<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
  id: string;
}>();

const section = useTemplateRef("section");
useSection(section);
</script>

<template>
  <section ref="section" :id="id" :class="cx('py-16', props.class)">
    <slot />
  </section>
</template>
