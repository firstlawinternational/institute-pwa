<template>
  <div class="min-h-full flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="w-32 h-auto mx-auto" :src="logo" alt="Logo">
          <h2 class="mt-6 text-3xl font-bold text-gray-900">
            <slot name="title" />
          </h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" :src="image">
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const image = computed(() => config.images.auth)
const logo = computed(() => config.images.logo)
</script>

<style>
  html,
  body,
  #__nuxt {
    @apply h-full bg-white;
  }
</style>
