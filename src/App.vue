<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import { computed, defineComponent, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { useRoute } from 'vue-router'
import apolloClient from './graphql/client'

export default defineComponent({
  setup () {
    provide(DefaultApolloClient, apolloClient)
    const router = useRoute()

    const logout = () => {
      localStorage.removeItem('authentication_token')
      router.push({
        name: 'Login'
      })
    }

    const layout = computed(() => {
      return (router.meta.layout || 'base-layout')
    })

    return {
      logout,
      layout
    }
  }
})
</script>
