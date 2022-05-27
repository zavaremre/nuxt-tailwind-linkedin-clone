<template>
  <div class="title-bar flex flex-col justify-start items-start">
    <div class="flex justify-between items-center w-full border-b border-gray-100">
      <div>
        <div class="title">
          <h1 class="font-medium text-2xl">
            {{ title }} <strong class="font-black">{{ strongTitle }}</strong>
          </h1>
          <small class="text-sm opacity-60">{{ subTitle }}</small>
        </div>
        <div class="divider w-14 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-24 mt-2"></div>
      </div>
      <!-- <div class="select-grid flex gap-x-3">
              <button class="flex justify-center items-center border border-gray-200 gap-x-1 py-2 px-3 rounded-2xl" :class="{ 'border-gray-500 ': grid === 5 }" @click="changeGrid(5)">
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
              </button>
              <button class="flex justify-center items-center border border-gray-200 gap-x-1 py-2 px-3 rounded-2xl" :class="{ 'border-gray-500 ': grid === 4 }" @click="changeGrid(4)">
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
              </button>
              <button class="flex justify-center items-center border border-gray-200 gap-x-1 py-2 px-3 rounded-2xl" :class="{ 'border-gray-500 ': grid === 3 }" @click="changeGrid(3)">
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-xl"></div>
              </button>
            </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    strongTitle: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
