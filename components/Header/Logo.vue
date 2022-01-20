<template>
  <div class="logo sm:basis-2/6 md:basis-2/6 lg:basis-2/6">
    <div class="flex justify-start items-center">
      <a href="" class="flex flex-col justify-center items-center dark:text-white text-2xl text-gray-700 mr-3">
        <img :src="require('~/assets/images/logo.svg')" class="h-9" alt="" />
      </a>
      <HeaderSearch />
    </div>
  </div>
</template>
