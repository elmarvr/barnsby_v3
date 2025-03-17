<template>
  <Html
    class="scroll-pt-(--navigation-height) md:scroll-smooth"
    :style="{
      '--navigation-height': spacing(15),
    }"
  >
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
