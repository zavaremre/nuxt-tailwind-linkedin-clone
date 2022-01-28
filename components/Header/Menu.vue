<template>
  <div class="menu overflow-x-scroll flex-shrink-1 flex-grow-1 flex justify-start lg:justify-end max-w-full min-w-full basis-full sm:min-w-0 sm:basis-5/6 lg:basis-4/6">
    <div class="flex justify-start lg:justify-end">
      <ul class="flex flex-row flex-shrink-0">
        <li class="group block md:hidden">
          <a href="#" class="flex flex-col justify-center items-center group-last:border-l group-last:border-gray-200 hover:!text-gray-400 text-gray-500 font-normal text-xs pt-2 pb-1 px-4 transition-all duration-200">
            <div class="relative">
              <img src="~/assets/images/search.svg" class="mb-1 h-[19px] w-[19px]" alt="" />
            </div>
          </a>
        </li>
        <li v-for="(menu, index) in menus" :key="index" class="group">
          <a :class="{ 'border-b-2 border-gray-900 !text-gray-800': index === 0 }" class="flex flex-col justify-center items-center group-last:border-l group-last:border-gray-200 hover:!text-gray-400 text-gray-500 font-normal text-xs pt-2 pb-1 px-4 transition-all duration-200" :href="menu.url">
            <div class="relative">
              <img :src="require('~/assets/images/' + menu.icon)" :class="{ 'rounded-full': menu.rounded }" class="mb-1 h-[19px] w-[19px]" alt="" />
              <div v-if="menu.notification" class="absolute top-0 ml-3 -mt-1 flex justify-center items-center w-4 h-4 rounded-full bg-red-600 text-white text-xs">{{ menu.notificationCount }}</div>
            </div>
            <div class="flex justify-center items-center">
              <span class="hidden md:block">{{ menu.title }}</span>
              <img v-if="menu.caret" class="w-3.5 ml-1" :src="require('~/assets/images/caret.svg')" alt="" />
            </div>
          </a>
        </li>
        <span class="text-xs text-gold text-center ml-5">
          Premium’u Ücretsiz <br />
          Olarak Yeniden<br />
          Deneyin</span
        >
      </ul>
    </div>
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
          title: 'İş İlanları',
          url: '#',
          icon: 'bag.svg',
        },
        {
          title: 'Mesajlaşma',
          url: '#',
          icon: 'chat.svg',
        },
        {
          title: 'Bildirimler',
          url: '#',
          icon: 'bell.svg',
          notification: true,
          notificationCount: '4',
        },
        {
          title: 'Ben',
          url: '#',
          icon: 'avatar.jpeg',
          isDropdown: true,
          rounded: true,
          caret: true,
        },
        {
          title: 'İş',
          url: '#',
          icon: 'square-dot.svg',
          isDropdown: true,
          rounded: false,
          caret: true,
        },
      ],
    }
  },
}
</script>
