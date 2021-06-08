<template>
  <div class="flex h-screen overflow-hidden bg-gray-100 dark:bg-darkBackground">
    <div class="hidden md:flex md:flex-shrink-0">
      <navigation />
    </div>
    <div class="flex flex-col flex-1">
      <div class="w-full px-6 mx-auto mt-4 md:px-8">
        <div class="relative z-10 flex flex-shrink-0 h-16">
          <button
            class="
              px-4
              text-gray-500
              border-r border-gray-200
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-pink-500
              md:hidden
            "
            @click="sidebarOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div class="flex justify-between flex-1 px-4 md:px-0">
            <div class="flex-1 flex justify-between">
              <div class="w-1/3 mt-0 sm:mt-4 hidden md:block">
                <label for="search" class="sr-only">Search projects</label>
                <div class="relative text-gray-400 focus-within:text-gray-400">
                  <div
                    class="
                      absolute
                      inset-y-0
                      left-0
                      pl-3
                      flex
                      items-center
                      pointer-events-none
                    "
                  >
                    <!-- Heroicon name: solid/search -->
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="
                      block
                      w-full
                      pl-10
                      pr-3
                      py-2
                      border border-transparent
                      rounded-md
                      leading-5
                      bg-white
                      text-indigo-100
                      placeholder-gray-400
                      focus:outline-none
                      focus:bg-white
                      focus:ring-0
                      focus:placeholder-gray-400
                      focus:text-gray-900
                      sm:text-sm
                    "
                    placeholder="Zoeken"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div class="flex items-center ml-4 md:ml-6">
              <div class="flex mt-0 sm:mt-4 sm:ml-4 px-6">
                <nuxt-link
                  to="/post/create"
                  class="
                    inline-flex
                    items-center
                    px-9
                    py-2
                    text-sm
                    font-medium
                    text-white
                    hover:text-gray-200
                    bg-gradient-to-br
                    from-gradientFirst
                    to-gradientSecond
                    border border-none
                    rounded-md
                    shadow-sm
                    hover:bg-gray-900
                    focus:outline-none
                    ring-0
                    sm:order-1 sm:ml-3
                  "
                >
                  Uploaden
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 flex items-stretch overflow-hidden">
        <main
          class="flex-1 px-6 overflow-scroll md:px-10 mt-8 focus:outline-none"
        >
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/navigation'
export default {
  components: {
    Navigation,
  },
}
</script>
