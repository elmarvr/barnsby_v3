<script setup lang="ts">
const { locale } = useI18n();
const { data: services } = await useAsyncData(async () => {
  return queryCollection(`services_${locale.value}`).all();
});
</script>

<template>
  <Section id="services" class="grid sm:grid-cols-2 xl:grid-cols-1">
    <SectionTitle class="xl:text-center">
      <template #subtitle>
        <slot name="subtitle" />
      </template>
      <slot mdc-unwrap="p" name="title" />
    </SectionTitle>

    <ul class="flex flex-col xl:flex-row gap-4">
      <li
        v-for="service in services"
        :key="service.id"
        class="flex flex-1 min-h-0 xl:flex-col xl:text-center items-center gap-4 text-sm"
      >
        <Icon :name="service.icon" class="text-primary" :size="spacing(10)" />
        <p class="font-medium">{{ service.title }}</p>
      </li>
    </ul>
  </Section>
</template>
