<template>
  <div class="header flex justify-between items-start w-full p-3">
    <PostUser :post="post" />
    <Dropdown button-class="absolute right-0 top-0 flex justify-center items-center rounded-full w-8 h-8 focus:bg-gray-200 hover:bg-gray-200 mt-2 mr-2" dropdown-class="bg-white border border-gray-200 right-0 top-0 shadow-sm mt-12 rounded-lg w-[355px]">
      <template #button-content>
        <img src="~/assets/images/dots.svg" class="w-5 h-5" alt="" />
      </template>

      <template #content="{ dropdownToggle }">
        <div>
          <ul>
            <li v-for="(item, index) in dropdown" :key="index">
              <button class="flex justify-start items-center w-full px-4 py-3 text-left hover:bg-gray-200" @click="item.func(dropdownToggle)">
                <div class="image w-6 h-6 mr-3">
                  <img class="h-6" :src="require('~/assets/images/dropdown/' + item.icon)" alt="" />
                </div>
                <div class="title flex flex-col justify-center items-start w-full">
                  <strong class="font-medium text-sm text-gray-700">{{ item.title }}</strong>
                  <small class="text-xs text-gray-500">{{ item.desc }}</small>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </template>
    </Dropdown>
  </div>
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
      dropdown: [
        {
          icon: 'flag.svg',
          title: 'Kaydet',
          desc: ' Daha sonrası için kaydet',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('kaydet')
          },
        },
        {
          icon: 'chain.svg',
          title: 'Yayınlamak için linki kopyala',
          desc: '',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('Kopyala')
          },
        },
        {
          icon: 'cancel.svg',
          title: 'Gözde Uykun adlı kullanıcıyı takip etmeyi durdur',
          desc: 'Gözde ile bağlantıda kalın fakat akışınızda gönderilerini görmeyin',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('kaydet')
          },
        },
        {
          icon: 'unfollow.svg',
          title: 'Gözde Uykun ile bağlantıyı kaldırın',
          desc: 'Gözde Uykun bildirim almayacak',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('kaydet')
          },
        },
        {
          icon: 'mute.svg',
          title: 'Özlem Akçakavak adlı kullanıcıyı sessize al',
          desc: 'Akışınızda Özlem adlı kişinin gönderilerini görmeyi durdurun',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('kaydet')
          },
        },
        {
          icon: 'noview.svg',
          title: ' Bunları görmek istemiyorum',
          desc: ' Bu gönderiyi neden görmek istemediğinizi bize bildirin',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('kaydet')
          },
        },
        {
          icon: 'flag2.svg',
          title: 'Bu yayını rapor et',
          desc: 'Bu yayın rahatsız edici veya hesap ele geçirilmiş',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('kaydet')
          },
        },
        {
          icon: 'view.svg',
          title: 'Bu gönderiyi kimler görebilir?',
          desc: ' LinkedIn‘de olan veya olmayan herkese görünür',
          url: '#',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
            console.log('kaydet')
          },
        },
      ],
    }
  },
}
</script>
