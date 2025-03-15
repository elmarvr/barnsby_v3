<template>
  <Section id="buyers">
    <SectionCard image="/images/buyers.jpg" align="end">
      <SectionTitle>
        <template #subtitle>
          <slot name="subtitle" />
        </template>
        <slot mdc-unwrap="p" name="title" />
      </SectionTitle>

      <div class="check-list">
        <slot />
        <div class="pt-12">
          <UiButton>
            <NuxtLinkLocale
              :to="{
                hash: '#contact',
              }"
            >
              {{ $t("common.contact-us") }}
            </NuxtLinkLocale>
          </UiButton>
        </div>
      </div>
    </SectionCard>
  </Section>
</template>
