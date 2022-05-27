<template>
  <section>
    <header class="sticky top-0 bg-white border-b border-gray-100 dark:border-black-800 py-5 mb-10 z-30">
      <div class="container px-5 sm:px-0">
        <div class="flex justify-between items-center w-full">
          <div class="logo basis-1/5">
            <div class="flex justify-start">
              <div class="flex flex-col justify-center items-center">
                <strong class="text-xl font-black">Puffy's</strong>
                <strong class="text-sm font-light">Quality Trend Boutique</strong>
              </div>
            </div>
          </div>
          <div class="menu basis-3/5">
            <ul class="flex justify-center items-center">
              <li><router-link class="block text-md font-semibold uppercase p-5" to="/">Home</router-link></li>
              <li><router-link class="block text-md font-semibold uppercase p-5" to="/">Shop</router-link></li>
              <li><router-link class="block text-md font-semibold uppercase p-5" to="/">About</router-link></li>
              <li><router-link class="block text-md font-semibold uppercase p-5" to="/">Blog</router-link></li>
              <li><router-link class="block text-md font-semibold uppercase p-5" to="/">Support</router-link></li>
              <li><router-link class="block text-md font-semibold uppercase p-5" to="/">Contact</router-link></li>
            </ul>
          </div>
          <div class="header-right basis-1/5">
            <ul class="flex justify-end items-center gap-x-3">
              <li>
                <button class="relative block text-2xl font-semibold p-5" to="/">
                  <i class="bi bi-heart"></i>
                </button>
              </li>
              <li class="relative group">
                <button class="relative block text-2xl font-semibold p-5 group" to="/">
                  <i class="bi bi-person-circle"></i>
                  <div class="count absolute right-2 top-3 rounded-full flex justify-center items-center text-xs text-white w-5 h-5 bg-red-500 font-normal">21</div>
                </button>
                <section class="absolute top-11 -right-24 z-20 transition-all duration-200 scale-0 group-hover:scale-100 pl-12 py-12 pr-5">
                  <div class="dropdown bg-white border border-gray-100 rounded-xl rounded-t-none w-64 p-4">
                    <ul>
                      <li>
                        <router-link to="#" class="relative block transition-all duration-100 text-sm text-left font-normal border-b border-gray-100 p-3 hover:bg-gray-100 hover:rounded-lg hover:font-medium"> My Order </router-link>
                        <router-link to="#" class="relative block transition-all duration-100 text-sm text-left font-normal border-b border-gray-100 p-3 hover:bg-gray-100 hover:rounded-lg hover:font-medium"> My Address </router-link>
                        <router-link to="#" class="relative block transition-all duration-100 text-sm text-left font-normal border-b border-gray-100 p-3 hover:bg-gray-100 hover:rounded-lg hover:font-medium"> Order </router-link>
                        <router-link to="#" class="relative block transition-all duration-100 text-sm text-left font-normal border-b border-gray-100 p-3 hover:bg-gray-100 hover:rounded-lg hover:font-medium"> Order </router-link>
                        <router-link to="#" class="relative block transition-all duration-100 text-sm text-left font-normal border-b border-gray-100 p-3 hover:bg-gray-100 hover:rounded-lg hover:font-medium"> Order </router-link>
                        <router-link to="#" class="relative block transition-all duration-100 text-sm text-left font-normal p-3 hover:bg-gray-100 hover:rounded-lg hover:font-medium"> Order </router-link>
                      </li>
                    </ul>
                  </div>
                </section>
              </li>
              <li class="relative group">
                <button class="relative block text-2xl font-semibold p-5" to="/">
                  <i class="bi bi-bag"></i>
                  <div class="count absolute right-2 top-3 rounded-full flex justify-center items-center text-xs text-white w-5 h-5 bg-red-500 font-normal">8</div>
                </button>
                <section class="absolute top-11 -right-24 z-20 transition-all duration-200 scale-0 group-hover:scale-100 pl-12 py-12 pr-24">
                  <div class="dropdown bg-white border border-gray-100 rounded-xl rounded-t-none w-64 p-4 space-y-4">
                    <div v-for="item in 4" :key="item" class="mini-cart flex justify-start items-start w-full">
                      <div class="image mr-3">
                        <router-link to="#">
                          <img class="w-16 rounded-md" src="~/assets/images/products/1.jpg" alt="" />
                        </router-link>
                      </div>
                      <div class="content flex flex-col items-start justify-start w-full">
                        <div class="title mb-1 -mt-1">
                          <router-link class="block text-sm font-medium" to="#">Classic Sweater</router-link>
                        </div>
                        <div class="price flex justify-start items-center mb-1">
                          <dd class="main-price mr-2 text-gray-400 text-xs line-through">$ 100.00</dd>
                          <dd class="price text-xs font-medium">$ 50.00</dd>
                        </div>
                        <button class="text-xs font-medium">Remove</button>
                      </div>
                    </div>
                    <div>
                      <router-link to="#" class="block border border-gray-200 py-2 px-4 w-full rounded-lg text-sm font-medium text-center">Go to cart</router-link>
                    </div>
                  </div>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <section class="slider mb-10">
      <div class="container px-5 sm:px-0 h-full">
        <div class="relative">
          <section class="scroll-carousel slider-bg h-[400px] relative w-full flex gap-6 snap-x snap-mandatory scroll-smooth overflow-x-auto rounded-xl dark:bg-black-900 group">
            <div class="flex justify-between items-center snap-center shrink-0 w-full h-full">
              <div class="max-w-1/2 basis-1/2 h-full">
                <div class="slider-left flex flex-col justify-center items-start border border-gray-100 dark:border-black-800 border-r-0 rounded-xl rounded-r-none h-full p-20">
                  <h1 class="text-2xl font-black uppercase mb-2">SUMMER DISCOUNT</h1>
                  <h1 class="text-2xl font-normal uppercase mb-2">ALL PRODUCTS 50%</h1>
                  <p class="text-md leading-4 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <router-link to="/" class="text-orange-500 text-md font-medium py-2">
                    Discover New Seoson!
                    <div class="divider w-14 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-24 mt-2"></div>
                  </router-link>
                  <div class="navigation flex absolute right-5 bottom-5 z-10 transition-all duration-200 scale-0 group-hover:scale-100">
                    <button class="flex justify-center items-center bg-white border-r border-gray-200 rounded-full rounded-r-none w-12 h-12" @click="changeSlide(-1)">
                      <i class="bi bi-chevron-left text-xl"></i>
                    </button>
                    <button class="flex justify-center items-center bg-white rounded-full rounded-l-none w-12 h-12" @click="changeSlide(1)">
                      <i class="bi bi-chevron-right text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="max-w-1/2 basis-1/2 h-full">
                <div class="slider-right flex flex-col justify-center items-end h-full p-0">
                  <img src="~/assets/images/slider/1.png" class="w-full h-full object-cover rounded-xl rounded-l-none" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="categories mb-10">
      <div class="container">
        <div class="md:flex">
          <ul class="flex justify-between items-center space-x-7 overflow-x-scroll lg:overflow-hidden ">
            <div v-for="(categorie, index) in categories" :key="index" class="flex justify-center items-center shrink grow">
              <CategoriesIcons :categorie="categorie" />
            </div>
          </ul>
        </div>
      </div>
    </section>
    <section class="banners mb-10">
      <div class="container">
        <div class="flex gap-5 sm:gap-7">
          <div class="basis-1/2">
            <div class="banner relative rounded-xl overflow-hidden group">
              <img class="rounded-xl w-full h-80 scale-110 object-cover object-right-top transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-6 group-hover:-translate-x-6" src="~/assets/images/slider/2.png" alt="" />
              <div class="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 opacity-80 z-[5]"></div>
              <div class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white p-10 z-[6]">
                <i class="bi bi-percent text-5xl mb-5"></i>
                <h1 class="text-2xl font-black uppercase">SUMMER DISCOUNT</h1>
                <h1 class="text-2xl font-medium uppercase mb-2">ALL PRODUCTS 50%</h1>
                <p class="text-md leading-4 font-medium mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <router-link to="/" class="btn-glass"> Discover New Seoson! </router-link>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="banner relative rounded-xl overflow-hidden group">
              <img class="rounded-xl w-full h-80 scale-110 object-cover object-right-top transition-all duration-200 group-hover:scale-125 group-hover:translate-y-6 group-hover:translate-x-6" src="~/assets/images/slider/3.jpeg" alt="" />
              <div class="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-80 z-[5]"></div>
              <div class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white p-10 z-[6]">
                <i class="bi bi-tag text-5xl mb-5"></i>
                <h1 class="text-2xl font-black uppercase">SUMMER DISCOUNT</h1>
                <h1 class="text-2xl font-medium uppercase mb-2">ALL PRODUCTS 50%</h1>
                <p class="text-md leading-4 font-medium mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <router-link to="/" class="btn-glass"> Discover New Seoson! </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-10">
      <div class="container">
        <Titlebar title="Welcome" strong-title="SUMMER!" sub-title="Aperiam animi omnis assumenda esse id exercitationem est impedit." />
      </div>
    </section>
    <section class="products mb-10">
      <div class="container px-5 sm:px-0">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-7" :class="{ ' lg:grid-cols-3': grid === 3, ' lg:grid-cols-4': grid === 4, ' lg:grid-cols-5': grid === 5 }">
          <div v-for="product in products.slice(0, 4)" :key="product">
            <Product :product="product" />
          </div>
        </div>
      </div>
    </section>
    <section class="mb-10">
      <div class="container">
        <Titlebar title="Welcome" strong-title="SUMMER!" sub-title="Aperiam animi omnis assumenda esse id exercitationem est impedit." />
      </div>
    </section>
    <section class="products">
      <div class="container px-5 sm:px-0">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-7" :class="{ ' lg:grid-cols-3': grid === 3, ' lg:grid-cols-4': grid === 4, ' lg:grid-cols-5': grid === 5 }">
          <div v-for="product in products.slice(5, 9)" :key="product">
            <Product :product="product" />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      grid: 4,
      categories: [
        {
          title: 'Athletes',
          image: '3345649.png',
          url: '#',
        },
        {
          title: 'T-Shirts',
          image: '3345359.png',
          url: '#',
        },
        {
          title: 'Dresses',
          image: '3345360.png',
          url: '#',
        },

        {
          title: 'Hoodies',
          image: '3345763.png',
          url: '#',
        },
        {
          title: 'Jeans',
          image: '3345512.png',
          url: '#',
        },
        {
          title: 'Skirts',
          image: '3345447.png',
          url: '#',
        },
        {
          title: 'Hats',
          image: '3345661.png',
          url: '#',
        },
        {
          title: 'Shoes',
          image: '3345386.png',
          url: '#',
        },
        {
          title: 'Watches',
          image: '3345451.png',
          url: '#',
        },
        {
          title: 'Bags',
          image: '3345405.png',
          url: '#',
        },
      ],
      products: [
        {
          id: 1,
          title: 'Classic Sweater',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '69.90',
          discount_price: null,
          category: 'Sweatshirts & Hoodies',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/1.jpg',
          imageSecond: 'products/f1.jpg',
        },
        {
          id: 2,
          title: 'Gray Sweatshirt',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '100.00',
          discount_price: '50.00',
          category: 'T_Shirt',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/2.jpg',
          imageSecond: 'products/f2.jpg',
        },
        {
          id: 3,
          title: 'Gray T-shirt with Pocketk',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '99.90',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/3.jpg',
          imageSecond: 'products/f3.jpg',
        },
        {
          id: 4,
          title: 'Cotton green sweater',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '69.90',
          discount_price: '49.90',
          category: 'Dress',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/4.jpg',
          imageSecond: 'products/f4.jpg',
        },
        {
          id: 5,
          title: 'Black long dress',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '69.90',
          discount_price: null,
          category: 'Sweatshirts & Hoodies',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/5.jpg',
          imageSecond: 'products/f5.jpg',
        },
        {
          id: 6,
          title: 'Orange Hoodie',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '45.00',
          discount_price: null,
          category: 'Monte',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/6.jpg',
          imageSecond: 'products/f6.jpg',
        },
        {
          id: 7,
          title: 'Pink coat',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '75.00',
          discount_price: '50.00',
          category: 'Sweatshirts & Hoodies',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/7.jpg',
          imageSecond: 'products/f7.jpg',
        },
        {
          id: 8,
          title: 'Floral short sleeve dress',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '34.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/8.jpg',
          imageSecond: 'products/f8.jpg',
        },
        {
          id: 9,
          title: 'Pull & Bear Jacket Slogan',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '64.00',
          discount_price: '35.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/9.jpg',
          imageSecond: 'products/f9.jpg',
        },
        {
          id: 10,
          title: 'New Trend Jeans For Men',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '217.00',
          discount_price: '145.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/10.jpg',
          imageSecond: 'products/f10.jpg',
        },
        {
          id: 11,
          title: 'Lightly Fertiti',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '23.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/11.jpg',
          imageSecond: 'products/f11.jpg',
        },
        {
          id: 12,
          title: 'Plain Shirt',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '9.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/12.jpg',
          imageSecond: null,
        },
        {
          id: 13,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/13.jpg',
          imageSecond: null,
        },
        {
          id: 14,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: '125.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/14.jpg',
          imageSecond: null,
        },
        {
          id: 15,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/15.jpg',
          imageSecond: null,
        },
        {
          id: 16,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/16.jpg',
          imageSecond: null,
        },
        {
          id: 17,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/17.jpg',
          imageSecond: null,
        },
        {
          id: 18,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: '125.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/18.jpg',
          imageSecond: null,
        },
        {
          id: 19,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: null,
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/19.jpg',
          imageSecond: null,
        },
        {
          id: 20,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: '125.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/20.jpg',
          imageSecond: null,
        },
        {
          id: 21,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: '125.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/21.jpg',
          imageSecond: null,
        },
        {
          id: 21,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: '125.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/22.jpg',
          imageSecond: null,
        },
        {
          id: 21,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: '125.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/23.jpg',
          imageSecond: null,
        },
        {
          id: 21,
          title: 'Hot! Product Bundle',
          excerpt: 'I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life...',
          main_price: '326.00',
          discount_price: '125.00',
          category: 'Sweaters',
          variants: {
            color: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
            size: ['Xsmall', 'Small', 'Medium', 'Large', 'Xlarge', 'XXlarge'],
          },

          image: 'products/24.jpg',
          imageSecond: null,
        },
      ],
    }
  },
  methods: {
    changeSlide(delta) {
      const carousel = document.querySelector('.scroll-carousel')
      const width = carousel.offsetWidth
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0)
    },

    changeGrid(value) {
      this.grid = value
    },
  },
}
</script>
