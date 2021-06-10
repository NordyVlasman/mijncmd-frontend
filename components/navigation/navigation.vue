<template>
  <nav
    :key="showLabel"
    class="
      flex flex-col flex-grow
      pt-8
      pb-4
      overflow-y-auto
      bg-white
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
          duration-200
          bg-gradient-to-br
          from-red-400
          via-green-400
          to-purple-500
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
          dark:text-gray-800 dark:bg-white
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
        <nav-item
          v-for="item in navigation"
          :key="item.caption"
          :item="item"
          :show-label="showLabel"
        />
      </div>
    </div>
    <div class="justify-center flex-shrink-0 w-full">
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
          hover:text-gray-900 hover:bg-gray-50
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
          <a
            class="flex-shrink-0 block w-full group"
            @click="showProfilePopup = !showProfilePopup"
          >
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
</template>

<script>
import { mapState } from 'vuex'
import NotificationIcon from '~/components/NotificationIcon'
import NavItem from '~/components/navigation/nav-item'
const secondaryNavigation = [
  { name: 'Feedback', href: '#', icon: NotificationIcon },
]

export default {
  name: 'Navigation',
  components: { NavItem },
  data() {
    return {
      showLabel: false,
      navigation: [
        {
          path: '/',
          caption: 'Home',
          icon: 'HomeIcon',
          exact: true,
        },
        {
          path: '/information',
          caption: 'Informatie',
          icon: 'InfoIcon',
          exact: true,
        },
        {
          path: '/community',
          caption: 'Community',
          icon: 'HeartIcon',
          exact: true,
        },
        {
          path: '/user/assesments',
          caption: 'Assesments',
          icon: 'DocumentIcon',
          exact: true,
        },
        {
          path: '/user/list',
          caption: 'Contacten',
          icon: 'UserLineIcon',
          exact: true,
        },
      ],
      secondaryNavigation,
      showProfilePopup: false,
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
