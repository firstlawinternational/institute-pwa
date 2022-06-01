<template>
  <NuxtLayout name="auth" title="Sign in">
    <template #title>
      Sign in
    </template>
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div class="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
        </div>
      </div>

      <div class="space-y-1">
        <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
        <div class="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
        </div>
      </div>

      <div class="flex justify-end">
        <div class="text-sm">
          <a href="#" class="font-medium text-primary hover:text-primary-hover"> Forgot your password? </a>
        </div>
      </div>

      <div>
        <AppButton type="submit" text="Sign in" />
      </div>
    </form>
  </NuxtLayout>
</template>
