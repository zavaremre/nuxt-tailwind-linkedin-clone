<template>
  <span class="flex flex-col bg-white border shadow-sm border-gray-200 rounded-lg w-80 p-4">
    <div class="flex justify-start items-center w-full mb-3">
      <a href="#" class="flex justify-start items-start">
        <img :src="require('~/assets/images/' + post.user.avatar)" class="h-12 rounded-full mr-3" alt="" />
      </a>
      <div class="title flex flex-col justify-center items-start">
        <h1 class="font-medium text-sm text-gray-700">{{ post.user.name }}</h1>
        <div class="subtitle font-light text-xs text-gray-400">{{ post.user.job }}</div>
      </div>
    </div>
    <div class="info flex justify-start items-center pl-6 mb-3">
      <img src="~/assets/images/network.svg" class="text-gray-400 mr-4" alt="" />
      <div>
        <h6 class="text-xs font-normal text-gray-600">9 ortak bağlantı</h6>
        <h6 class="text-xs font-light text-gray-500">Kate Lima,Elizabeth Olsen</h6>
      </div>
    </div>
    <button class="bg-blue-700 py-1.5 px-4 text-white text-sm rounded-full font-medium flex-1 w-full">Mesaj Gönder</button>
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
