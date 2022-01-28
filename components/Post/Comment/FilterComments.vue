<template>
  <div class="relative comment-filter flex justify-start items-center px-3">
    <Dropdown button-class="flex justify-center items-center rounded-full" dropdown-class="bg-white border border-gray-200 -left-0 top-0 shadow-lg mt-8 rounded-lg !rounded-tl-none w-[300px]">
      <template #button-content>
        <span class="font-medium text-gray-500">En ilgili</span>
        <img src="~/assets/images/caret.svg" class="w-3 h-3 ml-1" />
      </template>

      <template #content="{ dropdownToggle }">
        <ul>
          <li v-for="(item, index) in commentFilter" :key="index">
            <button class="flex justify-start items-center w-full px-4 py-3 text-left hover:bg-gray-200" @click="item.func(dropdownToggle)">
              <div class="image w-6 h-6 mr-3">
                <img class="h-6" :src="require('~/assets/images/' + item.icon)" alt="" />
              </div>
              <div class="title flex flex-col justify-center items-start w-full">
                <strong class="font-medium text-sm text-gray-700">{{ item.title }}</strong>
                <small class="text-xs text-gray-500">{{ item.subTitle }}</small>
              </div>
            </button>
          </li>
        </ul>
      </template>
    </Dropdown>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      commentFilter: [
        {
          title: 'En ilgili',
          subTitle: 'En ilgili yorumlar',
          icon: 'rocket.svg',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
          },
        },
        {
          title: 'En yeni',
          subTitle: 'En son yorumlar enüstte olacak şekilde tüm yorumları gör',
          icon: 'time.svg',
          func(toggleDropdown) {
            if (toggleDropdown) toggleDropdown()
          },
        },
      ],
    }
  },
}
</script>
