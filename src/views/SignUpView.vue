<script setup>
import baseLayout from "@/layouts/baseLayout.vue";
import useVuelidate from "@vuelidate/core";
import axios from "axios";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
  maxLength,
} from "@vuelidate/validators";
import { reactive, computed, watch, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { useUserData } from "@/stores/UserData";
const signup = import.meta.env.VITE_CREATE_ACCOUNT;
const formData = useUserData();

// const formData = reactive({
//   email: "",
//   mobileNumber: "",
//   password: "",
//   confirmPassword: "",
// });

// watch(formData, (formData) => {
//   for (const property in formData) {
//     localStorage.setItem(property, JSON.stringify(formData[property]));
//   }
// });
// onMounted(() => {
//   for (const property in formData) {
//     formData[property] = JSON.parse(localStorage.getItem(property));
//     console.log(property);
//   }
// });

const router = useRouter();

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Please enter your email", required),
      email: helpers.withMessage("Please enter a valid email", email),
    },
    mobileNumber: {
      required: helpers.withMessage("Please enter your phone", required),
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    password: {
      required: helpers.withMessage("Please enter your password", required),
      minLength: minLength(6),
    },
    confirmPassword: {
      required: helpers.withMessage(
        "Please confirm your password \n",
        required
      ),
      minLength: minLength(6),
      sameAs: sameAs(formData.password),
    },
  };
});
const userExists = ref("");
const v$ = useVuelidate(rules, formData);
const submitForm = async () => {
  const result = await v$.value.$validate();

  if (result) {
    if (await formData.signup()) {
      router.push("/otp");
    } else {
      userExists.value = true;
    }
  }
};
</script>

<template>
  <baseLayout>
    <!-- <div
      class="w-full max-w-lg p-4 rounded-sm shadow-xl max-sm:bg-primary backdrop-blur-xl max-sm:backdrop-blur-0 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    > -->
    <form class="space-y-6" action="">
      <h5
        class="inline-block text-xl font-medium text-center text-gray-300 dark:text-white"
      >
        Sign Up
      </h5>

      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
          >Email Address</label
        >

        <input
          type="email"
          v-model="formData.email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="user@mail.com"
        />

        <span
          class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
      </div>
      <div>
        <label
          for="mobileNumber"
          class="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
          >Phone number</label
        >
        <input
          type="tel"
          v-model="formData.mobileNumber"
          id="mobileNumber"
          class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="0---------"
          maxlength="10"
          minlength="10"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
        />
        <span
          class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
          v-for="error of v$.mobileNumber.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <span
          class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
          >Repeat password</label
        >
        <input
          type="password"
          id="confirmPassword"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
        <span
          class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
          v-for="error of v$.confirmPassword.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
      </div>
      <div class="flex flex-col justify-start mb-2">
        <router-link to="/signIn">
          <a
            href="#"
            class="mr-auto text-sm text-right text-blue-500 underline dark:text-blue-500"
            >Sign In
          </a>
        </router-link>
      </div>
      <div class="flex w-full">
        <button
          @click.prevent="submitForm"
          class="w-full mt-2 text-white bg-primary border border-primary max-sm:border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
      </div>
      <div
        v-if="userExists"
        class="text-md text-center font-semibold text-red-600 dark:text-red-400"
      >
        User Already Exists
      </div>
    </form>
    <!-- </div> -->
    <!-- </div> -->
  </baseLayout>
</template>
