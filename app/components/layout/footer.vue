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
        <a class="group hover:underline">
          {{ $t("common.developed-by") }}
          <span class="text-pink-500 group-hover:text-blue-500 font-medium">
            Boy<span class="text-blue-500 group-hover:text-pink-500">Girl</span>
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>
