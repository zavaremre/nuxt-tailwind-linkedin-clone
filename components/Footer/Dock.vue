<template>
  <div class="block md:hidden dock fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-light-400">
    <ul class="flex flex-row justify-between items-center flex-shrink-0">
      <li v-for="(menu, index) in menus" :key="index">
        <a class="flex flex-col justify-between items-center text-gray-500 font-normal text-xs pt-2 pb-1 px-3 transition-all duration-200" :href="menu.url">
          <img :src="require('~/assets/images/' + menu.icon)" class="mb-1 w-6 h-6 opacity-70" alt="" />
          <div v-if="menu.notification" class="absolute top-0 ml-3.5 mt-1 flex justify-center items-center w-4 h-4 rounded-full bg-red-600 text-white text-xs">{{ menu.notificationCount }}</div>
          <span class="text[11px] whitespace-nowrap">{{ menu.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          title: 'Ana Sayfa',
          url: '#',
          icon: 'home.svg',
        },
        {
          title: 'Ağım',
          url: '#',
          icon: 'persons.svg',
          notification: true,
          notificationCount: '1',
        },

        {
          title: 'Gönder',
          url: '#',
          icon: 'plus-border.svg',
        },
        {
          title: 'Bildirimler',
          url: '#',
          icon: 'bell.svg',
          notification: true,
          notificationCount: '4',
        },
        {
          title: 'İş İlanları',
          url: '#',
          icon: 'bag.svg',
        },
      ],
    }
  },
}
</script>
