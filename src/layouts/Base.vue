<template>
  <div class="flex h-screen overflow-hidden bg-gray-100">
  <div class="hidden bg-white md:flex md:flex-shrink-0">
    <div class="flex flex-col w-24">
      <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <h1 class="font-sans text-2xl font-bold text-center">Mijn.<br />CMD</h1>
        </div>
        <div class="flex flex-col flex-1 mt-5">
          <nav class="flex-1 px-2 space-y-1">
            <!-- nav hier -->
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col flex-1 w-0 overflow-hidden">
    <div class="relative z-10 flex flex-shrink-0 h-24 bg-white shadow">
      <button type="button" class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: outline/menu-alt-2 -->
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      <div class="flex justify-between flex-1 px-4">
        <div class="flex flex-1">
          <form class="flex w-full md:ml-0" action="#" method="GET">
            <label for="search_field" class="sr-only">Search</label>
            <div class="relative w-full text-gray-400 focus-within:text-gray-600">
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <!-- Heroicon name: solid/search -->
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="search_field" class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />
            </div>
          </form>
        </div>
        <div class="flex items-center ml-4 md:ml-6">
          <button class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button type="button" class="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <div v-if="user">
                  <img :src="`http://localhost:4000${user.avatar_url}`" :alt="user.email" class="w-8 h-8 rounded-full">
                </div>
              </button>
            </div>
          </div>
          <!-- <a>
              <div class="pt-2 pb-2 pl-10 pr-10 m-6 text-white bg-green-400 rounded-xl">Uploaden</div>
          </a> -->
          <router-link :to="{ name: 'createPost' }" class="pt-2 pb-2 pl-10 pr-10 m-6 text-white bg-green-400 rounded-xl">
            Uploaden
          </router-link>
        </div>
      </div>
    </div>

    <main class="relative flex-1 overflow-y-auto focus:outline-none">
      <div class="">
        <slot />
      </div>
    </main>
  </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseLayout',
  computed: mapGetters({
    user: 'auth/user'
  })
}
</script>
