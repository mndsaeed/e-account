<script setup>
import DropBtype from "@/components/DropDownBtype.vue";
import DropBsector from "@/components/DropDownBsector.vue";
import DropIncome from "@/components/DropDownIncome.vue";
import DropSalary from "@/components/DropDownSrange.vue";
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
import { mdiArrowRight, mdiFlagCheckered, mdiArrowLeft } from "@mdi/js";

import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import {
  required,
  requiredIf,
  email,
  minLength,
  sameAs,
  helpers,
  maxLength,
  numeric,
} from "@vuelidate/validators";
import { reactive, computed, ref, watch, onMounted } from "vue";

import { useUserData } from "@/stores/UserData";
const formData = useUserData();

const router = useRouter();

// const formData = reactive({
//   employersName: "",
//   department: "",
//   bArea: "",
//   phoneNumber: "",
//   bType: "",
//   bSector: "",
//   iwr: "",
//   salary: "",
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
    employersName: { required },
    department: { required },
    bArea: { required },
    phoneNumber: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
      numeric,
    },
    bType: { required },
    bTypeOther: { requiredIf: requiredIf(formData.bType == "Other") },
    bSector: { required },
    bSectorOther: { requiredIf: requiredIf(formData.bSector == "Other") },
    iwr: { required },
    iwrOther: { requiredIf: requiredIf(formData.iwr == "Other") },
    salary: { required },
  };
});
onMounted(() => {
  formData.loadForm();
});
const tryAgain = ref();
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    // formData.pageNumber = 4;
    formData.pageUrl = "/form/Cbos-form";
    if (await formData.saveForm()) {
      router.push("/form/Cbos-form");
    } else {
      tryAgain.value = true;
    }

    // alert("valid");
  } else {
    // alert("invalid");
  }
};
const previous = async () => {
  formData.pageUrl = "/form/contact-info";
  formData.saveForm();
  router.push("/form/contact-info");
};
const quit = async () => {
  formData.saveForm();
  router.push("/signin");
};
// window.onbeforeunload = function () {
//   return "Unsaved data will be lost if you leave the page, are you sure?";
// };

watch(
  () => formData.iwr,
  (iwr) => {
    if (iwr !== "other") {
      formData.iwrOther = "";
    }
  }
);
watch(
  () => formData.bType,
  (bType) => {
    if (bType !== "other") {
      formData.bTypeOther = "";
    }
  }
);
watch(
  () => formData.bSector,
  (bSector) => {
    if (bSector !== "other") {
      formData.bSectorOther = "";
    }
  }
);
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper :step="3" />
    </div>
    <div class="grid">
      <div class="flex flex-col w-full px-5 pb-5">
        <div class="flex flex-col">
          <div class="grid md:grid-cols-2 md:gap-20">
            <div class="relative flex flex-row w-full group">
              <div class="relative w-full mb-2">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Employers Name
                </label>
                <input
                  v-model="formData.employersName"
                  placeholder="Employers Name"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.employersName.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
            <div class="relative flex flex-row w-full group">
              <div class="relative w-full mb-2">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Department
                </label>
                <input
                  v-model="formData.department"
                  placeholder="Name of Department"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.department.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-20">
            <div class="relative flex flex-row w-full group">
              <div class="relative w-full mb-2">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Area
                </label>
                <input
                  v-model="formData.bArea"
                  placeholder="Area"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.bArea.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
            <div class="relative flex flex-row w-full group">
              <div class="relative w-full mb-2">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  v-model="formData.phoneNumber"
                  placeholder="Phone Number"
                  type="tel"
                  id="base-input"
                  maxlength="10"
                  minlength="10"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  class="mt-2 mr-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.phoneNumber.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-5 space-y-2 text-left">
            <div class="grid md:grid-cols-2 md:gap-20">
              <div class="relative z-50 w-full mb-2 group">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Business Type
                </label>
                <DropBtype v-model="formData.bType" :value="formData.bType" />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.bType.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
              <div class="relative w-full mb-2 group">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Business sector
                </label>

                <DropBsector
                  v-model="formData.bSector"
                  :value="formData.bSector"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.bSector.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-20">
              <div
                v-if="formData.bType == 'Other'"
                class="relative w-full mb-2 group"
              >
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Business Type
                </label>
                <input
                  v-model="formData.bTypeOther"
                  placeholder="Other Business Type"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.bTypeOther.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
              <div
                v-if="formData.bSector == 'Other'"
                class="relative w-full mb-2 group"
              >
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Business Sector
                </label>
                <input
                  v-model="formData.bSectorOther"
                  placeholder="Other Business Sector"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.bSectorOther.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-20">
              <div class="relative w-full mb-2 group">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Income
                </label>
                <DropIncome v-model="formData.iwr" :value="formData.iwr" />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.iwr.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
              <div class="relative w-full mb-2 group">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Monthly Salary
                </label>
                <DropSalary
                  v-model="formData.salary"
                  :value="formData.salary"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.salary.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
          </div>
          <div
            v-if="formData.iwr == 'Other'"
            class="grid md:grid-cols-2 md:gap-20"
          >
            <div class="relative w-full mb-2 group">
              <input
                v-model="formData.iwrOther"
                placeholder="Other Income and Weath Resources"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.iwrOther.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>

        <!-- <div class="flex justify-end items-end mt-[5.5rem]"> -->
        <!-- <router-link to="/form/Cbos-form"> -->
        <!-- <BaseButton @click="validate" buttonName="Next" class="w-32" /> -->
        <!-- </router-link> -->
        <!-- </div> -->
        <div
          class="flex flex-row justify-between mt-[3.5rem] gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
        >
          <div v-if="tryAgain == true" class="text-red-600 mb-2">
            An error has occurred please try again later
          </div>
          <div class="flex justify-start items-end max-sm:mt-0">
            <BaseButton
              @click="previous"
              :icon="mdiArrowLeft"
              responsive
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
            <div class="flex justify-end items-end mt-[3surem] max-sm:mt-0">
              <!-- <router-link to="/form/occupation-details"> -->
              <!-- <BaseButton buttonName="Next" class="w-32" /> -->
              <BaseButton
                :icon="mdiArrowRight"
                responsive
                @click="validate"
                buttonName="Next"
                class="w-32"
              />
              <!-- </router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>
