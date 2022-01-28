<template>
  <div class="post relative border border-gray-200 bg-white rounded-lg w-full mb-2">
    <div class="top flex justify-start items-center text-sm px-4 pt-3 w-full">
      <div class="flex justify-start items-center border-b border-gray-100 w-full pb-2">
        <h6 class="text-xs text-gray-500 font-light">Sizin için tavsiye edilen işler</h6>
      </div>
    </div>
    <section class="relative p-4">
      <button class="absolute top-40 left-0 flex justify-center items-center bg-black bg-opacity-60 rounded-full w-10 h-10 z-10" @click="snapLeft(-1)">
        <img src="~/assets/images/chevron-left.svg" class="h-6 w-6" alt="" />
      </button>
      <div ref="slider" class="relative w-full flex gap-2 snap-x overflow-x-auto no-scrollbar scroll-smooth">
        <div v-for="(item, index) in items" :key="index" class="snap-center shrink-0">
          <div class="post relative flex flex-col justify-between items-start border border-gray-200 overflow-hidden bg-white rounded-lg mb-2 w-56 h-full">
            <div class="w-full">
              <div class="header h-12 overflow-hidden">
                <a href="#"><img :src="require('~/assets/images/advice/' + item.headerLogo)" class="w-full h-full object-cover" alt="" /></a>
              </div>
              <div class="logo flex justify-start items-center -mt-5 mb-2 px-4">
                <a href="#"><img :src="require('~/assets/images/advice/' + item.logo)" class="border border-gray-100 rounded w-16 h-16" alt="" /></a>
              </div>
            </div>
            <div class="flex flex-col justify-between items-start h-full w-full">
              <div class="content px-4 mb-10 w-full">
                <div class="title">
                  <h1 class="text-lg font-medium text-gray-800">{{ item.job }}</h1>
                  <div class="overflow-hidden">
                    <h2 class="text-md font-medium text-gray-800 mb-2 truncate w-11/12">{{ item.corp }}</h2>
                  </div>
                  <h3 class="text-xs font-light text-gray-500">{{ item.country }}</h3>
                </div>
              </div>
              <div class="px-4 pb-4">
                <div class="bg-gray-200 h-px w-10 mb-2"></div>
                <h3 class="text-xs font-light text-gray-500">{{ item.time }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="absolute top-40 right-0 flex justify-center items-center bg-black bg-opacity-60 rounded-full w-10 h-10 z-10" @click="snapRight(1)">
        <img src="~/assets/images/chevron-right.svg" class="h-6 w-6" alt="" />
      </button>
    </section>
    <button class="text-blue-600 font-medium text-base border-t border-gray-200 px-3 py-2 w-full">Daha fazla göster</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          corp: 'Trendyol Group',
          job: 'Frontend Developer - Remote',
          logo: 'trendyol-logo.jpeg',
          headerLogo: 'trendyol-header.jpeg',
          country: 'Türkiye',
          time: '4 hafta önce',
        },
        {
          corp: 'Hepsiburada',
          job: 'Frontend Developer',
          logo: 'hepsiburada-logo.jpeg',
          headerLogo: 'hepsiburada-header.jpeg',
          country: 'Türkiye',
          time: '4 hafta önce',
        },
        {
          corp: 'LC Waikiki',
          job: 'Frontend Developer',
          logo: 'lcw-logo.jpeg',
          headerLogo: 'lcw-header.jpeg',
          country: 'Türkiye',
          time: '4 hafta önce',
        },
        {
          corp: 'Bayzat',
          job: 'Frontend Developer',
          logo: 'bayzet-header.jpeg',
          headerLogo: 'bayzat-header.jpeg',
          country: 'Türkiye',
          time: '4 hafta önce',
        },
        {
          corp: 'KONNEKA Bilgi ve İletişim Teknolojileri',
          job: 'Frontend Developer',
          logo: 'konneka-logo.jpeg',
          headerLogo: 'konneka-header.jpeg',
          country: 'Türkiye',
          time: '4 hafta önce',
        },
      ],
    }
  },
  methods: {
    snapRight(delta) {
      const carousel = this.$refs.slider
      const width = 225
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0)
    },
    snapLeft(delta) {
      const carousel = this.$refs.slider
      const width = 225
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0)
    },
  },
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
