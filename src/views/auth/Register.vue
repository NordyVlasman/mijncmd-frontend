<template>
  <div class="w-full max-w-sm mx-auto lg:w-96">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Account aanmaken
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Of
          <a href="#" class="font-medium text-gray-900 hover:text-gray-700">
            direct inloggen
          </a>
        </p>
      </div>

      <div class="mt-8">
        <div class="mt-6">
          <form @submit.prevent='registerUser' class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input id="email" name="email" v-model='form.email' type="email" autocomplete="email" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
              </div>
            </div>

            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Naam
              </label>
              <div class="mt-1">
                <input id="name" name="name" v-model='form.name' type="text" autocomplete="name" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
              </div>
            </div>

            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">
                Gebruikersnaam
              </label>
              <div class="mt-1">
                <input id="username" name="username" v-model='form.handle' type="text" autocomplete="username" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
              </div>
            </div>

            <div>
              <label for="photo" class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1">
                <div class="flex items-center">
                  <span class="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                    <svg class="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <div class="relative flex items-center px-3 py-2 ml-5 bg-white border rounded-md shadow-sm cursor-pointer border-blue-gray-300 hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                      <label for="user_photo" class="relative text-sm font-medium pointer-events-none text-blue-gray-900">
                        <span>Upload</span>
                        <span class="sr-only"> user photo</span>
                      </label>
                      <input id="user_photo" name="user_photo" type="file" @change="handleFileChange" class="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input id="password" name="password" v-model='form.password' type="password" autocomplete="current-password" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
              </div>
            </div>

            <div>
              <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Registreer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: '',
        avatar: '',
        name: '',
        handle: ''
      }
    }
  },
  methods: {
    registerUser () {
      this.$store.dispatch('auth/registerUser', {
        email: this.form.email,
        password: this.form.password,
        avatar: this.form.avatar,
        name: this.form.name,
        handle: this.form.handle
      })
    },
    handleFileChange (e) {
      this.form.avatar = e.target.files[0]
    }
  }
}
</script>
