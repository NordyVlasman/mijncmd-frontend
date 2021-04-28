<template>
  <div v-html="compiledMarkdown" />
</template>

<script>
import marked from 'marked'
import Prism from 'prismjs'

export default {
  name: 'MarkdownRenderer',
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  computed: {
    compiledMarkdown () {
      return marked(this.markdown)
    }
  }
}
</script>
