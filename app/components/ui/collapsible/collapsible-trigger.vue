<script setup lang="ts">
import type { ClassValue } from "cva";
import {
  type CollapsibleContentProps,
  CollapsibleTrigger,
  useForwardProps,
} from "reka-ui";

const props = defineProps<CollapsibleContentProps & { class?: ClassValue }>();
const delegated = reactiveOmit(props, ["class"]);
const forwarded = useForwardProps(delegated);
</script>

<template>
  <CollapsibleTrigger v-bind="forwarded" :class="cx(props.class)">
    <slot />
  </CollapsibleTrigger>
</template>
