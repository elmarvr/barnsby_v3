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

const path = computed(() => {
  return withLeadingSlash(
    joinURL(locale.value, ...slug.value.filter((part) => part !== locale.value))
  );
});

const { data: page } = await useAsyncData(
  async () => {
    return queryCollection(`content_${locale.value}`).path(path.value).first();
  },
  {
    watch: [locale],
  }
);
</script>

<template>
  <template v-if="page">
    <PageMeta :page="page" />
    <ContentRenderer :value="page" />
  </template>
</template>
