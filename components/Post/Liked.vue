<template>
  <div v-if="post.liked" class="top flex justify-start items-center text-sm px-3 pt-3 border-b border-gray-200 md:border-0 w-full">
    <div class="flex justify-start items-center md:border-b md:border-gray-100 w-full pb-2">
      <a href=""> <img :src="require('~/assets/images/' + post.liked[0].avatar)" class="w-6 rounded-full mr-2" alt="" /></a>
      <a class="flex justify-start items-center text-xs text-gray-800 font-medium mr-1" href="#">{{ post.liked[0].name }}</a>
      <span class="text-xs text-gray-500 font-light"> bunu sevdi</span>
    </div>
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
