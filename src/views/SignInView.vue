<script setup>
import baseLayout from "@/layouts/baseLayout.vue";
import { reactive, computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const validate = async () => {
  router.push("/signedin");
};
</script>
<template>
  <baseLayout>
    <form @submit.prevent="validate" class="space-y-6" action="#">
      <h5 class="inline-block text-xl font-medium text-gray-300 dark:text-white text-center">
        Sign In
      </h5>

      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Email Address</label>
        <input type="email" name="email" id="email"
          class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="user@mail.com" required />
      </div>

      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Your password</label>
        <input type="password" name="password" id="password" placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required minlength="6" />
      </div>

      <div class="flex flex-col justify-start">
        <router-link to="/">
          <a href="#" class="mr-auto text-sm text-right text-blue-500 underline dark:text-blue-500">Sign Up</a>
        </router-link>
      </div>
      <!-- <router-link to="signedin"> -->
      <button type="submit"
        class="w-full mt-2 text-white border-white border bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Sign In
      </button>
    </form>
    <!-- </div> -->
    <!-- </div> -->
  </baseLayout>
</template>
