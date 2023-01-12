<script setup>
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
</script>

<template>
  <Form>
    <div class="w-full flex items-center justify-center max-sm:px-5">
  <TheStepper :step="5" />
</div>

  <!-- <div class="my-5 mb-6">
    <ol
      class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
    >
      <li
        class="flex md:w-fit items-center text-primary dark:text-blue-500 sm:after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg
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

          Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center text-primary after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg
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
          Contact <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center text-primary after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg
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
          Occupation <span class="hidden sm:inline-flex sm:ml-2">Details</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center text-primary after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg
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
          CBOS <span class="hidden sm:inline-flex sm:ml-2">Form</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="mr-2 border rounded-full p-px bg-primary">
            <div class="mx-1.5 my-[1px] text-xs text-white">5</div></span
          >
          Documents <span class="hidden sm:inline-flex sm:ml-2">Upload</span>
        </span>
      </li>
      <li class="flex items-center">
        <span class="mr-2 border-2 rounded-full p-px"
          ><div class="mx-1.5 my-[1px] text-xs">6</div></span
        >
        Review <span class="hidden sm:inline-flex sm:ml-2">&</span>
        <span class="hidden sm:inline-flex sm:ml-2">Submit</span>
      </li>
    </ol>
  </div> -->
  <div class="grid grid-rows-3 gap-2">
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-2 pb-2">
          <svg
            aria-hidden="true"
            class="w-10 h-4 mb-1 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <h1 class="font-bold text-primary">Personal Photo</h1>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-sm">Click to upload</span> or drag
            and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            PNG or JPG (MAX. 3.5 MB)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-2 pb-2">
          <svg
            aria-hidden="true"
            class="w-10 h-4 mb-1 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <h1 class="font-bold text-primary">ID Photo</h1>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-sm">Click to upload</span> or drag
            and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            PNG or JPG (MAX. 3.5 MB)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-2 pb-2">
          <svg
            aria-hidden="true"
            class="w-10 h-4 mb-1 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <h1 class="font-bold text-primary">Selfie Holding ID</h1>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-sm">Click to upload</span> or drag
            and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            PNG or JPG (MAX. 3.5 MB)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  </div>
  <div class="flex flex-row justify-between gap-5 h-fit mt-10">
    <div class="flex justify-start items-end">
      <router-link to="/form/cbos-form">
        <BaseButton
          buttonName="Previous"
          class="w-32 bg-indigo-900 hover:bg-indigo-800"
        />
      </router-link>
    </div>
    <div class="flex gap-5">
      <div class="flex justify-end items-end">
        <router-link to="/signin">
          <BaseButton
            buttonName="Save and Quit"
            class="w-32 bg-red-600 hover:bg-red-700"
          />
        </router-link>
      </div>
      <div class="flex justify-end items-end">
        <router-link to="/form/submit">
          <BaseButton @click="validate" buttonName="Next" class="w-32" />
        </router-link>
      </div>
    </div>
  </div>
</Form>

  <!-- <div class="flex flex-col items-end justify-end"> -->
  <!-- <router-link to="/form/submit"> -->
  <!-- <BaseButton buttonName="Next" class="w-32" /> -->
  <!-- </router-link> -->
  <!-- </div> -->
</template>
