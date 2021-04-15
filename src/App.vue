<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>
<script>
import { defineComponent, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './graphql/client'

export default defineComponent({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  }
})
</script>
