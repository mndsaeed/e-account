<template>
  <button type="submit" :class="responsive ? 'max-sm:w-10 max-sm:h-10 max-sm:rounded-full ': ''"
    class="text-white bg-primary hover:bg-blue-800 max-sm:px-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-h-[20px]">
    <span :class="responsive ? 'max-sm:hidden' : ''">{{ buttonName }}</span>

    <div class="items-center justify-center hidden max-sm:flex" v-if="responsive">
      <span :class="responsive ? 'max-sm:text-white inline-flex justify-center items-center' : ''">
        <svg viewBox="0 0 24 24" width="20px" height="20px" class="inline-block">
          <path fill="currentColor" :d="icon" />

        </svg>
      </span>
    </div>
  </button>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue';
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    buttonName: {
      type: String,
    },
    h: {
      type: String,
      default: "h-10"
    }
  },
};
</script>
<!-- max-sm:w-10 max-sm:h-10 max-sm:rounded-full -->