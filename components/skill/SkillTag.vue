<template>
  <span
    :key="skill.id"
    class="
      inline-flex
      items-center
      px-2.5
      py-0.5
      rounded-md
      text-xs
      font-medium
      bg-gray-100
      text-gray-400
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
