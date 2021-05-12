<template>
  <div class="w-full max-w-sm mx-auto lg:w-96">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Log in om te beginnen
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Of
          <a href="#" class="font-medium text-gray-900 hover:text-gray-700">
            maak een account aan
          </a>
        </p>
      </div>

      <div class="mt-8">
        <div class="mt-6">
          <form @submit.prevent='loginUser' class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input id="email" name="email" v-model='form.email' type="email" autocomplete="email" required class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
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

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" class="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900">
                <label for="remember_me" class="block ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-gray-900 hover:text-gray-700">
                  Wachtwoord vergeten?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Log in
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
        password: ''
      }
    }
  },
  methods: {
    async loginUser () {
      this.$store.dispatch('auth/loginUser', this.form)
    }
  },
  mounted () {
    const token = localStorage.getItem('authentication_token')
    if (token) {
      this.redirectToHome()
    }
  }
}
</script>
