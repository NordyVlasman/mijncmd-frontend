<template>
  <div class="mt-8">
    <div class="mt-6 space-y-6">
      <input
        v-model="form.email"
        type="email"
        class="
          block
          w-full
          px-3
          py-2
          placeholder-gray-400
          border border-gray-300
          rounded-md
          shadow-sm
          appearance-none
          focus:outline-none focus:ring-gray-900 focus:border-gray-900
          sm:text-sm
        "
        placeholder="Email"
      />
      <input
        v-model="form.password"
        type="password"
        class="
          block
          w-full
          px-3
          py-2
          placeholder-gray-400
          border border-gray-300
          rounded-md
          shadow-sm
          appearance-none
          focus:outline-none focus:ring-gray-900 focus:border-gray-900
          sm:text-sm
        "
        placeholder="Wachtwoord"
      />
      <select v-model="form.role">
        <option disabled selected>Selecteer een rol (wees eerlijk)</option>
        <option v-for="role in roles" :key="role.slug" :value="role.slug">
          {{ role.slug }}
        </option>
      </select>
      <input
        v-model="form.name"
        type="text"
        class="
          block
          w-full
          px-3
          py-2
          placeholder-gray-400
          border border-gray-300
          rounded-md
          shadow-sm
          appearance-none
          focus:outline-none focus:ring-gray-900 focus:border-gray-900
          sm:text-sm
        "
        placeholder="Naam"
      />
      <input
        v-model="form.title"
        type="text"
        class="
          block
          w-full
          px-3
          py-2
          placeholder-gray-400
          border border-gray-300
          rounded-md
          shadow-sm
          appearance-none
          focus:outline-none focus:ring-gray-900 focus:border-gray-900
          sm:text-sm
        "
        placeholder="Titel"
      />
      <input v-model="sluggedName" disabled type="text" class="bg-gray-300" />
      <div>
        <div class="mt-1">
          <div
            class="
              flex
              justify-center
              max-w-lg
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
                class="w-12 h-12 mx-auto text-gray-400"
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
                    font-medium
                    text-gray-900
                    bg-white
                    rounded-md
                    cursor-pointer
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
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <button @click="login">Submit</button>
    </div>
  </div>
</template>
<script>
import RolesQuery from '@/graphql/user/roles.gql'
import RegisterMutation from '@/graphql/auth/register.gql'

export default {
  layout: 'auth',
  middleware: 'guest',
  data() {
    return {
      error: null,
      form: {
        name: '',
        email: '',
        title: '',
        role: null,
        password: '',
        avatar: '',
      },
      image: '',
      roles: null,
    }
  },
  computed: {
    sluggedName() {
      return this.slugger(this.form.name)
    },
  },
  mounted() {
    this.$apollo
      .query({
        query: RolesQuery,
      })
      .then(({ data }) => {
        this.roles = data.roles
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
    handleFileChange(e) {
      const file = e.target.files[0]
      this.form.avatar = file
      this.image = URL.createObjectURL(file)
    },
    async login() {
      await this.$apollo
        .mutate({
          mutation: RegisterMutation,
          variables: {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            avatar: this.form.avatar,
            handle: this.sluggedName,
            title: this.form.title,
            role: this.form.role,
          },
        })
        .then(({ data }) => {
          this.$router.push('/auth/login')
        })
        .catch((err) => {
          this.error = err
        })
    },
  },
}
</script>
