<template>
  <div>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" v-model="form.email" />
      </div>
      <div>
        <label for="password">Wachtwoord</label>
        <input type="password" name="password" v-model="form.password" />
      </div>
      <button type="submit">Inloggen</button>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag'

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
    loginUser () {
      this.$apollo.mutate({
        mutation: gql`
          mutation loginUser($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              token,
              user {
                id,
                email
              }
            }
          }
        `,
        variables: {
          email: this.form.email,
          password: this.form.password
        }
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
