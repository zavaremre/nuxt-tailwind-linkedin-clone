<template>
  <span>
    <aside v-for="post in posts" :key="post.id" class="post relative md:border md:border-gray-200 bg-white md:rounded-lg w-full mb-2">
      <PostLiked :post="post" />
      <div class="post-content">
        <PostHeader :post="post" />
        <PostDesc :post="post" />
        <span v-if="!post.repostData"> <PostImage :post="post" /></span>
        <div v-if="post.repostData" class="repost-wrapper px-4 pb-4">
          <div class="repost-container border border-gray-200 bg-white rounded-lg">
            <PostHeader :post="post.repostData[0]" />
            <PostDesc :post="post.repostData[0]" />
            <PostImage :post="post.repostData[0]" :re-post="post.repost" />
          </div>
        </div>
      </div>
      <div v-if="post.isAds" class="flex justify-between items-center bg-blue-50 p-3 font-medium text-sm w-full">
        <div class="w-3/4">{{ post.adsContent }}</div>
        <button class="flex-1 border border-blue-800 rounded-xl text-blue-800 text-base font-medium whitespace-nowrap px-3">
          Daha fazla bilgi <br />
          edin
        </button>
      </div>

      <div class="px-4 md:border-0 border-b border-t border-gray-200">
        <PostReactions :post="post" />
      </div>
      <PostButtons :post="post" />
      <span class="hidden md:block">
        <PostCommentNewComment :post="post" @add-comment="addComment" />
        <span v-if="post.comment">
          <PostCommentFilterComments :post="post" />
          <PostCommentComments :post="post" :comments="post.comments" />
          <div class="pb-3"><PostCommentReply :post="post" :comments="post.comments" /></div>
        </span>
      </span>
    </aside>
  </span>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          user: {
            name: 'Emre Zavar',
            job: 'Front-end developer',
            avatar: 'avatar.jpeg',
          },
          humanTime: '6 gün önce • Düzenlendi',
          image: 'post.jpeg',
          desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
          liked: [
            {
              name: 'Kate Lima',
              avatar: 'a3.jpeg',
            },
          ],
          comment: 33,
          comments: [
            {
              id: 2,
              user: {
                name: 'Emre Zavar',
                job: 'Front-end developer',
                avatar: 'avatar.jpeg',
              },
              humanTime: '6g',
              comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo, harum, iusto optio accusamus ratione at qui pariatur sed, ab corrupti sapiente maxime repellendus <a href="#" class="text-blue-600 font-medium mt-2">test@gmail.com</a> neque officiis consequatur tempore? Nesciunt, nulla.',
            },
          ],
          repost: false,
        },
        {
          id: 3,
          user: {
            name: 'Kate Lima',
            job: 'Photographer',
            avatar: 'a3.jpeg',
          },
          humanTime: '6 gün önce • Düzenlendi',
          image: 'post.jpeg',
          desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
          comment: 33,
          repost: true,
          comments: [
            {
              id: 4,
              user: {
                name: 'Emre Zavar',
                job: 'Front-end developer',
                avatar: 'avatar.jpeg',
              },
              humanTime: '6g',
              comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo, harum, iusto optio accusamus ratione at qui pariatur sed, ab corrupti sapiente maxime repellendus <a href="#" class="text-blue-600 font-medium mt-2">test@gmail.com</a> neque officiis consequatur tempore? Nesciunt, nulla.',
              reply: [
                {
                  id: 5,
                  user: {
                    name: 'Elizabeth Olsen',
                    job: 'Product Manager',
                    avatar: 'a1.jpeg',
                  },
                  humanTime: '1s',
                  comment: 'thank you 🐈‍⬛',
                },
              ],
            },
          ],
          repostData: [
            {
              id: 6,
              user: {
                name: 'Elizabeth Olsen',
                job: 'Product Manager',
                avatar: 'a1.jpeg',
              },
              humanTime: '16 gün önce • Düzenlendi',
              image: 'post3.png',
              desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
            },
          ],
        },
        {
          id: 7,
          user: {
            name: 'Kate Lima',
            job: 'Photographer',
            avatar: 'a3.jpeg',
          },
          humanTime: '6 gün önce • Düzenlendi',
          image: 'post.jpeg',
          desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
          comment: null,
          repost: false,
          comments: [
            {
              id: 8,
              user: {
                name: 'Emre Zavar',
                job: 'Front-end developer',
                avatar: 'avatar.jpeg',
              },
              humanTime: '6g',
              comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo, harum, iusto optio accusamus ratione at qui pariatur sed, ab corrupti sapiente maxime repellendus <a href="#" class="text-blue-600 font-medium mt-2">test@gmail.com</a> neque officiis consequatur tempore? Nesciunt, nulla.',
              reply: null,
            },
          ],
          repostData: null,
        },
        {
          id: 7,
          user: {
            name: 'Intel',
            job: 'Intel inc.      ',
            avatar: 'intel.jpeg',
          },
          humanTime: '6 gün önce • Düzenlendi',
          image: 'post.jpeg',
          desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
          comment: null,
          repost: false,
          comments: [
            {
              id: 8,
              user: {
                name: 'Emre Zavar',
                job: 'Front-end developer',
                avatar: 'avatar.jpeg',
              },
              humanTime: '6g',
              comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo, harum, iusto optio accusamus ratione at qui pariatur sed, ab corrupti sapiente maxime repellendus <a href="#" class="text-blue-600 font-medium mt-2">test@gmail.com</a> neque officiis consequatur tempore? Nesciunt, nulla.',
              reply: null,
            },
          ],
          isAds: true,
          adsContent: 'orem ipsum dolor sit amet consectetur adipisicing elit. Commodi q',
          repostData: null,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('global', ['loginUser']),
  },
  mutations: {
    loginUser: (state, posts) => {
      this.loginUser.push(this.posts)
    },
  },
  methods: {
    addComment(postId, message) {
      const post = this.posts.find((p) => p.id === postId)
      if (post) {
        post.comments = post.comments || []
        post.comments.push({
          id: Math.random(),
          user: {
            name: 'Emre Zavar',
            job: 'Front-end developer',
            avatar: 'avatar.jpeg',
          },
          humanTime: '6g',
          comment: message,
        })
      }
    },
  },
}
</script>
