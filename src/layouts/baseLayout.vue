<template>
  <div class="bg-[url('../assets/imgs/sfb-bg.jpg')] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 bg-cover max-sm:bg-primary">
    <!-- <img src="./assests/imgs/sfb-logo.png" alt="" /> -->
    <div class="columns-1">
      <div class="backdrop-blur-xl rounded-xl lg:w-5/6 sm:w-full">
        <div class="flex lg:flex-row max-sm:flex-col md:flex-col lg:flex-nowrap md:flex-wrap sm:flex-wrap break-words items-center justify-center mt-10 mb-2 p-2 w-full">
          <img class="w-72 mr-2" src="../assets/imgs/SFB-logo.png" alt="" />
            <h1 class="text-3xl max-sm:text-white text-black font-serif">Online Account Opening</h1>
        </div>
      </div>
    </div>
    <!-- <router-view /> -->
    <slot />
  </div>
</template>
