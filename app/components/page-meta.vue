<script setup lang="ts">
import type {
  ContentEnCollectionItem,
  ContentNlCollectionItem,
} from "@nuxt/content";
import { capitalize } from "vue";

const props = defineProps<{
  page: ContentEnCollectionItem | ContentNlCollectionItem;
}>();

const page = toRef(props, "page");

const { locale } = useI18n();
const site = useSiteConfig();

useSeoMeta({
  ogTitle: page.value.title,
  ogType: "website",
  ogDescription: page.value.description,
  ogUrl: site.url,

  title: page.value.title,
  description: page.value.description,
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterCard: "summary_large_image",
});

useHead({
  title: page.value.title,
  titleTemplate: `%s | %locale`,
  templateParams: {
    locale: () => capitalize(locale.value),
  },
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "charset", content: "utf-8" },
    { name: "robots", content: "index, follow" },
    { name: "color-scheme", content: "light" },
  ],
});
</script>

<template>
  <slot />
</template>
