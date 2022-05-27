<template>
  <div class="product w-full h-full" :class="{ 'flip group': product.imageSecond }">
    <div class="flip-content group-hover:rotateY-180deg preserve-3d transition duration-500 ease-out w-full perspective-100">
      <div class="flip-front backface-visibility-hidden relative w-full h-full">
        <div class="image">
          <img :src="require('~/assets/images/' + product.image)" class="w-full rounded-xl mb-3" alt="" />
          <button class="badge absolute left-2 top-2 flex justify-center items-center bg-red-400 text-white rounded-full w-8 h-8 text-md leading-3"><i class="bi bi-heart-fill text-white mt-0.5"></i></button>
          <div v-if="product.discount_price" class="badge absolute left-0 top-14 flex justify-center items-center bg-orange-400 text-white rounded-3xl rounded-l-none w-9 h-8 text-xs font-semibold">{{ Math.round(product.main_price - (product.main_price / 100) * product.discount_price) }}%</div>
        </div>
      </div>
      <div class="flip-back backface-visibility-hidden rotateY-180deg absolute left-0 top-0 w-full h-full">
        <div class="second-image">
          <img v-if="product.imageSecond" :src="require('~/assets/images/' + product.imageSecond)" class="w-full rounded-xl mb-3" alt="" />
          <button class="badge absolute left-2 top-2 flex justify-center items-center bg-red-400 text-white rounded-full w-8 h-8 text-md leading-3"><i class="bi bi-heart-fill text-white mt-0.5"></i></button>
          <div v-if="product.discount_price" class="badge absolute left-0 top-14 flex justify-center items-center bg-orange-400 text-white rounded-3xl rounded-l-none w-9 h-8 text-xs font-semibold">{{ Math.round(product.main_price - (product.main_price / 100) * product.discount_price) }}%</div>
        </div>
      </div>
    </div>
    <div class="title flex justify-between items-center">
      <route-link to="/" class="block text-sm font-medium">{{ product.title }}</route-link>
    </div>
    <div class="star">
      <i class="bi bi-star-fill text-xs text-orange-300"></i>
      <i class="bi bi-star-fill text-xs text-orange-300"></i>
      <i class="bi bi-star-fill text-xs text-orange-300"></i>
      <i class="bi bi-star text-xs text-orange-300"></i>
      <i class="bi bi-star text-xs text-orange-300"></i>
    </div>
    <div class="price flex justify-start items-center">
      <dd v-if="product.main_price" class="main-price mr-2" :class="{ ' text-md font-medium': !product.discount_price, 'text-gray-400 text-xs line-through': product.discount_price }">$ {{ product.main_price }}</dd>
      <dd v-if="product.discount_price" class="price" :class="{ ' text-md font-medium': product.discount_price, 'text-gray-400 text-xs line-through': !product.discount_price }">$ {{ product.discount_price }}</dd>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
