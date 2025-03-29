<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "reka-ui";
import type { VariantProps } from "cva";

const buttonVariants = cva({
  base: "inline-flex font-bold cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-button",
      muted: "bg-muted hover:bg-muted/70 text-muted-foreground shadow-button",
      ghost: "bg-muted-foreground/80 text-white hover:bg-muted-foreground/90",
    },
    size: {
      default: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="buttonVariants({ variant, size, class: props.class })"
  >
    <slot />
  </Primitive>
</template>
