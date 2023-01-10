<script setup>
import DropState from "./DropDownState.vue";
import DropCity from "./DropDownCity.vue";
import BaseButton from "./BaseButton.vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed, ref } from "vue";
const router = useRouter();

const formData = reactive({
  state: "",
  city: "",
  area: "",
  street: "",
  pobox: "",
  houseNumber: "",
  email: "",
  mobileNumber: "",
});

const rules = computed(() => {
  return {
    state: { required },
    city: { required },
    area: { required },
    street: { required },
    poBox: { required },
    houseNumber: { required },
    email: { required, email },
    mobileNumber: { required },
  };
});
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    router.push("/form/occupation-details");
    // alert("valid");
  } else {
    // alert("invalid");
  }
};
</script>

<template>
  <!-- <span class="mr-2 border rounded-full p-px bg-primary"
            >
            <div class="mx-1.5 my-[1px] text-xs text-white">1</div></span
          > -->
  <div class="my-5 mb-10">
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
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="mr-2 border rounded-full p-px bg-primary">
            <div class="mx-1.5 my-[1px] text-xs text-white">2</div></span
          >
          Contact <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="mr-2 border rounded-full p-px"
            ><div class="mx-1.5 my-[1px] text-xs">3</div></span
          >
          Occupation <span class="hidden sm:inline-flex sm:ml-2">Details</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="mr-2 border rounded-full p-px"
            ><div class="mx-1.5 my-[1px] text-xs">4</div></span
          >
          CBOS <span class="hidden sm:inline-flex sm:ml-2">Form</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="mr-2 border rounded-full p-px"
            ><div class="mx-1.5 my-[1px] text-xs">5</div></span
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
  </div>
  <div class="flex flex-col">
    <div class="flex flex-col text-left space-y-2 mb-5">
      <div class="grid md:grid-cols-2 md:gap-20">
        <div class="z-10 relative mb-6 w-full group">
          <DropState v-model="formData.state" />
          <span
            class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
            v-for="error of v$.state.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>
        <div class="relative mb-6 w-full group">
          <DropCity v-model="formData.city" />
          <span
            class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
            v-for="error of v$.city.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-20">
        <div class="flex flex-row relative z-0 w-full group">
          <div class="relative z-0 w-full">
            <input
              v-model="formData.area"
              placeholder="Area"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.area.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="flex flex-row relative z-0 w-full group">
          <div class="relative z-0 mb-6 w-full">
            <input
              v-model="formData.street"
              placeholder="Street"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.street.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-20">
        <div class="flex flex-row relative z-0 w-full group">
          <div class="relative z-0 mb-6 w-full">
            <input
              v-model="formData.poBox"
              placeholder="P.O BOX"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.poBox.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="flex flex-row relative z-0 w-full group">
          <div class="relative z-0 mb-6 w-full">
            <input
              v-model="formData.houseNumber"
              placeholder="House Number"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.houseNumber.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-20">
        <div class="flex flex-row relative z-0 w-full group">
          <div class="relative z-0 mb-6 w-full">
            <input
              v-model="formData.email"
              placeholder="E-mail Address"
              type="email"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.email.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="flex flex-row relative z-0 w-full group">
          <div class="relative z-0 mb-6 w-full">
            <input
              v-model="formData.mobileNumber"
              placeholder="Mobile Number"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.mobileNumber.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-end items-end mt-[4.5rem]">
    <!-- <router-link to="/form/occupation-details"> -->
    <BaseButton @click="validate" buttonName="Next" class="w-32" />
    <!-- </router-link> -->
  </div>
</template>
