<template>
  <div class="actions-bar flex justify-between items-center py-3 md:border-b md:border-gray-200 w-full">
    <div class="flex justify-start items-center">
      <img src="~/assets/images/liked.svg" class="h-4" alt="" />
      <img src="~/assets/images/slap.svg" class="h-4 -ml-1" alt="" />
      <img src="~/assets/images/heart.svg" class="h-4 -ml-1" alt="" />
      <img src="~/assets/images/hmm.svg" class="h-4 -ml-1" alt="" />
      <h6 class="text-xs text-gray-400 ml-3">Emre ZAVAR ve 199 diğer kişi</h6>
    </div>
    <h6 v-if="post.comment" class="text-xs text-gray-400 ml-3">{{ post.comment }} Yorum</h6>
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
