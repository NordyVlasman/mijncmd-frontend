<template>
  <div class="flex h-screen overflow-hidden bg-gray-100 dark:bg-darkBackground">
    <div class="hidden md:flex md:flex-shrink-0">
      <nav
        :key="showLabel"
        class="
          flex flex-col flex-grow
          pt-8
          pb-4
          overflow-y-auto
          bg-gray-50
          dark:bg-darkColor
        "
        :class="showLabel ? 'w-64' : 'w-21'"
      >
        <div class="flex items-center flex-shrink-0 px-5">
          <nuxt-link
            to="/"
            class="
              flex
              items-center
              justify-center
              flex-shrink-0
              w-10
              h-10
              text-white
              transition-colors
              duration-200
              bg-gray-800
              rounded
              group-hover:bg-gray-700
            "
          >
            <span class="text-md italic font-bold"> CMD </span>
          </nuxt-link>
        </div>
        <span
          class="absolute inset-0 w-10 h-10 object-right-top left-20 top-1/2"
          :class="showLabel ? 'left-64 -ml-4' : '-ml-2'"
        >
          <span
            class="
              inline-flex
              items-center
              px-2
              py-1
              text-xs
              font-normal
              leading-4
              text-white
              bg-gray-800
              border-2 border-white
              rounded-full
              dark:text-gray-800
              dark:bg-white
              cursor-pointer
            "
            @click="showLabel = !showLabel"
          >
            <span v-if="showLabel"> &lt; </span>
            <span v-if="!showLabel"> > </span>
          </span>
        </span>
        <div class="flex flex-col flex-grow mt-10" :class="showLabel ? '' : ''">
          <div class="flex-1 space-y-2">
            <nuxt-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              :class="[
                item.current
                  ? ''
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-darkBackground',
                'group border-l-2 py-2 px-6 flex items-center text-sm font-light',
                showLabel ? '' : '',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              <span
                v-if="showLabel"
                class="ml-2"
                :class="
                  item.current
                    ? 'tet-gray-900 dark:text-white'
                    : 'text-gray-400'
                "
                >{{ item.name }}</span
              >
            </nuxt-link>
          </div>
        </div>
        <div class="justify-center flex-shrink-0 block w-full">
          <a
            v-for="item in secondaryNavigation"
            :key="item.name"
            :href="item.href"
            class="
              flex
              items-center
              px-6
              py-2
              text-sm text-gray-600
              border-l-4 border-transparent
              group
              font-light
              hover:text-gray-900
              hover:bg-gray-50
            "
            :class="showLabel ? '' : ''"
          >
            <component
              :is="item.icon"
              class="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span v-if="showLabel" class="ml-2">{{ item.name }}</span>
          </a>
          <div class="mt-auto space-y-1">
            <div class="flex flex-shrink-0 p-4">
              <a href="#" class="flex-shrink-0 block w-full group">
                <div class="flex items-center px-2">
                  <div v-if="me.avatarUrl">
                    <img
                      class="inline-block rounded-full h-9 w-9"
                      :src="$config.baseURL + me.avatarUrl"
                      alt=""
                    />
                  </div>
                  <div v-if="showLabel" class="ml-4">
                    <p
                      class="
                        text-sm
                        font-light
                        text-gray-700
                        group-hover:text-gray-900
                      "
                    >
                      {{ me.name }}
                    </p>
                    <p
                      class="
                        text-xs
                        font-light
                        text-gray-500
                        group-hover:text-gray-700
                      "
                      @click="onLogout"
                    >
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
    <div class="flex flex-col flex-1">
      <div class="w-full px-6 mx-auto mt-4 md:px-8">
        <div class="relative z-10 flex flex-shrink-0 h-16">
          <button
            class="
              px-4
              text-gray-500
              border-r border-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-pink-500
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
                    sm:order-1
                    sm:ml-3
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
import { mapState } from 'vuex'
import HomeIcon from '~/components/icons/HomeIcon'
import InformationIcon from '~/components/icons/InfoIcon'
import HeartIcon from '~/components/icons/HeartIcon'
import DocumentIcon from '~/components/icons/DocumentIcon'
import UsersIcon from '~/components/icons/UserLineIcon'
import NotificationIcon from '~/components/icons/NotificationIcon'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  {
    name: 'Informatie',
    href: '#',
    icon: InformationIcon,
    current: false,
  },
  {
    name: 'Community',
    href: '#',
    icon: HeartIcon,
    current: false,
  },
  {
    name: 'Assesments',
    href: '#',
    icon: DocumentIcon,
    current: false,
  },
  {
    name: 'Contacten',
    href: '#',
    icon: UsersIcon,
    current: false,
  },
]

const secondaryNavigation = [
  { name: 'Feedback', href: '#', icon: NotificationIcon },
]

export default {
  data() {
    return {
      showLabel: false,
      navigation,
      secondaryNavigation,
    }
  },
  computed: {
    ...mapState({
      me: (state) => state.auth.currentUser,
    }),
  },
  created() {
    this.$store.dispatch('auth/getUser')
  },
  methods: {
    async onLogout() {
      await this.$apolloHelpers.onLogout().then(() => {
        this.$router.push('/auth/login')
      })
    },
  },
}
</script>
