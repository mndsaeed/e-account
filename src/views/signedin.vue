<template>
  <div class="flex items-center justify-center mr-10 h-screen columns-2">
    <div
      class="w-full h-[20rem] max-w-lg p-4 backdrop-blur-xl rounded-sm shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-center items-center mt-[4rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
      <div class="flex justify-center items-center mt-5 text-xl text-white">
        Your Application is still being processed
      </div>
      <div class="flex flex-col justify-center items-center mt-10">
        <router-link to="/home/signin">
          <button
            type=""
            class="w-32 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign out
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
