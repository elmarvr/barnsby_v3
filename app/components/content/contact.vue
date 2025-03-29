<script setup lang="ts">
const { data: contacts } = await useAsyncData("contacts", async () => {
  return await queryCollection("contacts").all();
});
</script>

<template>
  <Section id="contact">
    <SectionTitle>
      <template #subtitle>
        <slot name="subtitle" />
      </template>
      <slot mdc-unwrap="p" name="title" />
    </SectionTitle>

    <div class="flex flex-col xl:flex-row gap-16">
      <div
        v-for="contact in contacts"
        :key="contact.id"
        class="flex flex-col gap-y-6"
      >
        <h3 class="text-accent-foreground font-bold">{{ contact.name }}</h3>

        <ul class="contents">
          <li class="flex items-center gap-x-2">
            <Icon name="lucide:mail" class="text-muted-foreground text-lg" />
            <a :href="`mailto:${contact.email}`" class="hover:underline">
              {{ contact.email }}
            </a>
          </li>
          <li class="flex items-center gap-x-2">
            <Icon name="lucide:phone" class="text-muted-foreground text-lg" />
            <a :href="`tel:${contact.phone}`" class="hover:underline">
              {{ contact.phone }}
            </a>
          </li>
          <li class="flex items-center gap-x-2">
            <Icon name="lucide:map-pin" class="text-muted-foreground text-lg" />
            <p>{{ contact.address }}</p>
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>
