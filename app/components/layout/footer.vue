<template>
  <footer>
    <div class="container">
      <div class="w-full flex justify-end pb-10">
        <Icon
          name="barnsby:brand"
          class="text-primary opacity-50"
          :size="spacing(25)"
        />
      </div>
      <div class="border-t py-3 text-sm text-muted-foreground">
        <a class="group hover:underline" href="https://boygirl.dev">
          {{ $t("developed-by") }}
          <span class="text-pink-700 group-hover:text-blue-700 font-medium">
            Boy<span class="text-blue-700 group-hover:text-pink-700">Girl</span>
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>
