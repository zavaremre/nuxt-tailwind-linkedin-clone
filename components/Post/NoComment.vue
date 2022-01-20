<template>
  <div v-if="!post.comment" class="first-comment w-full bg-f2 rounded-b-lg text-xs py-3 px-4">Buna yorum yapan ilk kişi olun</div>
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
