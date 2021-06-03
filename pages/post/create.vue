<template>
  <div>
    <div class="mt-6">
      <input
        v-model="form.title"
        type="text"
        class="
          text-4xl
          bg-transparent
          border-none
          focus:outline-none
          focus:ring
          focus:border-transparent
          focus:ring-transparent
          w-full
        "
        placeholder="Titel van de post"
      />
      <div
        id="editor-container"
        class="mt-4 -ml-6 md:max-w-4xl lg:max-w-5xl"
      ></div>
    </div>
    <div
      class="inset-0 overflow-auto"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="overflow-hidden">
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div class="w-screen max-w-md">
            <div class="h-full flex flex-col bg-white overflow-y-scroll">
              <div class="py-8 px-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <h2
                    id="slide-over-title"
                    class="text-2xl font-bold text-black"
                  >
                    Post instellingen
                  </h2>
                </div>
              </div>
              <div class="flex-1 flex flex-col justify-between">
                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                  <div class="space-y-6 pt-2 pb-5">
                    <div>
                      <label
                        for="title"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Titel
                      </label>
                      <div class="mt-1">
                        <input
                          id="title"
                          v-model="form.title"
                          type="text"
                          name="title"
                          class="
                            block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-indigo-500
                            focus:border-indigo-500
                            border-gray-300
                            rounded-md
                          "
                        />
                      </div>
                    </div>
                    <div>
                      <div class="mt-1">
                        <div
                          class="
                            max-w-lg
                            flex
                            justify-center
                            px-6
                            pt-5
                            pb-6
                            border-2 border-gray-300 border-dashed
                            rounded-md
                          "
                        >
                          <img v-if="image" :src="image" />
                          <div v-if="!image" class="space-y-1 text-center">
                            <svg
                              class="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                              <label
                                for="file-upload"
                                class="
                                  relative
                                  cursor-pointer
                                  bg-white
                                  rounded-md
                                  font-medium
                                  text-gray-900
                                  hover:text-gray-500
                                  focus-within:outline-none
                                  focus-within:ring-2
                                  focus-within:ring-offset-2
                                  focus-within:ring-indigo-500
                                "
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  class="sr-only"
                                  @change="handleFileChange"
                                />
                              </label>
                              <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="slug"
                          class="block text-sm font-medium text-gray-900 pt-5"
                        >
                          Slug
                        </label>
                        <div class="mt-1">
                          <input
                            id="slug"
                            v-model="slug"
                            type="text"
                            name="slug"
                            class="
                              block
                              w-full
                              shadow-sm
                              sm:text-sm
                              focus:ring-indigo-500
                              focus:border-indigo-500
                              border-gray-300
                              rounded-md
                            "
                          />
                          <p class="mt-2 text-sm text-gray-500">
                            Je link:
                            <span class="underline"
                              >http://localhost:4000/{{ slug }}</span
                            >
                          </p>
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="tags"
                          class="block text-sm font-medium text-gray-900 pt-5"
                        >
                          Tags
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <multiselect
                            id="tags"
                            v-model="form.skills"
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="name"
                            :multiple="true"
                            :options="options.map((option) => option.id)"
                            :custom-label="
                              (opt) => options.find((x) => x.id == opt).name
                            "
                            :taggable="true"
                          ></multiselect>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  flex-shrink-0
                  px-4
                  py-4
                  flex
                  justify-between
                  space-x-4
                  mb-3
                "
              >
                <button
                  type="button"
                  class="
                    bg-transparent
                    py-2
                    px-4
                    rounded-md
                    border-none
                    w-full
                    text-sm
                    font-semibold
                    text-red-600
                    underline
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                  @click="cancel"
                >
                  Stoppen
                </button>
                <button
                  type="button"
                  class="
                    ml-4
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border-none
                    shadow-sm
                    text-sm
                    w-full
                    font-medium
                    rounded-md
                    text-white
                    bg-gray-900
                    hover:bg-gray-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                  @click="createPost"
                >
                  Publiceren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SkillQuery from '@/graphql/getSkillForDropdown.gql'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Image from '@editorjs/image'
import Embed from '@editorjs/embed'
import Codebox from '@bomdi/codebox'
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect,
  },
  layout: 'create',
  data() {
    return {
      form: {
        title: '',
        body: '',
        cover: '',
        skills: null,
      },
      image: '',
      options: [],
    }
  },
  computed: {
    slug() {
      return this.slugger(this.form.title)
    },
  },
  mounted() {
    this.editor()
    this.$apollo
      .query({
        query: SkillQuery,
      })
      .then(({ data }) => {
        this.options = data.skills
      })
  },
  methods: {
    slugger(title) {
      return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-')
        .replace('/--/g', '-')
    },
    editor() {
      window.editor = new EditorJS({
        holderId: 'editor-container',
        tools: {
          image: {
            class: Image,
            config: {
              endpoints: {
                byFile: 'https://api.nordyvlasman.nl/upload/image',
              },
            },
          },
          codeBox: Codebox,
          list: List,
          header: Header,
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                twitter: true,
                instagram: true,
              },
            },
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: ['bold', 'link', 'italic'],
          },
        },
      })
    },
    cancel() {
      this.$router.push('/')
    },
    createPost() {
      const payload = this.form
      // eslint-disable-next-line no-undef
      editor.save().then((savedData) => {
        payload.body = JSON.stringify(savedData)
        payload.slug = this.slug
        this.$store.dispatch('post/CREATE_POST', payload).then(() => {
          this.$router.push('/')
        })
      })
    },
    handleFileChange(e) {
      const file = e.target.files[0]
      this.form.cover = file
      this.image = URL.createObjectURL(file)
    },
  },
}
</script>
<style>
.ce-header {
  font-size: revert;
  font-weight: revert;
}
.ce-block__content,
.ce-toolbar__content {
  max-width: calc(100% - 80px) !important;
}
.cdx-block {
  max-width: 100% !important;
}
</style>
