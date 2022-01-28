<template>
  <div class="logo basis-1/6 sm:basis-1/6 md:basis-1/2 lg:basis-2/6 flex-shrink-0">
    <div class="relative flex justify-start items-center flex-shrink-0">
      <a href="" class="flex flex-col justify-center items-center dark:text-white text-2xl text-gray-700 mr-3 w-9 h-9">
        <img :src="require('~/assets/images/logo.svg')" class="w-9 h-9" alt="" />
      </a>
      <HeaderSearch />
    </div>
  </div>
</template>
