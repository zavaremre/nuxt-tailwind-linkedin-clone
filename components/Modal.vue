<template>
  <div>
    <div v-if="modalShow" class="fixed top-0 left-0 w-full h-full z-20 bg-black bg-opacity-50" :class="backdropClass" @click="modalToggle()">
      <slot name="modal-backdrop"></slot>
    </div>

    <button id="menu" class="z-30" :class="buttonClass" @click="modalToggle()">
      <slot name="modal-button" :dropdown-toggle="modalToggle"></slot>
    </button>
    <section class="flex flex-col justify-center items-center h-full w-full">
      <transition name="modal-transition">
        <div v-if="modalShow" class="modal fixed container z-30" :class="modalClass">
          <slot name="modal-content" :dropdown-toggle="modalToggle"></slot>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: '',
    },
    wrapperClass: {
      type: String,
      default: '',
    },
    modalClass: {
      type: String,
      default: '',
    },
    backdropClass: {
      type: String,
      default: 'bg-transparent',
    },
  },
  data() {
    return {
      modalShow: false,
    }
  },
  mounted() {
    const vm = this
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('keyup', function (evt) {
      if (evt.key === 'Escape') {
        console.log('first')
        vm.modalShow = !vm.modalShow
      }
    })
  },
  methods: {
    modalToggle(callback) {
      if (callback) callback()
      this.modalShow = !this.modalShow
    },
  },
}
</script>

<style lang="postcss">
.modal-transition-enter-active,
.modal-transition-leave-active {
  @apply transition-all duration-500;
}

.modal-transition-enter,
.modal-transition-leave-active {
  @apply opacity-0;
}
</style>
