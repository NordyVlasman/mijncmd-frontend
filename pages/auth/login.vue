<template>
  <div class="mt-8">
    <div class="mt-6 space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div class="mt-1">
          <input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            autocomplete="email"
            required
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
              focus:outline-none
              focus:ring-gray-900
              focus:border-gray-900
              sm:text-sm
            "
          />
        </div>
      </div>

      <div class="space-y-1">
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div class="mt-1">
          <input
            id="password"
            v-model="form.password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
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
              focus:outline-none
              focus:ring-gray-900
              focus:border-gray-900
              sm:text-sm
            "
          />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            class="
              w-4
              h-4
              text-gray-900
              border-gray-300
              rounded
              focus:ring-gray-900
            "
          />
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
        <button
          type="submit"
          class="
            flex
            justify-center
            w-full
            px-4
            py-2
            text-sm
            font-medium
            text-white
            bg-gray-900
            border border-transparent
            rounded-md
            shadow-sm
            hover:bg-gray-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
          "
          @click="login"
        >
          Log in
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import LoginMutation from '@/graphql/login.gql'

export default {
  layout: 'auth',
  middleware: 'guest',
  data() {
    return {
      error: null,
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      await this.$apollo
        .mutate({
          mutation: LoginMutation,
          variables: {
            email: this.form.email,
            password: this.form.password,
          },
        })
        .then(({ data }) => {
          this.$apolloHelpers.onLogin(data.login.accessToken)
          this.$store.commit('auth/setUser', data.login.user)
          this.$router.push('/')
        })
        .catch((err) => {
          this.error = err
        })
    },
  },
}
</script>
