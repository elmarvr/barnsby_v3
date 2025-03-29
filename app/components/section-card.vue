<script setup lang="ts">
import type { ClassValue, VariantProps } from "cva";

const sectionCardVariants = cva({
  base: "bg-card shadow-lg relative flex flex-col-reverse sm:grid grid-cols-3 overflow-hidden",
  variants: {
    align: {
      start: "bleed-start rounded-r-2xl",
      end: "bleed-end rounded-l-2xl",
    },
  },
  defaultVariants: {
    align: "start",
  },
});

type SectionCardVariants = VariantProps<typeof sectionCardVariants>;

const props = defineProps<{
  align?: SectionCardVariants["align"];
  class?: ClassValue;
  image: {
    src: string;
    alt: string;
  };
}>();
</script>

<template>
  <div :class="sectionCardVariants({ align, class: props.class })">
    <NuxtImg
      class="size-full object-cover aspect-[2/1]"
      v-bind="image"
      format="webp"
      :placeholder="50"
      sizes="30vw"
    />
    <div
      :data-align="align"
      class="p-6 xl:p-16 col-span-2 relative data-[align=end]:order-first"
    >
      <slot />
    </div>
  </div>
</template>
