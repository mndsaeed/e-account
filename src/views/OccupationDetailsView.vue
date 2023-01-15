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
  email,
  minLength,
  sameAs,
  helpers,
  maxLength,
} from "@vuelidate/validators";
import { reactive, computed, ref, watch, onMounted } from "vue";
const router = useRouter();

const formData = reactive({
  employersName: "",
  department: "",
  bArea: "",
  phoneNumber: "",
  bType: "",
  bSector: "",
  iwr: "",
  salary: "",
});

watch(formData, (formData) => {
  for (const property in formData) {
    localStorage.setItem(property, JSON.stringify(formData[property]));
  }
});
onMounted(() => {
  for (const property in formData) {
    formData[property] = JSON.parse(localStorage.getItem(property));
    console.log(property);
  }
});

const rules = computed(() => {
  return {
    employersName: { required },
    department: { required },
    bArea: { required },
    phoneNumber: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
    bType: { required },
    bSector: { required },
    iwr: { required },
    salary: { required },
  };
});
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    router.push("/form/Cbos-form");
    // alert("valid");
  } else {
    // alert("invalid");
  }
};
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper :step="3" />
    </div>
    <div class="flex flex-col w-full px-5 pb-5">
      <div class="flex flex-col">
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative flex flex-row w-full group">
            <div class="relative w-full mb-6">
              <input v-model="formData.employersName" placeholder="Employers Name" type="text" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.employersName.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="relative flex flex-row w-full group">
            <div class="relative w-full mb-6">
              <input v-model="formData.department" placeholder="Name of Department" type="text" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.department.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative flex flex-row w-full group">
            <div class="relative w-full mb-6">
              <input v-model="formData.bArea" placeholder="Area" type="text" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400" v-for="error of v$.bArea.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="relative flex flex-row w-full group">
            <div class="relative w-full mb-6">
              <input v-model="formData.phoneNumber" placeholder="Phone Number" type="tel" id="base-input" maxlength="10"
                minlength="10" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.phoneNumber.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-5 space-y-2 text-left">
          <div class="grid md:grid-cols-2 md:gap-20">
            <div class="relative z-50 w-full mb-6 group">
              <DropBtype v-model="formData.bType" :value="formData.bType" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400" v-for="error of v$.bType.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-50 w-full mb-6 group">
              <DropBsector v-model="formData.bSector" :value="formData.bSector" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.bSector.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-20">
            <div class="relative z-40 w-full mb-6 group">
              <DropIncome v-model="formData.iwr" :value="formData.iwr" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400" v-for="error of v$.iwr.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-40 w-full mb-6 group">
              <DropSalary v-model="formData.salary" :value="formData.salary" />
              <span class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400" v-for="error of v$.salary.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5">
        <div class="flex justify-start items-end mt-[4.5rem] max-sm:mt-0">
          <router-link to="/form/contact-info">
            <BaseButton :icon="mdiArrowLeft" responsive buttonName="Previous" class="w-32 bg-indigo-900 hover:bg-indigo-800" />
          </router-link>
        </div>
        <div class="flex gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5">
          <div class="flex items-end justify-end">
            <router-link to="/signin">
              <BaseButton :icon="mdiFlagCheckered" responsive buttonName="Save and Quit" class="w-32 bg-red-600 hover:bg-red-700 max-sm:text-xs max-sm:h-[2.5rem]" />
            </router-link>
          </div>
          <div class="flex justify-end items-end mt-[4.5rem] max-sm:mt-0">
            <!-- <router-link to="/form/occupation-details"> -->
            <!-- <BaseButton buttonName="Next" class="w-32" /> -->
            <BaseButton :icon="mdiArrowRight" responsive @click="validate" buttonName="Next" class="w-32" />
            <!-- </router-link> -->
          </div>
        </div>
      </div>

      <!-- <div class="flex justify-end items-end mt-[5.5rem]"> -->
      <!-- <router-link to="/form/Cbos-form"> -->
      <!-- <BaseButton @click="validate" buttonName="Next" class="w-32" /> -->
      <!-- </router-link> -->
      <!-- </div> -->
    </div>
  </Form>
</template>
