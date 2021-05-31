<template>
  <span
    :key="skill.id"
    class="
      inline-flex
      items-center
      px-2.5
      py-0.5
      rounded-full
      text-xs
      font-medium
      bg-gray-200
      text-gray-800
    "
  >
    {{ skill.name }}
  </span>
</template>
<script>
export default {
  props: {
    skill: {
      required: true,
      type: Object,
    },
  },
}
</script>
