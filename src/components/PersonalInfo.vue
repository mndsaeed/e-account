<script setup>
import BaseCard from "./BaseCard.vue";
import FormCard from "./FormCard.vue";

import DropDownNation from "./DropDownNation.vue";
import BaseButton from "./BaseButton.vue";
import TheStepper from "./TheStepper.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed, ref } from "vue";

// export default {
//   components: { BaseCard, TheBg, BaseDropDown, DropDown, Basebutton },
// };

import { useRouter } from "vue-router";
const router = useRouter();
// const checkForm = async () => {
//   console.log("submitted");
//   await router.push("/form/contact-info");
// };

const formData = reactive({
  fisrstName: "",
  secondName: "",
  thirdName: "",
  fourthName: "",
  dob: "",
  gender: "",
  resident: "",
  Id: "",
  IdNo: "",
  nationality: "",
});

const rules = computed(() => {
  return {
    fisrstName: { required, minLength: minLength(3) },
    secondName: { required, minLength: minLength(3) },
    thirdName: { required, minLength: minLength(3) },
    fourthName: { required, minLength: minLength(3) },
    dob: { required },
    gender: { required },

    resident: { required },

    Id: { required },

    IdNo: { required },
    nationality: { required },
  };
});
const v$ = useVuelidate(rules, formData);
const checkForm = async () => {
  const result = await v$.value.$validate();

  if (result) {
    router.push("/form/contact-info");
  } else {
  }
};
</script>

<template>
  <div class="flex flex-col px-5 w-full pb-5">
    <TheStepper class="mb-10" :step="1" />
    <div class="flex flex-col text-left space-y-2 mb-5">
      <form action="submit" @submit="checkForm">
        <div class="grid md:grid-cols-4 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <input
              required
              v-model="formData.fisrstName"
              placeholder="First Name"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.fisrstName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              required
              v-model="formData.secondName"
              placeholder="Second Name"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.secondName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              required
              v-model="formData.thirdName"
              placeholder="Third Name"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.thirdName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="relative z-0 mb-6 w-full">
            <input
              required
              v-model="formData.fourthName"
              placeholder="Fourth Name"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.fourthName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 mb-6 w-full group">
            <input
              required
              v-model="formData.dob"
              placeholder="Date of Birth"
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.dob.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row relative z-0 w-full group">
              <div
                class="flex items-center w-full mr-5 pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
              >
                <input
                  required
                  v-model="formData.gender"
                  :value="true"
                  id="bordered-radio-1"
                  type="radio"
                  name="bordered-radio"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >Male</label
                >
              </div>
              <div
                class="flex items-center w-full pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
              >
                <input
                  required
                  v-model="formData.gender"
                  :value="false"
                  id="bordered-radio-2"
                  type="radio"
                  name="bordered-radio"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-2"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >Female</label
                >
              </div>
            </div>
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.gender.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-10 mb-6 w-full group">
            <DropDownNation v-model="formData.nationality" />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.nationality.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row relative z-0 w-full group">
              <div
                class="flex items-center w-full mr-5 pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
              >
                <input
                  required
                  v-model="formData.resident"
                  :value="true"
                  id="r-1"
                  type="radio"
                  name="bordered-radio1"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="r-1"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >Resident</label
                >
              </div>
              <div
                class="flex items-center w-full pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
              >
                <input
                  required
                  v-model="formData.resident"
                  :value="false"
                  id="r-2"
                  type="radio"
                  name="bordered-radio1"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="r-2"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >Non-Resident</label
                >
              </div>
            </div>
            <span
              class="font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.resident.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 mb-6 w-full group">
            <div class="flex flex-row relative z-0 w-full group">
              <div
                class="flex items-center w-full mr-5 pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
              >
                <input
                  required
                  v-model="formData.Id"
                  :value="true"
                  id="i-1"
                  type="radio"
                  name="bordered-radio5"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="i-1"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >Passport</label
                >
              </div>
              <div
                class="flex items-center w-full pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
              >
                <input
                  required
                  v-model="formData.Id"
                  :value="false"
                  id="i-2"
                  type="radio"
                  name="bordered-radio5"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="i-2"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >National Number</label
                >
              </div>
            </div>
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.Id.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="relative z-0 mb-6 w-full">
            <input
              required
              v-model="formData.IdNo"
              placeholder="ID Number"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
              v-for="error of v$.IdNo.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="flex justify-end items-end mt-16">
    <!-- <router-link to="/form/contact-info"> -->
    <BaseButton @click="checkForm" buttonName="Next" class="w-32" />
    <!-- </router-link> -->
  </div>
</template>
