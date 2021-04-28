<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold">{{ selectedPost.title }}</h1>
    <p class="font-medium">{{ selectedPost.description }}</p>
    <markdown-renderer
      class="max-w-full prose"
      :markdown="selectedPost.body"
    />
  </div>
</template>
<script>
import MarkdownRenderer from '@/components/markdown/MarkdownRenderer'
export default {
  components: {
    MarkdownRenderer
  },
  props: [
    'postId'
  ],
  data () {
    return {
      selectedPost: null
    }
  },
  created () {
    this.selectedPost = this.$store.getters['posts/posts'].find((post) => post.id === this.postId)
  }
}
</script>
