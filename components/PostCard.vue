<template>
  <div class="col-span-1">
    <article class="overflow-hidden rounded-lg shadow-lg dark:bg-cardGray">
      <div class="relative col-span-3 row-span-2 bg-gray-100">
        <div v-if="post.cover_url">
          <img
            :src="`http://localhost:4000` + post.cover_url"
            alt="Post item image"
            class="block w-full h-72"
          />
        </div>
        <div v-else>
          <img
            src="https://media4.giphy.com/media/DD2NmqYhvLiP6/giphy.gif"
            alt="Post item image"
            class="block w-full h-72"
          />
        </div>
        <div class="absolute bottom-0 w-full px-5 pb-5">
          <div class="flex justify-end">
            <span
              class="
                px-2
                py-2
                bg-white
                rounded-md
                hover:bg-gray-100
                cursor-pointer
              "
            >
              <heart-icon />
            </span>
            <span
              class="
                px-2
                py-2
                ml-2
                bg-white
                rounded-md
                hover:bg-gray-100
                cursor-pointer
              "
            >
              <chat-icon />
            </span>
          </div>
        </div>
      </div>
      <header class="flex p-2 md:p-4">
        <div>
          <nuxt-link
            :to="`post/` + post.slug"
            class="text-2xl font-medium hover:underline dark:text-white"
            >{{ post.title }}</nuxt-link
          >
          <div class="flex items-center mt-4">
            <img
              :src="`http://localhost:4000${post.author.avatarUrl}`"
              :alt="post.author.name"
              class="inline w-8 h-8 mr-2 rounded-full"
            />
            <p class="ml-1 text-gray-900 text-md dark:text-gray-300">
              {{ post.author.name }}
            </p>
          </div>
        </div>
      </header>
      <div class="flex justify-between p-2 space-x-8 md:p-4">
        <div class="flex space-x-2" :if="post.skills">
          <div v-for="skill in post.skills" :key="skill.id">
            <SkillTag :skill="skill" />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import SkillTag from '~/components/SkillTag'

import ChatIcon from '~/components/icons/ChatIcon'
import HeartIcon from '~/components/icons/HeartIcon'

export default {
  components: { SkillTag, HeartIcon, ChatIcon },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
