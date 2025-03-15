<script setup lang="ts">
import {
  DropdownMenuTrigger,
  type DropdownMenuTriggerProps,
  useForwardProps,
} from "reka-ui";

const props = withDefaults(defineProps<DropdownMenuTriggerProps>(), {
  asChild: true,
});
const forwarded = useForwardProps(props);
</script>

<template>
  <DropdownMenuTrigger v-bind="forwarded">
    <slot />
  </DropdownMenuTrigger>
</template>
