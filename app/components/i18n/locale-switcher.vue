<script setup lang="ts">
const { locale, locales, localeProperties } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const bps = useBreakpoints();

const align = computed(() => {
  return bps.greater("md").value ? "start" : "end";
});
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger>
      <UiButton variant="muted">
        <I18nLanguage :language="locale" />
        <Icon name="lucide:chevron-down" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent :align="align">
      <UiDropdownMenuItem v-for="locale in locales" :key="locale.code" as-child>
        <NuxtLink :to="switchLocalePath(locale.code)">
          <I18nLanguage :language="locale.code!" />
        </NuxtLink>
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
