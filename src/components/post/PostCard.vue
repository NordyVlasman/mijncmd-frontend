<template>
  <div class="col-span-1 p-4">
    <article class="overflow-hidden rounded-lg shadow-lg">
      <!-- Cover image -->
      <a href="#">
        <img src="https://picsum.photos/536/354" class="block w-full h-auto" alt="cover">
      </a>

      <!-- Title and Author -->
      <header class="flex p-2 md:p-4">
        <img
          class="inline w-12 h-12 mr-2 rounded-full"
          :src="`http://localhost:4000${post.author.avatar_url}`"
          alt="author">
        <div class="inline">
          <router-link
            :to="{
              name: 'post',
              params: {
                postId: post.id,
                postSlug: post.slug
              }
            }"
            class="text-2xl hover:underline"
          >{{ post.title }}</router-link>
          <p class="text-sm text-blue-500">
            {{ post.author.name }}
          </p>
        </div>
      </header>

      <!-- Meta data -->
      <div class="flex justify-between p-2 space-x-8 md:p-4">
        <div class="flex space-x-2">
          <span
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            :if="post.skills"
            v-for="skill in post.skills"
            :key="skill.id"
          >
            {{ skill.name }}
          </span>
        </div>
        <div class="flex space-x-2 text-sm">
          <span>2 ❤️</span>
          <span>4 🐴</span>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: 'Post item',
  props: {
    post: {
      type: Object
    }
  }
}
</script>
