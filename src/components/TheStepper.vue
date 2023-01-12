<script setup>

const props = defineProps({
  step: {
    type : Number,
    default : 1
  }
});

</script>
<template>
  <div class="my-5">
    <ol
      class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
    >
      <li
        class="flex md:w-fit items-center text-primary dark:text-blue-500 sm:after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg v-if="step > 1"
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span v-else class="mr-2 border rounded-full p-px bg-primary"
            ><div class="mx-1.5 my-[1px] text-xs text-white">1</div></span
          >
            <h6 :class="step != 1 ? 'max-sm:hidden' : '' ">
              Personal<span class="hidden sm:inline-flex sm:ml-2">Info</span>
            </h6>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
        :class="step > 1 ? 'text-primary':''"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg v-if="step > 2"
              aria-hidden="true"
              class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>

          <span v-else class="mr-2 border rounded-full p-px" :class="step >= 2 ? ' bg-primary text-white' : ''"
            ><div class="mx-1.5 my-[1px] text-xs">2</div></span
          >

          <h6 :class="step != 2 ? 'max-sm:hidden' : '' ">
            Contact<span class="hidden sm:inline-flex sm:ml-2">Info</span>
          </h6>

        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
        :class="step > 2 ? 'text-primary':''"
        >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg v-if="step > 3"
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <span v-else class="mr-2 border rounded-full p-px" :class="step >= 3 ? ' bg-primary text-white' : ''"
            ><div class="mx-1.5 my-[1px] text-xs">3</div></span
          >
          <h6 :class="step != 3 ? 'max-sm:hidden' : '' ">
            Occupation<span class="hidden sm:inline-flex sm:ml-2">Details</span>
          </h6>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
        :class="step > 3 ? 'text-primary':''"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg v-if="step > 4"
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <span v-else class="mr-2 border rounded-full p-px" :class="step >= 4 ? ' bg-primary text-white' : ''"
            ><div class="mx-1.5 my-[1px] text-xs">4</div></span
          >

          <h6 :class="step != 4 ? 'max-sm:hidden' : '' ">
            CBOS<span class="hidden sm:inline-flex sm:ml-2">Form</span>
          </h6>

        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
        :class="step > 4 ? 'text-primary':''"
        >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
  
          <svg v-if="step > 5"
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <span v-else class="mr-2 border rounded-full p-px" :class="step >= 5 ? ' bg-primary text-white' : ''"
            ><div class="mx-1.5 my-[1px] text-xs">5</div></span
          >
          <h6 :class="step != 5 ? 'max-sm:hidden' : '' ">
            Documents<span class="hidden sm:inline-flex sm:ml-2">Upload</span>
          </h6>
        </span>
      </li>
      <li class="flex items-center"         
      :class="step >= 6 ? 'text-primary':''"
        >

        
        <svg v-if="step > 6"
          aria-hidden="true"
          class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <span v-else class="mr-2 border-2 rounded-full p-px" :class="step >= 6 ? ' bg-primary text-white' : ''"
          ><div class="mx-1.5 my-[1px] text-xs">6</div></span
        >
        <h6 :class="step != 6 ? 'max-sm:hidden' : '' ">
          Review<span class="hidden sm:inline-flex sm:ml-2">&</span><span class="hidden sm:inline-flex sm:ml-2">Submit</span>  
        </h6>
      </li>
    </ol>
  </div>
</template>
