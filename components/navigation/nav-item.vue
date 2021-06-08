<template>
  <nuxt-link
    class="group border-l-2 py-2 px-6 flex items-center text-sm font-light"
    :class="active(vm) ? activeClass : inactiveClass"
    :to="item.path || '#'"
    @click.native="clicked(item, vm)"
  >
    <component
      :is="item.icon"
      :class="[
        active(vm)
          ? 'text-gray-900 dark:text-white'
          : 'text-gray-400 group-hover:text-gray-500',
        'mr-3 h-6 w-6',
      ]"
      aria-hidden="true"
    />
    <span
      v-if="showLabel"
      class="ml-2"
      :class="active(vm) ? 'text-gray-900 dark:text-white' : 'text-gray-400'"
      >{{ item.caption }}</span
    >
  </nuxt-link>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    showLabel: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {
        return {
          path: null,
          caption: null,
          icon: '',
          exact: false,
        }
      },
    },
  },
  data() {
    return {
      vm: this,
      activeClass: '',
      activeIconClass: '',
      inactiveClass:
        'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-darkBackground',
    }
  },
  methods: {
    active: (vm, current = null) => {
      const item = current || vm.item
      const path = item.path ? item.path.replace(/\/$/, '') : null
      const currentPath = vm.$route.path.replace(/\/$/, '')
      const exact = item.exact === undefined ? false : item.exact
      return exact
        ? currentPath === path
        : currentPath.indexOf(path) === 0 &&
            vm.inArray(currentPath.substring(path.length, path.length + 1), [
              '',
              '/',
              '?',
              '#',
            ])
    },
    clicked: (item, vm) => {
      if (item.children !== undefined) {
        vm.open = !vm.open
      } else {
        vm.$emit('click')
      }
    },
  },
}
</script>
