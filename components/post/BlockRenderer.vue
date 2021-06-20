<template>
  <div>
    <div
      v-for="(block, index) in content.blocks"
      :key="index"
      :class="blockClass"
    >
      <div
        v-if="block.type === 'header'"
        v-html="headingRenderer(block.data)"
      ></div>

      <div
        v-else-if="block.type === 'paragraph'"
        class="prose xl:prose-2xl px-4 mt-2 py-2 mb-4 w-full"
        :class="block.data.alignment"
        v-html="block.data.text"
      ></div>

      <pre v-else-if="block.type === 'code'" class="language-html w-full">
        <code>
          {{ block.data.code }}
        </code>
      </pre>

      <div
        v-else-if="block.type === 'image'"
        class="w-full pb-5"
        :class="{
          'image-withBorder': block.data.withBorder,
          'image-withBackground': block.data.withBackground,
          'image-stretched': block.data.stretched,
        }"
      >
        <div class="image--content">
          <img
            class="image rounded w-full object-contain"
            alt=""
            :src="block.data.file.url"
          />
          <small class="px-4" v-html="block.data.caption"></small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Prism from 'prismjs'

export default {
  name: 'BlockRenderer',
  props: {
    content: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
    },
    blockClass: {
      type: String,
      default: '',
    },
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    headingRenderer(header) {
      return `<h${header.level} class"" level="${header.level}">${header.text}</h${header.level}>`
    },
  },
}
</script>
