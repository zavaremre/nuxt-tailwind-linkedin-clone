<template>
  <span>
    <div v-if="showCommentBox === true || post.comment" class="comment-box px-3 pb-3">
      <div class="commtent-line flex justify-between items-center w-full">
        <img src="~/assets/images/avatar.jpeg" class="rounded-full border-2 border-white w-10" />
        <div class="relative w-full">
          <input v-model="commentContent" type="text" placeholder="Yorum Ekle..." class="border border-gray-400 rounded-full px-4 py-2 w-full focus:border-gray-400 focus:outline-2 focus:outline-gray-400" @keypress.enter="send" />
          <div class="buttons absolute top-px mt-px right-2 flex justify-end items-center">
            <button class="flex justify-center items-center rounded-full w-9 h-9 hover:bg-gray-200 mr-3">
              <img src="~/assets/images/smile.svg" class="w-5 h-5" />
            </button>
            <button class="flex justify-center items-center rounded-full w-9 h-9 hover:bg-gray-200">
              <img src="~/assets/images/comment-photo.svg" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <span> <button v-if="!post.comment && showCommentBox === false" class="first-comment w-full bg-f2 rounded-b-lg text-xs py-3 px-4 text-left" @click="showCommentBox = !showCommentBox">Buna yorum yapan ilk kişi olun</button></span>
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
  data() {
    return {
      commentContent: '',
      showCommentBox: false,
    }
  },
  methods: {
    send() {
      this.$emit('add-comment', this.post.id, this.commentContent)
      this.commentContent = ''
    },
  },
}
</script>
