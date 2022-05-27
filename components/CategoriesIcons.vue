<template>
  <li class="flex flex-col items-center w-full">
    <div class="flex justify-center items-center border border-gray-100 dark:border-black-800 overflow-hidden rounded-full mb-3">
      <router-link :to="categorie.url" class="bg-white dark:bg-black-900 block group">
        <img :src="`${require('~/assets/images/categories/' + categorie.image)}`" class="transition-all duration-200 dark:group-hover:invert-0 dark:invert group-hover:invert group-hover:bg-white group-hover:scale-125 group-hover:-translate-y-2 sm:p-3 md:p-3 lg:p-6 w-full h-full object-cover rounded-2xl" />
      </router-link>
    </div>

    <h1 class="flex items-center justify-center text-xs font-medium overflow-hidden overflow-ellipsis">
      {{ categorie.title }}
    </h1>
  </li>
</template>

<script>
export default {
  props: {
    categorie: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
