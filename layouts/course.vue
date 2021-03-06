<template>
  <div class="flex h-full">
    <!-- Narrow sidebar -->
    <div class="hidden overflow-y-auto w-28 bg-primary md:block">
      <div class="flex flex-col items-center w-full py-6">
        <div class="flex items-center flex-shrink-0">
          <img class="w-full h-auto px-4" :src="logo" alt="Workflow">
        </div>
        <div class="flex-1 w-full px-2 mt-6 space-y-1">
          <a
            v-for="item in sidebarNavigation"
            :key="item.name"
            :href="item.href"
            class="text-white"
            :class="[
              item.current ? 'bg-primary-hover' : 'hover:bg-primary-hover',
              'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-white group-hover:text-white', 'h-6 w-6']" aria-hidden="true" />
            <span class="mt-2">{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="relative z-20 md:hidden" @close="mobileMenuOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-primary">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute right-0 p-1 top-1 -mr-14">
                  <button type="button" class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white" @click="mobileMenuOpen = false">
                    <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <div class="flex items-center flex-shrink-0 px-4">
                <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
              </div>
              <div class="flex-1 h-0 px-2 mt-5 overflow-y-auto">
                <nav class="flex flex-col h-full">
                  <div class="space-y-1">
                    <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-primary text-white' : 'text-white hover:bg-primary hover:text-white', 'group py-2 px-3 rounded-md flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                      <component :is="item.icon" class="w-6 h-6 mr-3 text-white" aria-hidden="true" />
                      <span>{{ item.name }}</span>
                    </a>
                  </div>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Content area -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <header class="w-full">
        <div class="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm">
          <button type="button" class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden" @click="mobileMenuOpen = true">
            <span class="sr-only">Open sidebar</span>
            <MenuAlt2Icon class="w-6 h-6" aria-hidden="true" />
          </button>
          <div class="flex justify-between flex-1 px-4 sm:px-6">
            <div class="flex flex-1">
              <form class="flex w-full md:ml-0" action="#" method="GET">
                <label for="search-field" class="sr-only">Search all files</label>
                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon class="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                  </div>
                  <input id="search-field" name="search-field" class="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Search" type="search">
                </div>
              </form>
            </div>
            <div class="flex items-center ml-2 space-x-4 sm:ml-6 sm:space-x-6">
              <!-- Profile dropdown -->
              <Menu as="div" class="relative flex-shrink-0">
                <div>
                  <MenuButton class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>

              <button type="button" class="flex items-center justify-center p-1 text-white rounded-full bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <PlusSmIcon class="w-6 h-6" aria-hidden="true" />
                <span class="sr-only">Add file</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main content -->
      <div class="flex items-stretch flex-1 overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <!-- Primary column -->
          <section aria-labelledby="primary-heading" class="flex flex-col flex-1 h-full min-w-0 lg:order-last">
            <slot />
          </section>
        </main>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden overflow-y-auto bg-white border-l border-gray-200 w-96 lg:block">
          <!-- Your content -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  AcademicCapIcon,
  HomeIcon,
  MenuAlt2Icon,
  PlusSmIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'
import { useI18n } from 'vue-i18n'

const config = useRuntimeConfig()
const logo = computed(() => config.public.app.images.logoLight)
const { t } = useI18n({ useScope: 'global' })

const mobileMenuOpen = ref(false)

const sidebarNavigation = [
  {
    name: t('navigation.sidebar.home'),
    href: '#',
    icon: HomeIcon,
    current: true,
  },
  {
    name: t('navigation.sidebar.courses'),
    href: '#',
    icon: AcademicCapIcon,
    current: false,
  },
]

const userNavigation = [
  {
    name: t('navigation.user.logout'),
    href: '#',
  },
]
</script>

<style>
  html,
  body,
  #__nuxt {
    @apply h-full bg-gray-50 overflow-hidden;
  }
</style>
