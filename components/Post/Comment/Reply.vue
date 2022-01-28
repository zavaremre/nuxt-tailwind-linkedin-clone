<template>
  <span>
    <span v-for="(item, index) in comments" :key="index">
      <div v-for="(comment, key) in item.reply" :key="key" class="comment-loop flex justify-between items-start w-full px-3 pl-16 pr-3">
        <div class="avatar mr-3 flex-shrink-0">
          <a href="#">
            <img :src="require('~/assets/images/' + comment.user.avatar)" class="rounded-full border-2 border-white w-8 h-8" />
          </a>
        </div>
        <div class="flex flex-col w-full">
          <div class="content flex flex-col justify-between items-center w-full bg-gray-100 rounded-lg rounded-tl-none px-3 py-2">
            <div class="flex justify-between items-center w-full">
              <div class="flex flex-col justify-start items-center">
                <strong class="text-sm font-medium text-gray-700">{{ comment.user.name }} <span class="font-light text-gray-400">• 1</span> </strong>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-light text-gray-500 text-xs mr-2">{{ comment.humanTime }}</span>
                <button class="flex justify-center items-center rounded-full text-xs text-muted font-medium">
                  <img src="~/assets/images/dots.svg" class="w-4 h-4 text-muted" />
                </button>
              </div>
            </div>
            <div class="desc block truncate w-full text-xs text-gray-500 mb-3">{{ comment.user.job }}</div>
            <div class="comment-text flex flex-col text-sm font-normal text-gray-600 text-left w-full">
              <!-- eslint-disable -->
              <p v-html="comment.comment"></p>
              <!-- eslint-enable -->
              <a href="#" class="text-blue-600 text-xs font-medium mt-2">Çeviriyi gör</a>
            </div>
          </div>
          <div class="actions flex justify-start items-center w-full">
            <button class="like flex justify-start items-center text-xs text-gray-500 px-3">Beğen . <img src="~/assets/images/liked.svg" class="w-4 h-4 ml-2 mr-1" alt="" /> 1</button>
            |
            <button class="reply flex justify-start items-center text-xs text-gray-500 px-3">Yanıtla <span class="text-gray-600 ml-3">1 Yanıt</span></button>
          </div>
        </div>
      </div>
    </span>
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
    comments: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
