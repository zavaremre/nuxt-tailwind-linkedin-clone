<template>
  <div class="status-bar border border-gray-200 rounded-lg bg-white px-4 pt-3 pb-2 mb-1 w-full">
    <div class="avatar flex justify-center items-center w-full mb-2">
      <img src="~/assets/images/avatar.jpeg" class="rounded-full w-12 mr-3" alt="" />
      <input type="text" placeholder="Gönderi Hazırla" class="rounded-full border border-gray-400 placeholder:text-gray-500 font-medium px-4 py-3 w-full" />
    </div>
    <div class="btn-set flex gap-x-6 items-center">
      <button class="flex justify-start items-center text-gray-500 font-semibold w-full rounded-lg px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/photo.svg" alt="" />
        Fotoğraf
      </button>
      <button class="flex justify-start items-center text-gray-500 font-semibold w-full rounded-lg px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/video.svg" alt="" />
        Video
      </button>
      <button class="flex justify-start items-center text-gray-500 font-semibold w-full rounded-lg px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/poll.svg" alt="" />
        Anket
      </button>
      <button class="flex justify-start items-center text-gray-500 font-semibold w-full rounded-lg px-3 py-2.5 hover:bg-gray-100">
        <img class="h-4 mr-3" src="~/assets/images/text.svg" alt="" />
        Yazı Yaz
      </button>
    </div>
  </div>
</template>
