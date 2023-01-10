<script setup>
import BaseCard from "@/components/BaseCard.vue";
import TheBg from "@/components/TheBg.vue";
import DropDown from "@/components/DropDown.vue";
import Basebutton from "@/components/BaseButton.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";
const router = useRouter();

const formData = reactive({
  accountType: "",
});
const rules = computed(() => {
  return {
    accountType: { required },
  };
});

const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    router.push("/form/personal-info");
  } else {
  }
};
// const validate = async () => {
//   var valid = "true";
//   await console.log(valid);
// };

// const checkForm = async () => {
//   if (valid == true) {
//     await router.push("/form/personal-info");
//   } else {
//     console.log("waiting");
//     console.log(this.valid);
//   }
// };

// const validate = async () => {
//   await router.push("/form/personal-info");
// };
// const checkForm = async () => {
//   await router.push("/form/personal-info");
// };
// const display = async () => {
//   const bat = tap.value;
//   const data = dropDown.bat;
//   console.log(data);
// };
// const dropData= @dropData
</script>

<template>
  <TheBg>
    <BaseCard>
      <div>
        <div
          class="flex flex-col items-center justify-center text-center space-y-2 mb-5"
        >
          <div class="font-semibold text-primary text-3xl">
            <p>Account Type</p>
          </div>
          <div class="flex flex-rowtext-sm font-medium text-gray-400">
            <p>Select the acount type you would like to open</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <DropDown v-model="formData.accountType" />
      </div>
      <div class="text-center">
        <span
          class="mt-2 font-semibold text-xs text-red-600 dark:text-red-400"
          v-for="error of v$.accountType.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
      </div>
      <div class="flex justify-center mt-6">
        <!-- <router-link to="/form/personal-info"> -->
        <Basebutton buttonName="Next" @click="validate" />
        <!-- </router-link> -->
      </div>
    </BaseCard>
  </TheBg>
</template>
