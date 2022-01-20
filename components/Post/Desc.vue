<template>
  <div class="desc px-3 pb-3 text-sm font-normal">
    {{ post.desc }}
    <a href="#" class="text-sm text-gray-500 font-light hover:text-blue-800">…daha fazla gör</a>
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
