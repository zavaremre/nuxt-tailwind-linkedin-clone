<template>
  <div class="image">
    <a href="#"><img :src="require('~/assets/images/' + post.image)" :class="{ 'rounded-b-lg': rePost }" class="w-full" alt="" /></a>
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
    rePost: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
}
</script>
