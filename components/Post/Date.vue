<template>
  <div class="date flex justify-start items-center font-light text-xs text-gray-400">
    {{ post.humanTime }}
    <img src="~/assets/images/world.svg" class="h-4 ml-2" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
