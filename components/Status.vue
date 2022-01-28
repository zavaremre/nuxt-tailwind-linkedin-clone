<template>
  <div class="status-bar border border-gray-200 rounded-lg bg-white px-4 pt-3 pb-2 mb-2 w-full">
    <div class="avatar flex justify-center items-center w-full mb-2">
      <img src="~/assets/images/avatar.jpeg" class="rounded-full w-12 mr-3" alt="" />
      <button class="rounded-full border border-gray-400 border-opacity-80 text-gray-500 font-medium text-left px-4 py-3 w-full hover:bg-gray-100">Gönderi Hazırla</button>
    </div>
    <div class="btn-set grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-x-6 place-content-between lg:place-content-start lg:items-center flex-wrap lg:flex-nowrap">
      <button class="basis-1/4 max-w-1/4 flex lg:justify-start items-center text-gray-500 font-semibold w-full rounded-lg whitespace-nowrap px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/photo.svg" alt="" />
        <div>Fotoğraf</div>
      </button>
      <button class="basis-1/4 max-w-1/4 flex lg:justify-start items-center text-gray-500 font-semibold w-full rounded-lg whitespace-nowrap px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/video.svg" alt="" />
        <div>Video</div>
      </button>
      <button class="basis-1/4 max-w-1/4 flex lg:justify-start items-center text-gray-500 font-semibold w-full rounded-lg whitespace-nowrap px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/poll.svg" alt="" />
        <div>Anket</div>
      </button>
      <button class="basis-1/4 max-w-1/4 flex lg:justify-start items-center text-gray-500 font-semibold w-full rounded-lg whitespace-nowrap px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/text.svg" alt="" />
        <div>Yazı Yaz</div>
      </button>
    </div>
  </div>
</template>
