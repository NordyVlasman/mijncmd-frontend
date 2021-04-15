<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <form @submit.prevent="loginUser">
      <input type="text" v-model='form.email'>
      <input type="password" v-model='form.password'>
      <button type="submit">Verstuur</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
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
      this.$store.dispatch('loginUser', {
        email: this.form.email,
        password: this.form.password
      })
    }
  }
}
</script>
