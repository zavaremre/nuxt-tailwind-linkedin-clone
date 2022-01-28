<template>
  <span class="flex justify-start items-center relative">
    <div class="group">
      <a href="#" class="relative flex justify-start items-center">
        <img :src="require('~/assets/images/' + post.user.avatar)" :class="{ 'rounded-0': post.isAds, 'rounded-full': !post.isAds }" class="h-12 mr-3" alt="" />
        <div v-if="!post.isAds" class="is-online border-2 border-white rounded-full w-4 h-4 bg-green-700 absolute right-3.5 top-9"></div>
      </a>
      <div class="absolute -top-10 -left-[324px] pr-20 z-10 transition-all duration-400 translate-y-40 scale-0 opacity-0 group-hover:!-translate-y-0 group-hover:scale-100 group-hover:opacity-100">
        <PostHoverCard :post="post" />
      </div>
    </div>
    <div class="title flex flex-col justify-center items-start">
      <a href="#" class="relative flex justify-start items-center w-full">
        <h1 class="font-medium text-sm text-gray-700">{{ post.user.name }}</h1>
      </a>
      <div class="subtitle font-light text-xs text-gray-400">{{ post.user.job }}</div>
      <PostDate :post="post" />
    </div>
  </span>
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
