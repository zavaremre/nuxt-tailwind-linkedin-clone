<template>
  <span>
    <Modal button-class="flex justify-center items-center rounded-full" modal-class="bg-white top-56 right-0 left-0 rounded-xl overflow-hidden">
      <template #modal-button>
        <div class="image">
          <img :src="require('~/assets/images/' + post.image)" :class="{ 'rounded-b-lg': rePost }" class="w-full" alt="" />
        </div>
      </template>

      <template #modal-content="{}">
        <div class="flex justify-center">
          <div class="w-[65%] flex flex-col justify-center items-center bg-[#1d2226]">
            <img :src="require('~/assets/images/' + post.image)" :class="{ 'rounded-b-lg': rePost }" class="w-full" alt="" />
          </div>
          <div class="flex-1 overflow-y-scroll">
            <!-- eslint-disable-next-line -->
            <PostHeader :post="post" />
            <PostDesc :post="post" />
            <div class="px-4">
              <PostReactions :post="post" />
            </div>
            <PostButtons :post="post" />
            <PostCommentNewComment :post="post" @add-comment="addComment" />
            <span v-if="post.comment">
              <PostCommentFilterComments :post="post" />
              <PostCommentComments :post="post" :comments="post.comments" />
              <div class="pb-3"><PostCommentReply :post="post" :comments="post.comments" /></div>
            </span>
          </div>
        </div>
      </template>
    </Modal>
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

    rePost: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
}
</script>
