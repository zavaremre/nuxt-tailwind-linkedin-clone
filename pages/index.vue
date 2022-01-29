<template>
  <section class="container">
    <div class="flex flex-col md:flex-row flex-wrap md:gap-x-5">
      <div class="hidden md:flex basis-full max-w-full md:basis-1/5 lg:basis-1/5 max-w-1/5 min-w-0">
        <div class="sidebar h-full w-full">
          <div class="card border border-gray-200 rounded-lg bg-white overflow-hidden mb-3">
            <div class="header h-14 bg-cover bg-[url('~/assets/images/profile-bg.svg')]"></div>
            <div class="flex flex-col justify-center items-center w-full border-b border-gray-100">
              <img src="~/assets/images/avatar.jpeg" class="-mt-9 rounded-full border-2 border-white w-16" />
              <div class="title flex flex-col justify-center items-center py-5">
                <a href="#" class="font-semibold text-base mb-1">Emre Zavar</a>
                <small class="text-gray-400 text-xs">Front End Developer </small>
              </div>
            </div>
            <div class="border-b border-gray-100 py-3">
              <ul>
                <li>
                  <a href="#" class="flex justify-between items-center text-xs text-gray-500 font-medium px-3 py-1 hover:bg-gray-200"
                    >Profilinizi kimler görüntüledi
                    <span class="text-blue-600">45</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex justify-between items-center text-xs text-gray-500 font-medium px-3 py-1 hover:bg-gray-200"
                    >Yayınınız için görüntüleme
                    <span class="text-blue-600">131</span>
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" class="block border-b border-gray-100 py-3 px-3 hover:bg-gray-200">
              <span class="text-xs text-gray-500 font-light">Özel araç ve içgörülere erişin</span>
              <strong class="flex justify-start items-center font-medium text-gray-800 text-xs">
                <img src="~/assets/images/pre.svg" class="w-2.5 mr-2" alt="" />
                Premium’u Ücretsiz Olarak Yeniden Deneyin
              </strong>
            </a>
            <a href="#" class="flex justify-start items-center text-gray-800 text-xs font-medium py-3 px-3 hover:bg-gray-200"> <img src="~/assets/images/feed.svg" class="w-2.5 mr-2" alt="" /> Ögelerim </a>
          </div>
          <div class="sticky top-0 card border border-gray-200 rounded-lg bg-white overflow-hidden">
            <h6 class="text-xs font-light px-3 mt-4 mb-2">En Yeni</h6>
            <ul>
              <li v-for="(menu, index) in menus" :key="index">
                <a class="flex justify-start items-center text-xs px-3 text-gray-500 font-medium w-full p-2 hover:bg-gray-200" href="#">
                  <img :src="require('~/assets/images/' + menu.icon)" class="w-3 mr-2" alt="" />
                  <span class="block whitespace-nowrap text-ellipsis overflow-hidden">{{ menu.title }}</span>
                </a>
              </li>
            </ul>
            <h6 class="text-xs font-medium px-3 mt-4 mb-2 text-blue-600">Gruplar</h6>
            <ul class="mb-4">
              <li v-for="(menu, index) in menus2" :key="index">
                <a class="flex justify-start items-center text-xs px-3 text-gray-500 font-medium w-full p-2 hover:bg-gray-200" href="#">
                  <img :src="require('~/assets/images/' + menu.icon)" class="w-3 mr-2" alt="" />
                  <span class="block whitespace-nowrap text-ellipsis overflow-hidden">{{ menu.title }}</span>
                </a>
              </li>
            </ul>
            <h6 class="text-xs font-medium px-3 mb-2 text-blue-600">Etkinlikler</h6>
            <h6 class="text-xs font-medium px-3 mb-2 text-blue-600">Takip edilen hashtagler</h6>
            <a href="#" class="block text-sm font-medium px-3 text-center text-gray-500 hover:bg-gray-200 p-3 border-t border-gray-200">Daha fazla keşfet</a>
          </div>
        </div>
      </div>

      <div class="flex-col basis-full max-w-full md:basis-1/2 md:max-w-1/2 min-w-0">
        <div class="hidden md:flex launchpad flex-col justify-center items-center box border border-gray-200 bg-white rounded-lg mb-2 p-5">
          <img src="~/assets/images/lanchpad.svg" class="w-32 h-32 mb-5" alt="" />
          <h1 class="text-xl text-gray-800 font-normal text-center mb-2">Emre Zavar merhaba, işe alım yapıyor musunuz?</h1>
          <p class="text-lg text-gray-500 text-center">Hızlı bir şekilde harika bir iş alım yapmanın ücretsiz ve kolay yöntemlerini keşfedin.</p>
        </div>
        <span class="hidden md:block">
          <Status />
          <Sort />
          <Advice />
        </span>
        <div><Post /></div>
      </div>
      <div class="hidden md:block flex-1">
        <div class="sidebar mb-4 h-full">
          <div class="box border border-gray-200 bg-white rounded-lg mb-2">
            <h4 class="flex justify-between items-center font-medium text-gray-800 text-lg px-3 mt-2 mb-3">
              Akışınıza ekleyin
              <img src="~/assets/images/info.svg" class="h-3" alt="" />
            </h4>
            <div class="flex justify-start items-start w-full px-3 pb-2">
              <img src="~/assets/images/a1.jpeg" class="h-12 mr-2 rounded-full" alt="" />
              <div class="flex flex-col justify-center items-start">
                <h4 class="font-medium text-gray-800 text-sm">Web Developer</h4>
                <h6 class="text-xs font-light text-gray-400 mb-2">Şirket • Program Geliştirme</h6>
                <button class="flex justify-center items-center rounded-full outline outline-1 outline-gray-600 text-md text-gray-500 font-medium py-1 px-4 hover:outline-2 hover:-outline-offset-2 hover:bg-gray-100 transition-all duration-100">
                  <img src="~/assets/images/plus.svg" class="h-4 mr-2 rounded-full" alt="" />
                  Takip Et
                </button>
              </div>
            </div>
            <div class="flex justify-start items-start w-full px-3 pb-2">
              <img src="~/assets/images/a2.jpeg" class="h-12 mr-2 rounded-full" alt="" />
              <div class="flex flex-col justify-center items-start">
                <h4 class="font-medium text-gray-800 text-sm">Brad Pitt</h4>
                <h6 class="text-xs font-light text-gray-400 mb-2">Bilgi Yayıcı.</h6>
                <button class="flex justify-center items-center rounded-full outline outline-1 outline-gray-600 text-md text-gray-500 font-medium py-1 px-4 hover:outline-2 hover:-outline-offset-2 hover:bg-gray-100 transition-all duration-100">
                  <img src="~/assets/images/plus.svg" class="h-4 mr-2 rounded-full" alt="" />
                  Takip Et
                </button>
              </div>
            </div>
            <div class="flex justify-start items-start w-full px-3 pb-2">
              <img src="~/assets/images/a3.jpeg" class="h-12 mr-2 rounded-full" alt="" />
              <div class="flex flex-col justify-center items-start">
                <h4 class="font-medium text-gray-800 text-sm">Angelina Jolie</h4>
                <h6 class="text-xs font-light text-gray-400 mb-2">Şirket • Internet</h6>
                <button class="flex justify-center items-center rounded-full outline outline-1 outline-gray-600 text-md text-gray-500 font-medium py-1 px-4 hover:outline-2 hover:-outline-offset-2 hover:bg-gray-100 transition-all duration-100">
                  <img src="~/assets/images/plus.svg" class="h-4 mr-2 rounded-full" alt="" />
                  Takip Et
                </button>
              </div>
            </div>
            <div class="flex justify-start items-start w-full px-3 pb-2">
              <img src="~/assets/images/a4.jpeg" class="h-12 mr-2 rounded-full" alt="" />
              <div class="flex flex-col justify-center items-start">
                <h4 class="font-medium text-gray-800 text-sm">Taylor Swift</h4>
                <h6 class="text-xs font-light text-gray-400 mb-2">Product Manager</h6>
                <button class="flex justify-center items-center rounded-full outline outline-1 outline-gray-600 text-md text-gray-500 font-medium py-1 px-4 hover:outline-2 hover:-outline-offset-2 hover:bg-gray-100 transition-all duration-100">
                  <img src="~/assets/images/plus.svg" class="h-4 mr-2 rounded-full" alt="" />
                  Takip Et
                </button>
              </div>
            </div>
            <div class="px-3 pb-3">
              <button class="inline-flex justify-start items-center text-gray-500 font-semibold rounded-lg px-2 py-1 hover:bg-gray-100">
                Tüm tavsiyeleri görüntüle
                <img class="h-2.5 ml-3" src="~/assets/images/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="sticky top-0">
            <div class="box border border-gray-200 bg-white rounded-lg overflow-hidden mb-4">
              <img src="~/assets/images/jobs.jpg" class="w-full" alt="" />
            </div>
            <footer class="footer">
              <nav>
                <ul class="flex flex-wrap justify-center items-center gap-x-4">
                  <li v-for="(item, index) in footerMenu" :key="index">
                    <a :href="item.url" class="flex justify-center items-center text-xs text-muted font-light mb-3 hover:text-blue-800 hover:underline hover:underline-offset-1"
                      >{{ item.title }}
                      <span v-if="item.dropdown">
                        <img class="w-3.5 ml-1" :src="require('~/assets/images/chevron-bottom.svg')" alt="" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <span class="flex justify-center items-center text-gray-900 text-xs"> <img :src="require('~/assets/images/logo-long.svg')" class="w-14 mr-2" alt="" /> LinkedIn Corporation © 2022</span>
                  </li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: 'Webrazzi',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'React Developers - ReactJS & React Native Professional Development Mastermind',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'Vue.js developers group',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: '#WordPress Experts',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'JavaScript',
          icon: 'list.svg',
          url: '#',
        },
      ],
      menus2: [
        {
          title: 'Webrazzi',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'React Developers - ReactJS & React Native Professional Development Mastermind',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'Vue.js developers group',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: '#WordPress Experts',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'JavaScript',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'Yaratici Fikirler | Creative Ideas',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'User Experience (UX) / User Interface (UI) / Interaction Design (IxD) / IA / Discussions /Jobs',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'WordPress',
          icon: 'list.svg',
          url: '#',
        },
        {
          title: 'Frontend Developer and We',
          icon: 'list.svg',
          url: '#',
        },
      ],
      footerMenu: [
        {
          title: 'Hakkında',
          url: '#',
        },
        {
          title: 'Erişilebilirlik',
          url: '#',
        },
        {
          title: 'Yardım Merkezi',
          url: '#',
        },
        {
          title: 'Gizlilik ve Koşullar ',
          url: '#',
          dropdown: true,
        },
        {
          title: 'Reklam Tercihleri',
          url: '#',
        },
        {
          title: 'Reklam',
          url: '#',
        },
        {
          title: 'Ticari Hizmetler ',
          url: '#',
          dropdown: true,
        },
        {
          title: 'LinkedIn uygulamasını yükle',
          url: '#',
        },
      ],
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: '',
        lang: 'tr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    }
  },
}
</script>
