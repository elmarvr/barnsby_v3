<script setup lang="ts">
import type {
  ContentEnCollectionItem,
  ContentNlCollectionItem,
} from "@nuxt/content";

const props = defineProps<{
  page: ContentEnCollectionItem | ContentNlCollectionItem;
}>();
</script>

<template>
  <div class="bg-[#81b72a] w-full h-full text-white text-8xl">Barnsby</div>
</template>
