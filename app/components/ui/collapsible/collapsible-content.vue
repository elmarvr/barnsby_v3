<script setup lang="ts">
import type { ClassValue } from "cva";
import {
  CollapsibleContent,
  type CollapsibleContentProps,
  useForwardProps,
} from "reka-ui";

const props = defineProps<CollapsibleContentProps & { class?: ClassValue }>();
const delegated = reactiveOmit(props, ["class"]);
const forwarded = useForwardProps(delegated);
</script>

<template>
  <CollapsibleContent
    v-bind="forwarded"
    :class="
      cx(
        'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden',
        props.class
      )
    "
  >
    <slot />
  </CollapsibleContent>
</template>
