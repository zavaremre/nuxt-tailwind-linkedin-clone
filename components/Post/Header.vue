<template>
  <div class="header flex justify-between items-start w-full p-3">
    <a href="#" class="flex justify-start items-center w-full">
      <img :src="require('~/assets/images/' + post.avatar)" class="h-12 rounded-full mr-3" alt="" />
      <div class="title flex flex-col justify-center items-start">
        <h1 class="font-medium text-sm text-gray-700">{{ post.name }}</h1>
        <div class="subtitle font-light text-xs text-gray-400">{{ post.job }}</div>
        <div class="date flex justify-start items-center font-light text-xs text-gray-400">
          {{ post.humanTime }}
          <img src="~/assets/images/world.svg" class="h-4 ml-2" alt="" />
        </div>
      </div>
    </a>
    <button class="absolute right-0 top-0 flex justify-center items-center rounded-full w-8 h-8 focus:bg-gray-200 mt-2 mr-2">
      <img src="~/assets/images/dots.svg" class="w-5 h-5" alt="" />
    </button>
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
