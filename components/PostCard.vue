<template>
  <nuxt-link
    :to="`post/` + item.slug"
    class="flex-1 bg-white rounded-md shadow-md dark:bg-darkColor"
  >
    <article>
      <div class="relative col-span-3 row-span-2">
        <div v-if="item.coverUrl">
          <img
            :src="$config.baseURL + item.coverUrl"
            loading="lazy"
            alt="Post item image"
            class="block w-full h-72 object-contain"
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
          <h2 class="text-2xl font-bold hover:underline dark:text-white">
            {{ item.title }}
          </h2>
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
      <div class="bottom-0 flex justify-between p-2 space-x-8 md:px-4 pb-4">
        <div class="flex space-x-2" :if="item.skills">
          <div v-for="skill in item.skills" :key="skill.id">
            <SkillTag :skill="skill" />
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
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
