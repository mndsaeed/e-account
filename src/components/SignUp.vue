<template>
  <div class="flex lg:items-center lg:justify-center lg:mr-10 sm:m-0 lg:h-screen columns-2">
    <div
      class="w-full max-w-lg p-4 backdrop-blur-xl rounded-sm shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="">
        <h5 class="inline-block text-xl font-medium text-gray-300 dark:text-white text-center">
          Sign Up
        </h5>

        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Email Address</label>

          <input type="email" v-model="formData.email" id="email"
            class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="user@mail.com" />
          <span class="ml-2 mt-2 text-xs text-red-600 dark:text-red-400" v-for="error in v$.username.$errors"
            :key="error.$uid">
            {{ $error.$message }}
          </span>
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Phone number</label>
          <input type="phone" v-model="formData.phone" id="phone"
            class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="+249" />
          <span class="ml-2 mt-2 text-xs text-red-600 dark:text-red-400" v-if="v$.phone.$error">
            {{ v$.phone.$errors[0].$message }}
          </span>
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Your
            password</label>
          <input type="string" v-model="formData.password" id="password" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          <span class="ml-2 mt-2 text-xs text-red-600 dark:text-red-400" v-if="v$.password.$error">
            {{ v$.password.$errors[0].$message }}
          </span>
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Repeat
            password</label>
          <input type="string" v-model="formData.confirmPassword" id="confirmPassword" placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          <span class="ml-2 mt-2 text-xs text-red-600 dark:text-red-400" v-if="v$.confirmPassword.$error">
            {{ v$.confirmPassword.$errors[0].$message }}
          </span>
        </div>
        <div class="flex flex-col justify-start mb-2">
          <router-link to="/home/signin">
            <a href="#" class="mr-auto text-sm text-right text-blue-500 underline dark:text-blue-500">Sign In
            </a>
          </router-link>
        </div>

        <button @click.prevent="submitForm"
          class="w-full mt-2 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

const formData = reactive({
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const rules = {
  email: { required, email },
  phone: { required, minLength: minLength(10) },
  password: { required, minLength: minLength(6) },
  confirmPassword: { required, sameAs: sameAs(formData.password) },
};

const v$ = useVuelidate(rules, formData);

const validations = {
  name: {
    email: helpers.withMessage("This field cannot be empty", email),
  },
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  //   if (result) {
  //     alert("success");
  //   } else {
  //     alert("error");
  //   }
};
</script>
