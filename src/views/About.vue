<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      {{ currentUser }}
    </p>
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <ul class="space-y-4">
        <li v-for="post in posts" :key="post.id" class="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
          <article :aria-labelledby="'post-title-' + post.id">
            <div>
              <div class="flex space-x-3">
                <div class="flex-shrink-0">
<!--                  <img class="w-10 h-10 rounded-full" :src="post.author.imageUrl" alt="" />-->
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">{{ post.author.name }}</a>
                  </p>
                  <p class="text-sm text-gray-500">
<!--                    <a :href="question.href" class="hover:underline">-->
<!--                      <time :datetime="question.datetime">{{ question.date }}</time>-->
<!--                    </a>-->
                  </p>
                </div>
                <div class="flex self-center flex-shrink-0">
                  <Menu as="div" class="relative inline-block text-left">
                    <div>
                      <MenuButton class="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600">
                        <span class="sr-only">Open options</span>
                        <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
                      </MenuButton>
                    </div>

                    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                      <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                              <StarIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                              <span>Add to favorites</span>
                            </a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                              <CodeIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                              <span>Embed</span>
                            </a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                              <FlagIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                              <span>Report content</span>
                            </a>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </div>
              </div>
              <h2 :id="'question-title-' + post.id" class="mt-4 text-base font-medium text-gray-900">
                {{ post.title }}
              </h2>
            </div>
            <div class="mt-2 space-y-4 text-sm text-gray-700" v-html="post.description" />
            <div class="flex justify-between mt-6 space-x-8">
              <div class="flex space-x-6">
                      <span class="inline-flex items-center text-sm">
                        <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ThumbUpIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">1</span>
                          <span class="sr-only">likes</span>
                        </button>
                      </span>
                <span class="inline-flex items-center text-sm">
                        <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ChatAltIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">12</span>
                          <span class="sr-only">replies</span>
                        </button>
                      </span>
                <span class="inline-flex items-center text-sm">
                        <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <EyeIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">104</span>
                          <span class="sr-only">views</span>
                        </button>
                      </span>
              </div>
              <div class="flex text-sm">
                      <span class="inline-flex items-center text-sm">
                        <button class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ShareIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">Share</span>
                        </button>
                      </span>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon
} from '@heroicons/vue/solid'

export default {
  layout: 'base',

  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon
  },
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    },
    posts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getUser')
    this.$store.dispatch('getPosts')
  }
}
</script>
