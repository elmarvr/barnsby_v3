<script setup lang="ts">
import { joinURL, withLeadingSlash } from "ufo";

const route = useRoute();
const { locale } = useI18n();

const slug = computed(() => {
  if (!("slug" in route.params)) {
    return [];
  }

  if (Array.isArray(route.params.slug)) {
    return route.params.slug;
  }

  return [];
});

const collection = computed(() => {
  return `content_${locale.value}` as const;
});

const path = computed(() => {
  return withLeadingSlash(
    joinURL(locale.value, ...slug.value.filter((part) => part !== locale.value))
  );
});

const { data: page } = await useAsyncData(path.value, async () => {
  return await queryCollection(collection.value).path(path.value).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

defineOgImageComponent("main");
</script>

<template>
  <template v-if="page">
    <PageMeta :page="page" />
    <ContentRenderer :value="page" />
  </template>
</template>
