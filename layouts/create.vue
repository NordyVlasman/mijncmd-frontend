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
          class="absolute inset-0 object-right-top left-20 top-1/2"
          :class="showLabel ? 'left-64 -ml-4' : ''"
        >
          <div
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
          </div>
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
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                'group border-l-2 py-2 px-6 flex items-center text-sm font-light',
                showLabel ? '' : '',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-900'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              <span v-if="showLabel" class="ml-2">{{ item.name }}</span>
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
                  <div>
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
    <main
      class="flex-1 px-6 overflow-y-auto md:px-10 mt-8x2 focus:outline-none"
    >
      <Nuxt />
    </main>
  </div>
  <!--  </div>-->
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
}
</script>
