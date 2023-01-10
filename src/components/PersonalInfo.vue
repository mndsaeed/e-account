<script setup>
import BaseCard from "./BaseCard.vue";
import FormCard from "./FormCard.vue";

import DropDownNation from "./DropDownNation.vue";
import BaseButton from "./BaseButton.vue";
import TheStepper from "./TheStepper.vue";

// export default {
//   components: { BaseCard, TheBg, BaseDropDown, DropDown, Basebutton },
// };
</script>

<template>
  <div class="flex flex-col px-5 w-full pb-5">
    <TheStepper class="mb-10" :step="1" />
    <div class="flex flex-col text-left space-y-2 mb-5">
      <div class="grid md:grid-cols-4 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            placeholder="First Name"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            placeholder="Second Name"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            placeholder="Third Name"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="relative z-0 mb-6 w-full">
          <input
            placeholder="Fourth Name"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-20">
        <div class="relative z-0 mb-6 w-full group">
          <input
            placeholder="Date of Birth"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="flex flex-row relative z-0 mb-6 w-full group">
          <div
            class="flex items-center w-full mr-5 pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
          >
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
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
              id="bordered-radio-2"
              type="radio"
              value=""
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
      </div>
      <div class="grid md:grid-cols-2 md:gap-20">
        <div class="relative z-10 mb-6 w-full group">
          <DropDownNation />
        </div>
        <div class="flex flex-row relative z-0 mb-6 w-full group">
          <div
            class="flex items-center w-full mr-5 pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
          >
            <input
              id="r-1"
              type="radio"
              value=""
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
              id="r-2"
              type="radio"
              value=""
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
      </div>
      <div class="grid md:grid-cols-2 md:gap-20">
        <div class="relative z-0 mb-6 w-full group">
          <div class="flex flex-row relative z-0 mb-6 w-full group">
            <div
              class="flex items-center w-full mr-5 pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
            >
              <input
                id="i-1"
                type="radio"
                value=""
                name="bordered-radio1"
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
                id="i-2"
                type="radio"
                value=""
                name="bordered-radio1"
                class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="i-2"
                class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                >National Number</label
              >
            </div>
          </div>
        </div>
        <div class="relative z-0 mb-6 w-full">
          <input
            placeholder="ID Number"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-end items-end mt-12">
      <router-link to="/form/contact-info">
        <BaseButton buttonName="Next" class="w-32" />
      </router-link>
    </div>
  </div>
</template>
