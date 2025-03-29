<script setup lang="ts">
const { locale } = useI18n();

const { data: features } = await useAsyncData(() => {
  return queryCollection(`features_${locale.value}`).all();
});
</script>

<template>
  <Section id="home" class="flex flex-col md:flex-row md:flex-wrap gap-y-6">
    <div
      class="aspect-[5/3] w-full rounded-md overflow-hidden shadow-sm md:w-1/2 md:order-2"
    >
      <NuxtImg
        class="size-full object-cover"
        src="/images/hero.jpg"
        :alt="$t('image.hero')"
        :placeholder="50"
        width="50vw"
      />
    </div>

    <div class="w-full md:pb-18">
      <h1 class="text-primary text-4xl sm:text-6xl font-bold">
        <slot mdc-unwrap="p" />
      </h1>
    </div>

    <div class="md:w-1/2">
      <p class="font-bold pb-4">{{ $t("feature-announcement") }}:</p>
      <ul class="flex flex-col gap-3">
        <li v-for="feature of features" class="flex items-center gap-4">
          <Icon :name="feature.icon" :size="spacing(8)" class="opacity-50" />
          {{ feature.title }}
        </li>
      </ul>
      <div class="flex gap-4 pt-8">
        <UiButton as-child>
          <NuxtLinkLocale
            :to="{
              hash: '#sellers',
            }"
          >
            {{ $t("navigation.sellers") }}
          </NuxtLinkLocale>
        </UiButton>

        <UiButton as-child variant="muted">
          <NuxtLinkLocale
            :to="{
              hash: '#buyers',
            }"
          >
            {{ $t("navigation.buyers") }}
          </NuxtLinkLocale>
        </UiButton>
      </div>
    </div>
  </Section>
</template>
