<script setup>
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
import { mdiArrowRight, mdiFlagCheckered, mdiArrowLeft } from "@mdi/js";

</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper :step="5" />
    </div>
    <div class="grid grid-rows-3 gap-2">
      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file"
          class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-fit bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-2 pb-2">
            <svg aria-hidden="true" class="w-10 h-4 mb-1 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <h1 class="font-bold text-primary">Personal Photo</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">Click to upload</span> or drag
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
        <label for="dropzone-file"
          class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-fit bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-2 pb-2">
            <svg aria-hidden="true" class="w-10 h-4 mb-1 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <h1 class="font-bold text-primary">ID Photo</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">Click to upload</span> or drag
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
        <label for="dropzone-file"
          class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-fit bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-2 pb-2">
            <svg aria-hidden="true" class="w-10 h-4 mb-1 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <h1 class="font-bold text-primary">Selfie Holding ID</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">Click to upload</span> or drag
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
    <div class="flex flex-row justify-between gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5">
      <div class="flex justify-start items-end mt-[4.5rem] max-sm:mt-0">
        <router-link to="/form/cbos-form">
          <BaseButton :icon="mdiArrowLeft" responsive buttonName="Previous"
            class="w-32 bg-indigo-900 hover:bg-indigo-800" />
        </router-link>
      </div>
      <div class="flex gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5">
        <div class="flex items-end justify-end">
          <router-link to="/signin">
            <BaseButton :icon="mdiFlagCheckered" responsive buttonName="Save and Quit"
              class="w-32 bg-red-600 hover:bg-red-700 max-sm:text-xs max-sm:h-[2.5rem]" />
          </router-link>
        </div>
        <div class="flex justify-end items-end mt-[4.5rem] max-sm:mt-0">
          <router-link to="/form/submit">
          <BaseButton :icon="mdiArrowRight" responsive buttonName="Next" class="w-32" />
          </router-link>
        </div>
      </div>
    </div>
  </Form>
</template>
