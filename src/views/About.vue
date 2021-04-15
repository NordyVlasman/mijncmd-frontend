<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      {{ currentUser }}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },
  mounted () {
    this.$store.dispatch('getUser')
  }
}
</script>
