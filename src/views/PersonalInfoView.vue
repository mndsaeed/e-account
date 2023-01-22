<script setup>
import BaseCard from "@/components/BaseCard.vue";
import FormCard from "@/components/FormCard.vue";
import { useUserData } from "@/stores/UserData";
import DropDownNation from "@/components/DropDownNation.vue";
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import axios from "axios";
import Form from "@/layouts/Form.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed, ref, onMounted, watch, toRefs, toRef } from "vue";
import moment from "moment";

// export default {
//   components: { BaseCard, TheBg, BaseDropDown, DropDown, Basebutton },
// };

import { useRouter } from "vue-router";
const router = useRouter();

// const checkForm = async () => {
//   console.log("submitted");
//   await router.push("/form/contact-info");
// };
// var data = ref(localStorage.getItem("formData"));

// let maxDobDate = moment().subtract(18, 'years').format('YYYY-MM-DD');

// maxDobDate = maxDobDate.getFullYear() + '-' + (maxDobDate.getMonth() + 1) + '-' + maxDobDate.getDate();

let maxDobDate = moment().subtract(18, "years").format("YYYY-MM-DD");

// maxDobDate = maxDobDate.getFullYear() + '-' + (maxDobDate.getMonth() + 1) + '-' + maxDobDate.getDate();

const formData = useUserData();

// console.log("Data: ", data.value);
const rules = computed(() => {
  return {
    firstName: { required, minLength: minLength(3) },
    secondName: { required, minLength: minLength(3) },
    thirdName: { required, minLength: minLength(3) },
    fourthName: { required, minLength: minLength(3) },
    firstNameAr: { required, minLength: minLength(3) },
    secondNameAr: { required, minLength: minLength(3) },
    thirdNameAr: { required, minLength: minLength(3) },
    fourthNameAr: { required, minLength: minLength(3) },
    dob: { required },
    gender: { required },

    resident: { required },

    idType: { required },

    idNumber: { required },
    nationality: { required },
  };
});

//  firstName: formData.firstName,
//           secondName: formData.secondName,
//           thirdName: formData.thirdName,
//           fourthName: formData.fourthName,
//           firstNameAr: formData.firstNameAr,
//           secondNameAr: formData.secondNameAr,
//           thirdNameAr: formData.thirdNameAr,
//           fourthNameAr: formData.fourthNameAr,
//           dob: formData.dob,
//           gender: formData.gender,
//           resident: formData.resident,
//           idType: formData.idType,
//           idNumber: formData.idNumber,
const v$ = useVuelidate(rules, formData);
const checkForm = async () => {
  const result = await v$.value.$validate();

  if (result) {
    try {
      await axios.post(`../../loginData.json`, {
        firstName: formData.firstName,
        secondName: formData.secondName,
        thirdName: formData.thirdName,
        fourthName: formData.fourthName,
        firstNameAr: formData.firstNameAr,
        secondNameAr: formData.secondNameAr,
        thirdNameAr: formData.thirdNameAr,
        fourthNameAr: formData.fourthNameAr,
        dob: formData.dob,
        gender: formData.gender,
        resident: formData.resident,
        idType: formData.idType,
        idNumber: formData.idNumber,
      });
    } catch (e) {
      console.log(e);
    }
    router.push("/form/contact-info");
  } else {
  }
};
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper class="mb-4" :step="1" />
    </div>
    <div class="flex flex-col w-full px-5 pb-5">
      <div class="flex flex-col mb-2 space-y-2 text-left">
        <form action="submit" @submit="checkForm">
          <div class="grid md:grid-cols-4 md:gap-6">
            <div class="relative z-0 w-full mb-2 group">
              <label
                class="block text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
                <input
                  required
                  v-model="formData.firstName"
                  placeholder="First Name"
                  onkeydown="return /[a-z]/i.test(event.key)"
                  type="text"
                  id="firstName"
                  class="bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.firstName.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-0 w-full mb-2 group">
              <label
                for="secondName"
                class="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Second Name
                <input
                  required
                  v-model="formData.secondName"
                  onkeydown="return /[a-z]/i.test(event.key)"
                  placeholder="Second Name"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.secondName.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-0 w-full mb-2 group">
              <label
                for="thirdName"
                class="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Third Name
                <input
                  required
                  v-model="formData.thirdName"
                  onkeydown="return /[a-z]/i.test(event.key)"
                  placeholder="Third Name"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.thirdName.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-0 w-full mb-2">
              <label
                for="fourthName"
                class="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Fourth Name
                <input
                  required
                  v-model="formData.fourthName"
                  onkeydown="return /[a-z]/i.test(event.key)"
                  placeholder="Fourth Name"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.fourthName.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="grid md:grid-cols-4 md:gap-6">
            <div class="relative z-0 w-full mb-2 group">
              <!-- onkeydown="return /[a-z]/i.test(event.key)" -->
              <label
                class="block text-sm text-right font-medium text-gray-900 dark:text-white"
              >
                الاسم الرابع
              </label>
              <input
                required
                v-model="formData.fourthNameAr"
                placeholder="الاسم الرابع"
                type="text"
                id="base-input"
                class="bg-gray-50 mt-1 border text-right border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.fourthNameAr.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-0 w-full mb-2 group">
              <label
                class="block text-sm text-right font-medium text-gray-900 dark:text-white"
              >
                الاسم الثالث
              </label>
              <input
                required
                v-model="formData.thirdNameAr"
                placeholder="الاسم الثالث"
                type="text"
                id="base-input"
                class="bg-gray-50 mt-1 border text-right border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.thirdNameAr.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-0 w-full mb-2 group">
              <label
                class="block text-sm text-right font-medium text-gray-900 dark:text-white"
              >
                الاسم الثاني
              </label>
              <input
                required
                v-model="formData.secondNameAr"
                placeholder="الاسم الثاني"
                type="text"
                id="base-input"
                class="bg-gray-50 mt-1 border text-right border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.secondNameAr.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="relative z-0 w-full mb-2">
              <label
                class="block text-sm text-right font-medium text-gray-900 dark:text-white"
              >
                الاسم الاول
              </label>
              <input
                required
                v-model="formData.firstNameAr"
                placeholder="الاسم الاول"
                type="text"
                id="base-input"
                class="bg-gray-50 mt-1 border text-right border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.firstNameAr.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-20 max-sm:mb-5">
            <div class="relative z-0 w-full mb-2 group">
              <label
                class="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                required
                v-model="formData.dob"
                placeholder="Date of Birth"
                type="date"
                :max="maxDobDate"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                id="base-input"
                class="bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.dob.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="flex flex-col">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <div class="relative z-0 flex flex-row w-full group">
                <div
                  class="flex items-center w-full pl-4 mr-5 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
                >
                  <input
                    required
                    v-model="formData.gender"
                    value="Male"
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
                  class="flex items-center w-full pl-4 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
                >
                  <input
                    required
                    v-model="formData.gender"
                    value="Female"
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
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.gender.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-20">
            <div class="relative z-10 w-full mb-2 group">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                Nationality
              </label>
              <DropDownNation
                v-model="formData.nationality"
                :value="formData.nationality"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.nationality.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="flex flex-col max-sm:flex-row max-sm:mb-5 mb-2">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white max-sm:flex-col max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mr-2"
              >
                Residency
              </label>
              <div class="relative z-0 flex flex-row w-full group">
                <div
                  class="flex items-center w-full pl-4 mr-5 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
                >
                  <input
                    required
                    v-model="formData.resident"
                    value="Resident"
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
                  class="flex items-center w-full pl-4 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
                >
                  <input
                    required
                    v-model="formData.resident"
                    value="Non-Resident"
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
                class="text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.resident.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-20">
            <div class="relative z-0 w-full mb-2 group">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                ID Type
              </label>
              <div class="relative z-0 flex flex-row w-full group">
                <div
                  class="flex items-center w-full pl-4 mr-5 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
                >
                  <input
                    required
                    v-model="formData.idType"
                    value="Passport"
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
                  class="flex items-center w-full pl-4 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
                >
                  <input
                    required
                    v-model="formData.idType"
                    value="National Number"
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
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.idType.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>

            <div class="relative z-0 w-full mb-2">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                ID Number
              </label>
              <input
                required
                v-model="formData.idNumber"
                placeholder="ID Number"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.idNumber.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div
      class="flex flex-row justify-end items-end align-baseline gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
    >
      <div class="flex items-end justify-end">
        <router-link to="/signin">
          <BaseButton
            @click="checkForm"
            buttonName="Save and Quit"
            class="w-32 bg-red-600 hover:bg-red-700 max-sm:text-xs max-sm:h-[2.5rem]"
          />
        </router-link>
      </div>
      <div class="flex items-end justify-end mt-2 max-sm:mt-0">
        <!-- <router-link to="/form/contact-info"> -->
        <BaseButton @click="checkForm" buttonName="Next" class="w-32" />
        <!-- </router-link> -->
      </div>
    </div>
  </Form>
</template>
