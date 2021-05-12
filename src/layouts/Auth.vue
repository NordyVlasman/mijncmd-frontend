<template>
  <div class="flex min-h-screen bg-white">
    <div class="relative flex-1 hidden w-0 lg:block">
      <img class="absolute inset-0 object-cover w-full h-full" src="https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" alt="">
    </div>
    <div class="flex flex-col justify-center flex-1 w-1/2 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-20">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
