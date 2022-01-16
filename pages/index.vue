<template>
  <main class="font-sans">
    <header class="border-b border-gray-100 dark:bg-zinc-800 dark:border-0 ">
      <div class="container">
            <section class="flex flex-row content-between items-center w-full">
              <div class="logo xl:basis-2/4 lg:basis-2/3 md:basis-2/2 sm:basis-1/2 xs:basis-1/2">
                <div class="flex flex-col justify-center items-start ">
                  <a href="" class="flex flex-col justify-center items-center dark:text-white text-2xl text-gray-700">
                   <div class="font-light"><strong class="font-black">EMRE</strong> ZAVAR</div>
                   <small class="text-sm text-gray-400 font-light">Front End Developer</small>
                  </a>
                </div>
              </div>
              <div class="menu xl:basis-2/4 lg:basis-2/3 md:basis-2/2 sm:basis-1/2 xs:basis-1/2">
                <nav class="main-menu">
                 <ul class="flex flex-row justify-end">
                    <li class="mr-2"> <a class="block font-normal text-sm text-gray-700 dark:text-white py-8 px-4" href="#">Home</a></li>
                    <li class="mr-2"> <a class="block font-normal text-sm text-gray-700 dark:text-white py-8 px-4" href="#">Home</a></li>
                    <li class="mr-2"> <a class="block font-normal text-sm text-gray-700 dark:text-white py-8 px-4" href="#">Home</a></li>
                    <li class="mr-2"> <a class="block font-normal text-sm text-gray-700 dark:text-white py-8 px-4" href="#">Home</a></li>
                    <li class="mr-2"> <a class="block font-normal text-sm text-gray-700 dark:text-white py-8 px-4" href="#">Home</a></li>
                    <li class="mr-2 last:mr-0"> <a class="block font-normal text-sm text-gray-700 dark:text-white py-8 px-4" href="#">Home</a></li>
                 </ul>
                </nav>
              </div>
            </section>
      </div>
    </header>
    <section class="slider slide w-full bg-gray-50 h-96 mb-4">
      <div class="container h-full">
        <div class="flex content-center items-center w-full h-full">
          <div class="xl:basis-1/2 lg:basis-1/2 md:basis-1/2 sm:basis-1/2 xs:basis-1/2 pr-9">
           <strong class="text-4xl mb-4 block"><span class="font-black">HELLO I'M</span> EMRE !</strong>
           <p class="text-sm font-light leading-6"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fugit perferendis facere, officiis aperiam, assumenda voluptatum velit necessitatibus sunt amet nam aut iusto laudantium repellat quam quaerat voluptatem iure illo?</p>
        </div>
           <div class="xl:basis-1/2 lg:basis-1/2 md:basis-1/2 sm:basis-1/2 xs:basis-1/2 pl-9">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fugit perferendis facere, officiis aperiam, assumenda voluptatum velit necessitatibus sunt amet nam aut iusto laudantium repellat quam quaerat voluptatem iure illo?
           </div>
        </div>
      </div>
    </section>
        <div class="container mx-auto">
        <div class="flex flex-row w-full flex-wrap">
          <div
            v-for="(item, index) in 10"
            :key="index"
            class="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 sm:basis-1/2 xs:basis-1/2 sm:px-3 sm:pb-4"
          >
            <div
              class="flex flex-col content-center items-center border border-gray-200 rounded-lg shadow hover:shadow-xl transition delay-150 duration-300 ease-in-out"
            >
              <div class="header flex flex-col w-full">
                <div class="image w-full mb-4">
                  <img
                    src="https://via.placeholder.com/300.png/09f/fff"
                    class="w-full rounded-lg rounded-b-none"
                    alt=""
                  />
                </div>
              </div>

              <div class="content p-6">
                <div class="title font-semibold mb-4">
                  Lorem, ipsum dolor sit amet
                </div>
                <p class="block text-xs leading-5 text-gray-500 mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                  at eos, asperiores facere eveniet blanditiis veritatis dicta
                  accusamus nemo facilis ducimus odit ex inventore neque enim
                  delectus consequatur beatae laborum.
                </p>
                <a
                  href="#"
                  class="btn bg-purple-600 text-white"
                  >Detail</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
   head () {
      return {
        bodyAttrs: {
          class: 'dark',
        },
         link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600;700;800;900&display=swap'
          }
        ]
      }
    },
}
</script>
