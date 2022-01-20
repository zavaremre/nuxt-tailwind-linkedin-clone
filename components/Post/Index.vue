<template>
  <span>
    <aside v-for="post in posts" :key="post.id" class="post relative border border-gray-200 bg-white rounded-lg w-full mb-2">
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
      <div class="px-4">
        <PostReactions :post="post" />
      </div>
      <PostButtons :post="post" />
      <PostNoComment :post="post" />
    </aside>
  </span>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          avatar: 'avatar2.jpeg',
          name: 'Ammy Lee',
          job: 'Front-end developer',
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
          repost: false,
        },
        {
          id: 1,
          avatar: 'a3.jpeg',
          name: 'Kate Lima',
          job: 'Photographer',
          humanTime: '6 gün önce • Düzenlendi',
          image: 'post.jpeg',
          desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
          comment: 33,
          repost: true,
          repostData: [
            {
              id: 1,
              avatar: 'a1.jpeg',
              name: 'Elizabeth Olsen',
              job: 'Product Manager',
              humanTime: '16 gün önce • Düzenlendi',
              image: 'post3.png',
              desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
            },
          ],
        },
        {
          id: 2,
          avatar: 'a1.jpeg',
          name: 'Penelope Smith',
          job: 'Front-end developer',
          humanTime: '6 gün önce • Düzenlendi',
          image: 'post2.jpeg',
          desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat eveniet labore corrupti incidunt itaque quod odit, minima consequatur dolor est nostrum voluptatem',
        },
      ],
    }
  },
}
</script>
