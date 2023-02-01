<script setup>
import baseLayout from "@/layouts/baseLayout.vue";
import { useUserData } from "@/stores/UserData";
import { ref, onMounted } from "vue";
const formData = useUserData();
onMounted(() => {
  formData.loadForm();
});
</script>
<template>
  <baseLayout>
    <div
      class="w-full h-[20rem] max-w-lg p-4 backdrop-blur-xl rounded-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col justify-center items-center mt-10 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="flex justify-center items-center text-white">
        Application Submitted Successfully
      </div>
      <div class="flex justify-center items-center text-xs text-white">
        Please visit {{ formData.branch }} branch to provide your signiture on
        {{ formData.submitDate }}
      </div>
      <div class="flex flex-col justify-center items-center mt-10">
        <router-link to="signin">
          <button
            type=""
            class="w-32 text-white bg-primary hover:bg-blue-800 focus:ring-4 border border-white focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign out
          </button>
        </router-link>
      </div>
    </div>
  </baseLayout>
</template>
