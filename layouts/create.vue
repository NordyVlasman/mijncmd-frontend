<template>
  <div class="flex h-screen overflow-hidden bg-gray-100 dark:bg-darkBackground">
    <div class="hidden md:flex md:flex-shrink-0">
      <navigation />
    </div>
    <main
      class="flex-1 px-6 overflow-y-auto md:px-10 mt-8x2 focus:outline-none"
    >
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/navigation/navigation'

export default {
  components: { Navigation },
}
</script>
