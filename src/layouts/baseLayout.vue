<template>
  <div class="lg:bg-[url('@/assets/imgs/sfb-bg.jpg')] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 bg-cover max-sm:bg-primary md:bg-primary h-full">
    <!-- <img src="./assests/imgs/sfb-logo.png" alt="" /> -->
    <div class="lg:columns-1 max-sm:h-full max-sm:w-full">
      <div class="backdrop-blur-xl max-sm:backdrop-blur-0 rounded-xl lg:w-5/6 sm:w-full">
        <div class="flex lg:flex-row max-sm:flex-col md:flex-col lg:flex-nowrap md:flex-wrap sm:flex-wrap break-words items-center justify-center mt-10 mb-2 p-2 w-full">
          <img class="w-72 mr-2" src="@/assets/imgs/SFB-logo.png" alt="" />
            <h1 class="text-3xl text-white drop-shadow-2xl font-serif">Online Account Opening</h1>
        </div>
      </div>
    </div>
    <!-- <router-view /> -->
    <div class="flex lg:items-center justify-center lg:mr-10 sm:m-0 lg:h-screen h-full columns-2">
      <div
      class="w-full max-w-lg p-4 max-sm:bg-primary backdrop-blur-xl max-sm:backdrop-blur-0 rounded-sm shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
        <slot />
        </div>
    </div>
  </div>
</template>
