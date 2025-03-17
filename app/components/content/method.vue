<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "reka-ui";

const { data: steps } = await useAsyncData(() => {
  return queryCollection("method_en").all();
});

const defaultValue = computed(() => steps.value?.[0]?.id);
</script>

<template>
  <Section id="method" class="grid xl:grid-cols-2 gap-x-7">
    <SectionTitle>
      <template #subtitle>
        <slot name="subtitle" />
      </template>
      <slot mdc-unwrap="p" name="title" />
    </SectionTitle>

    <AccordionRoot :default-value="defaultValue" :unmount-on-hide="false">
      <AccordionItem
        :value="step.id"
        v-for="(step, index) in steps"
        :key="step.id"
      >
        <AccordionTrigger
          class="py-4 flex items-center border-b cursor-pointer w-full text-start data-[state=open]:[&_.iconify]:-rotate-180"
        >
          <AccordionHeader class="font-heading text-2xl">
            {{ index + 1 }}. {{ step.title }}
          </AccordionHeader>

          <Icon
            name="lucide:chevron-down"
            class="ml-auto transition-transform"
          />
        </AccordionTrigger>

        <AccordionContent
          class="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden"
        >
          <ContentRenderer :value="step" class="pt-2" />
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </Section>
</template>
