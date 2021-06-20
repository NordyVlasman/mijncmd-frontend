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
          dark:text-white
        "
        placeholder="Titel van de post"
      />
      <div
        id="editor-container"
        class="
          mt-4
          -ml-6
          md:max-w-3xl
          lg:max-w-3xl
          xl:max-w-5xl
          prose
          dark:prose-dark
        "
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
            <div
              class="
                h-full
                flex flex-col
                bg-white
                dark:bg-darkColor
                overflow-y-scroll
              "
            >
              <div class="py-8 px-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <h2
                    id="slide-over-title"
                    class="text-2xl font-bold text-black dark:text-white"
                  >
                    Post instellingen
                  </h2>
                </div>
              </div>
              <div class="flex-1 flex flex-col justify-between">
                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                  <div class="space-y-6 pt-2 pb-5">
                    <div>
                      <div class="mt-1">
                        <div
                          class="
                            max-w-lg
                            flex
                            justify-center
                            px-6
                            pt-14
                            pb-14
                            bg-gray-100
                            dark:bg-darkBackground
                            rounded-md
                          "
                        >
                          <div class="group">
                            <img
                              v-if="image"
                              :src="image"
                              class="
                                filter
                                group
                                relative
                                group-hover:blur-sm
                                z-0
                                cursor-pointer
                              "
                              placeholder="Verwijderen"
                              @click="image = null"
                            />
                            <!--                            <div class="absolute inset-0 bg-cover bg-center z-0 filter hover:blur-sm" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg')"></div>-->
                          </div>
                          <div v-if="!image" class="space-y-1 text-center">
                            <div
                              class="
                                flex
                                text-sm text-gray-600
                                dark:text-gray-400
                              "
                            >
                              <label
                                for="file-upload"
                                class="
                                  relative
                                  cursor-pointer
                                  px-4
                                  py-3
                                  bg-buttonGray
                                  dark:bg-transparent dark:text-gray-300
                                  rounded-md
                                  font-medium
                                  text-gray-600
                                  hover:text-gray-500
                                  focus-within:outline-none
                                  focus-within:ring-2
                                  focus-within:ring-offset-2
                                  focus-within:ring-indigo-500
                                "
                              >
                                <div class="flex items-center gap-x-1.5">
                                  <UploadIcon />
                                  <span>Upload cover afbeelding</span>
                                </div>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  class="sr-only"
                                  @change="handleFileChange"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="slug"
                          class="
                            block
                            text-sm
                            font-medium
                            text-gray-900
                            dark:text-gray-200
                            pt-5
                          "
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
                              focus:ring-gray-500 focus:border-gray-500
                              rounded-md
                              border-none
                              bg-gray-100
                              dark:bg-darkBackground dark:text-gray-200
                            "
                          />
                          <p class="mt-2 text-sm text-gray-500">
                            Je link:
                            <span class="underline">{{
                              $config.baseURL + '/' + slug
                            }}</span>
                          </p>
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="tags"
                          class="
                            block
                            text-sm
                            font-medium
                            text-gray-900
                            dark:text-gray-200
                            pt-5
                          "
                        >
                          Tags
                        </label>
                        <div class="mt-1.5 relative rounded-md shadow-sm">
                          <multiselect
                            id="tags"
                            v-model="form.skills"
                            tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag"
                            label="name"
                            :multiple="true"
                            :max="3"
                            :options="options.map((option) => option.id)"
                            :custom-label="
                              (opt) => options.find((x) => x.id == opt).name
                            "
                            :taggable="true"
                          ></multiselect>
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="products"
                          class="
                            block
                            text-sm
                            font-medium
                            text-gray-900
                            dark:text-gray-200
                            pt-5
                          "
                        >
                          Tools
                        </label>
                        <div class="mt-1.5 relative rounded-md shadow-sm">
                          <multiselect
                            id="products"
                            v-model="form.products"
                            tag-placeholder="Add this as new tag"
                            placeholder="Search tool"
                            label="name"
                            :multiple="true"
                            :allow-empty="false"
                            :max="3"
                            :options="productOptions.map((option) => option.id)"
                            :custom-label="
                              (opt) =>
                                productOptions.find((x) => x.id == opt).name
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
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
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
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
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
import SkillQuery from '@/graphql/skill/getSkillForDropdown.gql'
import ProductQuery from '@/graphql/product/getProductsForDropdown.gql'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from 'editorjs-paragraph-with-alignment'
import List from '@editorjs/list'
import Image from '@editorjs/image'
import Embed from '@editorjs/embed'
import Codebox from '@bomdi/codebox'
import Multiselect from 'vue-multiselect'
import AlignmentBlockTune from 'editorjs-text-alignment-blocktune'
import UploadIcon from '~/components/UploadIcon'

export default {
  components: {
    UploadIcon,
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
        products: null,
      },
      image: '',
      options: [],
      productOptions: [],
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
    this.$apollo
      .query({
        query: ProductQuery,
      })
      .then(({ data }) => {
        this.productOptions = data.products
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
      window.hop = this.$config
      window.editor = new EditorJS({
        holder: 'editor-container',
        placeholder: 'Begin hier met je post',
        tools: {
          image: {
            class: Image,
            config: {
              endpoints: {
                byFile: window.hop.baseURL + '/upload/image',
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
            tunes: ['anyTuneName'],
            inlineToolbar: ['bold', 'link', 'italic'],
          },
          anyTuneName: {
            class: AlignmentBlockTune,
            config: {
              default: 'left',
              blocks: {
                header: 'center',
                list: 'right',
              },
            },
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
        console.log(payload.body)
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
.multiselect__content-wrapper {
  background-color: #f3f4f6;
}
.multiselect__tags {
  background-color: #f3f4f6;
  border: none;
}
.multiselect__input {
  background-color: #f3f4f6;
  border: none;
}
@media (prefers-color-scheme: dark) {
  .multiselect__content-wrapper {
    background-color: #121212;
    color: white;
  }
  .multiselect__tags {
    background-color: rgba(33, 33, 33, 1);
    border-color: rgba(156, 163, 175, 1);
  }
}
</style>
