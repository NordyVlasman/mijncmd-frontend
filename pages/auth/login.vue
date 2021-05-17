<template>
  <div>
    <h1>Log in</h1>
    <input v-model="form.email" type="email" class="bg-gray-300" />
    <input v-model="form.password" type="password" class="bg-gray-300" />
    <button @click="login">Submit</button>
  </div>
</template>
<script>
import LoginMutation from '@/graphql/login.gql'

export default {
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
          this.$apolloHelpers.onLogin(data.login.token)
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
