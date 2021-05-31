<template>
  <div class="col-span-1">
    <article
      class="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-cardGray"
    >
      <div class="relative col-span-3 row-span-2 bg-gray-100">
        <div v-if="item.coverUrl">
          <img
            :src="`http://localhost:4000` + item.coverUrl"
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
      </div>
      <header class="flex p-2 md:p-4">
        <div>
          <nuxt-link
            :to="`post/` + item.slug"
            class="text-2xl font-bold hover:underline dark:text-white"
            >{{ item.title }}</nuxt-link
          >
          <div class="flex items-center mt-8">
            <img
              :src="`${$config.baseURL}${item.author.avatarUrl}`"
              :alt="post.author.name"
              class="inline w-8 h-8 mr-2 rounded-full"
            />
            <p
              class="
                ml-1
                text-gray-900
                font-semibold
                text-md
                dark:text-gray-300
              "
            >
              {{ item.author.name }}
            </p>
          </div>
        </div>
      </header>
      <div class="flex justify-between p-2 space-x-8 md:px-4 pb-4">
        <div class="flex space-x-2" :if="item.skills">
          <div v-for="skill in item.skills" :key="skill.id">
            <SkillTag :skill="skill" />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import SkillTag from '~/components/SkillTag'

export default {
  components: { SkillTag },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      item: this.post,
    }
  },
}
</script>
