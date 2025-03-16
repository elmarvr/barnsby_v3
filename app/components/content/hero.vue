<script setup lang="ts">
import Button from "../ui/button/button.vue";

const { locale } = useI18n();

const { data: features } = await useAsyncData(() => {
  return queryCollection(`features_${locale.value}`).all();
});
</script>

<template>
  <Section id="home" class="relative bleed">
    <div class="inset-0 absolute -z-10">
      <NuxtImg
        src="/images/hero.jpg"
        layout="fill"
        class="size-full object-cover brightness-40"
      />
    </div>

    <div class="flex flex-col container max-w-5xl">
      <h1 class="text-primary text-6xl font-bold">
        <slot mdc-unwrap="p" />
      </h1>

      <p class="text-white py-10 pb-6 text-xl font-medium">
        {{ $t("common.feature-announcement") }}:
      </p>

      <ul class="flex flex-col gap-6">
        <li
          class="text-white gap-4 flex items-center"
          v-for="feature in features"
          :key="feature.id"
        >
          <Icon :name="feature.icon" :size="spacing(8)" />
          <p>
            {{ feature.title }}
          </p>
        </li>
      </ul>

      <div class="flex gap-6 pt-12">
        <Button size="lg">
          {{ $t("navigation.buyers") }}
        </Button>
        <Button size="lg" variant="ghost">
          {{ $t("navigation.sellers") }}
        </Button>
      </div>
    </div>
  </Section>
</template>
