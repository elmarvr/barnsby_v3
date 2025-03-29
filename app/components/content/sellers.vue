<template>
  <Section id="sellers">
    <SectionCard
      :image="{
        src: '/images/sellers.jpg',
        alt: $t('image.sellers'),
      }"
    >
      <SectionTitle>
        <template #subtitle>
          <slot name="subtitle" />
        </template>
        <slot mdc-unwrap="p" name="title" />
      </SectionTitle>

      <div class="check-list">
        <slot />
        <div class="pt-12">
          <UiButton as-child>
            <NuxtLinkLocale
              :to="{
                hash: '#contact',
              }"
            >
              {{ $t("contact-us") }}
            </NuxtLinkLocale>
          </UiButton>
        </div>
      </div>
    </SectionCard>
  </Section>
</template>
