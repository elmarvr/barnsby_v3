<script setup lang="ts">
import type { ClassValue } from "cva";
import {
  DropdownMenuContent,
  DropdownMenuPortal,
  useForwardPropsEmits,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
} from "reka-ui";

const props = withDefaults(
  defineProps<DropdownMenuContentProps & { class?: ClassValue }>(),
  {
    sideOffset: 4,
  }
);
const emits = defineEmits<DropdownMenuContentEmits>();

const delegated = reactiveOmit(props, ["class"]);
const forwarded = useForwardPropsEmits(delegated, emits);
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :class="
        cx(
          'z-50 min-w-32 rounded-md data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-2 bg-slate-50 border border-slate-200 shadow-md p-1 text-slate-950',
          props.class
        )
      "
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
