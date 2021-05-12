<template>
  <div class="col-span-1 p-4">
    <article class="overflow-hidden rounded-lg shadow-lg">
<div class="relative col-span-4 row-span-2 bg-gray-100">
                <img src="https://picsum.photos/536/354" class="block w-full h-auto" alt="cover">
                <div class="absolute bottom-0 w-full px-5 pb-5">
                  <div class="flex justify-end">
                    <span class="px-2 py-2 bg-white rounded-md "><heart-icon /></span>
                    <span class="px-2 py-2 ml-2 bg-white rounded-md"><chat-icon /></span>
                  </div>
                </div>
    </div>
      <!-- Title and Author -->
      <header class="flex p-2 md:p-4">
        <div>
            <router-link
                :to="{
                  name: 'post',
                  params: {
                    postId: post.id,
                    postSlug: post.slug
                  }
                }"
                class="text-2xl font-bold hover:underline"
            >{{ post.title }}</router-link>
            <div class="flex items-center mt-2">
              <img
                class="inline w-8 h-8 mr-2 rounded-full"
                :src="`http://localhost:4000${post.author.avatar_url}`">
              <p class="ml-1 text-gray-900 text-md dark:text-gray-300">{{ post.author.name }}</p>
            </div>
          </div>
      </header>

      <!-- Meta data -->
      <div class="flex justify-between p-2 space-x-8 md:p-4">
        <div class="flex space-x-2">
          <span
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
            :if="post.skills"
            v-for="skill in post.skills"
            :key="skill.id"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import { ChatIcon, HeartIcon } from '@/components/icons'
export default {
  name: 'Post item',
  props: {
    post: {
      type: Object
    }
  },
  components: {
    ChatIcon,
    HeartIcon
  }
}
</script>
