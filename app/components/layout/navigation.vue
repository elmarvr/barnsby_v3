<script setup lang="ts">
import type { ClassValue } from "cva";

const props = defineProps<{
  class?: ClassValue;
}>();

const navigation = useNavigation();
const activeSection = useActiveSection();

const isOpen = ref(false);
const isLocked = useScrollLock(
  typeof window !== "undefined" ? window : undefined
);

const bps = useBreakpoints();

watch(bps.greater("md"), (v) => {
  if (v) {
    isOpen.value = false;
  }
});

syncRef(isOpen, isLocked, {
  direction: "ltr",
});
</script>

<template>
  <UiCollapsible as-child v-model:open="isOpen">
    <nav
      :class="
        cx(
          'p-3 sticky top-0 bg-card shadow-sm z-30 h-(--navigation-height)',
          props.class
        )
      "
    >
      <div class="container flex items-center">
        <NuxtLinkLocale
          :to="{
            path: '/',
          }"
          class="flex"
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

        <UiCollapsibleTrigger class="flex md:hidden ml-4 opacity-50">
          <Icon v-if="isOpen" name="lucide:x" :size="spacing(6)" />
          <Icon v-else name="lucide:menu" :size="spacing(6)" />
        </UiCollapsibleTrigger>

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

      <UiCollapsibleContent
        class="fixed top-15 w-full left-0 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden"
      >
        <div class="h-[calc(100vh-var(--spacing)*15)] bg-card p-4">
          <ul class="divide-y">
            <li
              v-for="item in navigation"
              :key="item.to.path"
              class="w-full flex justify-center text-muted-foreground py-3 text-xl"
            >
              <NuxtLinkLocale :to="item.to" @click="isOpen = false"
                >{{ item.title }}
              </NuxtLinkLocale>
            </li>
            <li
              class="w-full flex justify-center text-muted-foreground py-3 text-xl"
            >
              <NuxtLinkLocale
                :to="{
                  hash: '#contact',
                }"
              >
                {{ $t("navigation.contact") }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
      </UiCollapsibleContent>
    </nav>
  </UiCollapsible>
</template>
