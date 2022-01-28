<template>
  <div class="relative flex flex-shrink-0 justify-center items-center w-100">
    <input placeholder="Arama Yap" :class="{ '!w-96': active }" class="placeholder:text-gray-500 text-sm font-light bg-input-color py-4 pl-10 pr-4 rounded h-9 w-full md:w-[280px] outline-0 transition-width duration-100" type="text" @click="focusInput" />
    <img src="~/assets/images/search.svg" class="w-3.5 absolute left-4 top-0 mt-3" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    focusInput() {
      this.active = true
    },
  },
}
</script>
