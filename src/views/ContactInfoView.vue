<script setup>
import DropState from "@/components/DropDownState.vue";
import DropCity from "@/components/DropDownCity.vue";
import DropBranch from "@/components/DropDownBranches.vue";
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
import { mdiArrowRight, mdiFlagCheckered, mdiArrowLeft } from "@mdi/js";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed, ref, onMounted, watch } from "vue";

import { useUserData } from "@/stores/UserData";
const formData = useUserData();

const router = useRouter();

// const formData = reactive({
//   state: "",
//   city: "",
//   area: "",
//   street: "",
//   poBox: "",
//   houseNumber: "",
//   email: "",
//   mobileNumber: "",
//   branch: "",
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

const rules = computed(() => {
  return {
    state: { required },
    branch: { required },
    city: { required },
    area: { required },
    street: { required },
    poBox: { required },
    houseNumber: { required },
    email: { required, email },
    mobileNumber: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
  };
});
onMounted(() => {
  formData.loadForm();
});
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    // formData.pageNumber = 3;
    formData.pageUrl = "/form/occupation-details";
    formData.saveForm();

    router.push("/form/occupation-details");
    // alert("valid");
  } else {
    // alert("invalid");
  }
};
const previous = async () => {
  formData.pageUrl = "/form/personal-info";
  formData.saveForm();
  router.push("/form/personal-info");
};
const quit = async () => {
  formData.saveForm();
  router.push("/signin");
};
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper :step="2" />
    </div>
    <div class="flex flex-col w-full px-5 pb-2">
      <div class="flex flex-col mb-5 space-y-2 text-left">
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-10 w-full mb-2 group">
            <label
              class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
            >
              State
            </label>
            <DropState v-model="formData.state" :value="formData.state" />
            <span
              class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
              v-for="error of v$.state.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="relative w-full mb-2 group">
            <label
              class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
            >
              City
            </label>
            <DropCity v-model="formData.city" :value="formData.city" />
            <span
              class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
              v-for="error of v$.city.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 flex flex-row w-full group max-sm:mb-6">
            <div class="relative z-0 w-full">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                Area
              </label>
              <input
                v-model="formData.area"
                placeholder="Area"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.area.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="relative z-0 flex flex-row w-full group">
            <div class="relative z-0 w-full">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                Street
              </label>
              <input
                v-model="formData.street"
                placeholder="Street"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.street.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 flex flex-row w-full group">
            <div class="relative z-0 w-full mb-2">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                P.O Box
              </label>
              <input
                v-model="formData.poBox"
                placeholder="P.O BOX"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.poBox.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="relative z-0 flex flex-row w-full group">
            <div class="relative z-0 w-full mb-2">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                House Number
              </label>
              <input
                v-model="formData.houseNumber"
                placeholder="House Number"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.houseNumber.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 flex flex-row w-full group">
            <div class="relative z-0 w-full mb-2">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                E-mail
              </label>
              <input
                v-model="formData.email"
                placeholder="E-mail Address"
                type="email"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.email.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="relative z-0 flex flex-row w-full group">
            <div class="relative z-0 w-full mb-2">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                Mobile Number
              </label>
              <input
                v-model="formData.mobileNumber"
                placeholder="Mobile Number"
                type="tel"
                id="base-input"
                maxlength="10"
                minlength="10"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.mobileNumber.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="w-full group">
            <label
              class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
            >
              Preferred Branch
            </label>
            <DropBranch v-model="formData.branch" :value="formData.branch" />
            <span
              class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
              v-for="error of v$.branch.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row justify-between gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
      >
        <div class="flex justify-start items-end max-sm:mt-0">
          <BaseButton
            :icon="mdiArrowLeft"
            responsive
            @click="previous"
            buttonName="Previous"
            class="w-32 bg-indigo-900 hover:bg-indigo-800"
          />
        </div>
        <div
          class="flex gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
        >
          <div class="flex items-end justify-end">
            <BaseButton
              @click="quit"
              :icon="mdiFlagCheckered"
              responsive
              buttonName="Save and Quit"
              class="w-32 bg-red-600 hover:bg-red-700 max-sm:text-xs max-sm:h-[2.5rem]"
            />
          </div>
          <div class="flex justify-end items-end max-sm:mt-0">
            <!-- <router-link to="/form/occupation-details"> -->
            <!-- <BaseButton buttonName="Next" class="w-32" /> -->
            <BaseButton
              @click="validate"
              :icon="mdiArrowRight"
              responsive
              buttonName="Next"
              class="w-32"
            />
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>
