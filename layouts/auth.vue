<template>
  <div class="flex min-h-screen bg-white">
    <div class="relative flex-1 hidden w-0 lg:block">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
        alt=""
      />
    </div>
    <div
      class="
        flex flex-col
        justify-center
        flex-1
        w-1/2
        px-4
        py-12
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-20
      "
    >
      <div class="w-full max-w-sm mx-auto lg:w-96">
        <div>
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Log in om te beginnen
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Of
            <nuxt-link
              to="/auth/register"
              class="font-medium text-gray-900 hover:text-gray-700"
            >
              maak een account aan
            </nuxt-link>
          </p>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
