<script setup>
import signin from "../components/SignIn.vue";
import signup from "../components/SignUp.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="bg-[url('../assets/imgs/sfb-bg.jpg')] grid grid-cols-2 bg-cover">
    <!-- <img src="./assests/imgs/sfb-logo.png" alt="" /> -->
    <div class="columns-1">
      <div class="backdrop-blur-xl rounded-xl">
        <div class="flex items-center justify-center mt-10 mb-2 p-2">
          <img class="w-72 mr-2" src="../assets/imgs/SFB-logo.png" alt="" />
          <h1 class="text-3xl text-black font-serif">Online Account Opening</h1>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
