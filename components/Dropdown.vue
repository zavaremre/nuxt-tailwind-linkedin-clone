<template>
  <div>
    <div v-if="shown" class="fixed top-0 left-0 w-full h-full z-20" :class="backdropClass" @click="dropdownToggle()">
      <slot name="backdrop-content" :dropdown-toggle="dropdownToggle"></slot>
    </div>
    <div class="relative" :class="wrapperClass">
      <button id="menu" class="z-30" :class="buttonClass" @click="dropdownToggle()">
        <slot name="button-content" :dropdown-toggle="dropdownToggle"></slot>
      </button>
      <transition name="effect">
        <div v-if="shown" class="dropdown absolute z-30" :class="dropdownClass">
          <slot name="content" :dropdown-toggle="dropdownToggle"></slot>
        </div>
      </transition>
    </div>
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
    dropdownClass: {
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
      shown: false,
    }
  },
  methods: {
    dropdownToggle(callback) {
      if (callback) callback()
      this.shown = !this.shown
    },
  },
}
</script>

<style lang="postcss">
.effect-enter-active,
.effect-leave-active {
  @apply transition-all duration-500;
}

.effect-enter,
.effect-leave-active {
  @apply opacity-0;
}
</style>
