<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();
const navigation = useNavigation();
const activeSection = useActiveSection();
</script>

<template>
  <nav :class="cx('p-3 sticky top-0 bg-card shadow-sm z-30', props.class)">
    <div class="container flex items-center">
      <NuxtLinkLocale
        :to="{
          path: '/',
        }"
      >
        <Icon name="barnsby:brand" class="text-primary text-3xl" />
      </NuxtLinkLocale>

      <div class="flex-1" />

      <ul class="hidden md:flex items-center gap-x-4 mr-8">
        <li
          :data-active="`#${activeSection}` === item.to.hash ? '' : undefined"
          v-for="item in navigation"
          :key="item.to.path"
          class="data-active:text-primary data-active:font-bold"
        >
          <NuxtLinkLocale :to="item.to">{{ item.title }} </NuxtLinkLocale>
        </li>
      </ul>

      <I18nLocaleSwitcher />

      <UiButton as-child class="ml-3 hidden md:inline-flex">
        <NuxtLinkLocale
          :to="{
            hash: '#contact',
          }"
        >
          {{ $t("navigation.contact") }}
        </NuxtLinkLocale>
      </UiButton>
    </div>
  </nav>
</template>
