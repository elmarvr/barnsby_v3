<script setup lang="ts">
const props = defineProps<{
  language: string;
}>();

const { locale } = useI18n();

const value = computed(() => {
  const formatter = new Intl.DisplayNames(locale.value, {
    type: "language",
  });

  return formatter.of(props.language);
});
</script>

<template>
  {{ value }}
</template>
