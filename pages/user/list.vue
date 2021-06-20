<template>
  <div class="mt-1">
    <h1 class="text-2xl text-black font-bold dark:text-gray-300">Contacten</h1>
    <div class="-mx-4 flex flex-wrap">
      <div
        v-for="user in users"
        :key="user.id"
        class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4"
      >
        <div class="bg-white flex-grow rounded-md py-4 px-4">
          <div class="flex items-center">
            <img
              :src="$config.baseURL + user.avatarUrl"
              :alt="user.name"
              class="w-12 h-12 rounded-full"
            />
            <div class="text-darkBackground dark:text-gray-400 ml-4">
              <h3>{{ user.name }}</h3>
              <p class="text-gray-500">{{ user.title }}</p>
            </div>
          </div>
          <div class="py-4">
            <div class="flex justify-between mt-1">
              <div class="flex space-x-2" :if="user.skills">
                <div v-for="skill in user.skills" :key="skill.id">
                  <SkillTag :skill="skill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SkillTag from '~/components/skill/SkillTag'

export default {
  components: { SkillTag },
  middleware: 'authenticated',
  async fetch({ store }) {
    await store.dispatch('user/FETCH_USERS')
  },
  computed: {
    ...mapState({
      users: (state) => state.user.users,
      errors: (state) => state.user.errors,
    }),
  },
}
</script>
