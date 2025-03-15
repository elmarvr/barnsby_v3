<script setup lang="ts">
const { locale } = useI18n();
const { data: services } = await useAsyncData(async () => {
  return queryCollection(`services_${locale.value}`).all();
});
</script>

<template>
  <Section id="services">
    <SectionTitle class="text-center">
      <template #subtitle>
        <slot name="subtitle" />
      </template>
      <slot mdc-unwrap="p" name="title" />
    </SectionTitle>

    <ul class="grid grid-cols-7 gap-x-4">
      <li
        v-for="service in services"
        :key="service.id"
        class="flex flex-col items-center text-center gap-y-4 text-sm"
      >
        <Icon
          :name="service.icon"
          class="text-primary"
          size="calc(var(--spacing)*10)"
        />
        <p class="font-medium">{{ service.title }}</p>
      </li>
    </ul>
  </Section>
</template>
