<template>
  <div class="flex h-screen overflow-hidden bg-gray-100">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" static class="fixed inset-0 z-40 flex md:hidden" @close="sidebarOpen = false" :open="sidebarOpen">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 p-1 -mr-14">
                <button class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600" @click="sidebarOpen = false">
                  <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  <span class="sr-only">Close sidebar</span>
                </button>
              </div>
            </TransitionChild>
            <div class="flex items-center flex-shrink-0 px-4">
              <h2>MijnCMD</h2>
            </div>
            <div class="flex-1 h-0 mt-5 overflow-y-auto">
              <nav class="flex flex-col h-full">
                <div class="space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-pink-50 border-pink-600 text-pink-600' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group border-l-2 py-2 px-3 flex items-center text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                    <component :is="item.icon" :class="[item.current ? 'text-pink-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 h-6 w-6']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

      <div class="hidden md:flex md:flex-shrink-0">
        <nav class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200 bg-gray-50" :class="showLabel ? 'w-64' : 'w-24' " :key="showLabel">
          <div class="flex items-center flex-shrink-0" :class="showLabel ? 'px-4' : 'justify-center'">
            <h5 class="font-bold" :class="showLabel ? 'hidden' : ''">Mijn CMD</h5>
            <h2 class="font-bold" :class="!showLabel ? 'hidden' : ''">Mijn CMD</h2>
          </div>
          <span class="absolute inset-0 object-right-top left-20 top-11" :class="showLabel ? 'left-64 -ml-4' : ''">
            <div class="inline-flex items-center px-2 py-1 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-gray-800 text-white" @click="showLabel = !showLabel">
              <span v-if="showLabel"> &lt; </span>
              <span v-if="!showLabel"> > </span>
            </div>
          </span>
          <div class="flex flex-col flex-grow mt-10" :class="showLabel ? '' : ''">
            <div class="flex-1 space-y-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-pink-50 border-pink-600 text-pink-600' : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group border-l-2 py-2 px-3 flex items-center text-sm', showLabel ?  '' : 'justify-center']">
                <component :is="item.icon" :class="[item.current ? 'text-pink-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6']" aria-hidden="true" />
                <span v-if="showLabel">{{ item.name }}</span>
              </a>
            </div>
          </div>
          <div class="justify-center flex-shrink-0 block w-full">
            <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 border-l-4 border-transparent group hover:text-gray-900 hover:bg-gray-50" :class="showLabel ? '' : 'justify-center'">
              <component :is="item.icon" class="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              <span v-if="showLabel">{{ item.name }}</span>
            </a>
            <div class="mt-auto space-y-1">
              <div class="flex flex-shrink-0 p-4">
                <a href="#" class="flex-shrink-0 block w-full group">
                  <div class="flex items-center" :class="showLabel ? '' : 'justify-center'">
                    <div>
                      <img class="inline-block rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=uuHHGtFdOW&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </div>
                    <div class="ml-3" v-if="showLabel">
                      <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        Tom Cook
                      </p>
                      <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    <!-- Content area -->
    <div class="flex flex-col flex-1">
      <div class="w-full px-6 mx-auto md:px-8">
        <div class="relative z-10 flex flex-shrink-0 h-16">
          <button class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 md:hidden" @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <MenuAlt2Icon class="w-6 h-6" aria-hidden="true" />
          </button>
          <div class="flex justify-between flex-1 px-4 md:px-0">
            <div class="px-3 mt-2 sm:mt-4">
              <label for="search" class="sr-only">Search</label>
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" aria-hidden="true">
                  <!-- Heroicon name: solid/search -->
                  <svg class="w-4 h-4 mr-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="text" name="search" id="search" class="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-9 sm:text-sm" placeholder="Search">
              </div>
            </div>
            <div class="flex items-center ml-4 md:ml-6">
              <div class="flex mt-0 sm:mt-4 sm:ml-4">
                <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm order-0 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:order-1 sm:ml-3">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main class="flex-1 px-6 overflow-y-auto focus:outline-none">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Switch,
  SwitchGroup,
  SwitchLabel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  CogIcon,
  DocumentSearchIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'


import { HomeIcon, HeartIcon, DocumentIcon, UsersIcon, InformationIcon, NotificationIcon } from '@/components/icons'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Informatie', href: '#', icon: InformationIcon, current: false },
  { name: 'Community', href: '#', icon: HeartIcon, current: false },
  { name: 'Assesments', href: '#', icon: DocumentIcon, current: false },
  { name: 'Contacten', href: '#', icon: UsersIcon, current: false }
]
const secondaryNavigation = [
  { name: 'Feedback', href: '#', icon: NotificationIcon }

]
const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]

export default {
  components: {
    Dialog,
    DialogOverlay,
    Switch,
    SwitchGroup,
    SwitchLabel,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false)
    const automaticTimezoneEnabled = ref(true)
    const autoUpdateApplicantDataEnabled = ref(false)
    const showLabel = ref(false)

    return {
      navigation,
      secondaryNavigation,
      tabs,
      sidebarOpen,
      automaticTimezoneEnabled,
      autoUpdateApplicantDataEnabled,
      showLabel
    }
  },
}
</script>
