<script setup>
import DropState from "@/components/DropDownState.vue";
import DropCity from "@/components/DropDownCity.vue";
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
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
const router = useRouter();

const formData = reactive({
  state: "",
  city: "",
  area: "",
  street: "",
  poBox: "",
  houseNumber: "",
  email: "",
  mobileNumber: "",
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
    state: { required },
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
  <Form>
    <div class="w-full flex items-center justify-center max-sm:px-5">
      <TheStepper :step="2" />
    </div>
    <div class="flex flex-col px-5 w-full pb-5">
      <div class="flex flex-col text-left space-y-2 mb-5">
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="z-10 relative mb-6 w-full group">
            <DropState v-model="formData.state" :value="formData.state" />
            <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400" v-for="error of v$.state.$errors"
              :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <div class="relative mb-6 w-full group">
            <DropCity v-model="formData.city" :value="formData.city" />
            <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400" v-for="error of v$.city.$errors"
              :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="flex flex-row relative z-0 w-full group max-sm:mb-6">
            <div class="relative z-0 w-full">
              <input v-model="formData.area" placeholder="Area" type="text" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400" v-for="error of v$.area.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-row relative z-0 w-full group">
            <div class="relative z-0 mb-6 w-full">
              <input v-model="formData.street" placeholder="Street" type="text" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400" v-for="error of v$.street.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="flex flex-row relative z-0 w-full group">
            <div class="relative z-0 mb-6 w-full">
              <input v-model="formData.poBox" placeholder="P.O BOX" type="text" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400" v-for="error of v$.poBox.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-row relative z-0 w-full group">
            <div class="relative z-0 mb-6 w-full">
              <input v-model="formData.houseNumber" placeholder="House Number" type="text" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
                v-for="error of v$.houseNumber.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="flex flex-row relative z-0 w-full group">
            <div class="relative z-0 mb-6 w-full">
              <input v-model="formData.email" placeholder="E-mail Address" type="email" id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400" v-for="error of v$.email.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="flex flex-row relative z-0 w-full group">
            <div class="relative z-0 mb-6 w-full">
              <input v-model="formData.mobileNumber" placeholder="Mobile Number" type="tel" id="base-input"
                maxlength="10" minlength="10"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <span class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
                v-for="error of v$.mobileNumber.$errors" :key="error.$uid">
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between gap-5">
        <div class="flex justify-start items-end mt-[4.5rem]">
          <router-link to="/form/personal-info">
            <BaseButton buttonName="Previous" class="w-32 bg-indigo-900 hover:bg-indigo-800" />
          </router-link>
        </div>
        <div class="flex gap-5">
          <div class="flex justify-end items-end">
            <router-link to="/signin">
              <BaseButton buttonName="Save and Quit" class="w-32 bg-red-600 hover:bg-red-700" />
            </router-link>
          </div>
          <div class="flex justify-end items-end mt-[4.5rem]">
            <!-- <router-link to="/form/occupation-details"> -->
            <!-- <BaseButton buttonName="Next" class="w-32" /> -->
            <BaseButton @click="validate" buttonName="Next" class="w-32" />
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>
