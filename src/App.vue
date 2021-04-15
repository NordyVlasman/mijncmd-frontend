<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="logout">Log out</button>
  </div>
  <router-view/>
</template>
<script>
import { defineComponent, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './graphql/client'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    provide(DefaultApolloClient, apolloClient)

    const router = useRouter()

    const logout = () => {
      localStorage.removeItem('authentication_token')
      router.push({
        name: 'Login'
      })
    }

    return {
      logout
    }
  }
})
</script>
