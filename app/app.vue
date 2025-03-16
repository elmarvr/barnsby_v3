<template>
  <Html
    class="scroll-pt-(--navigation-height)"
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
