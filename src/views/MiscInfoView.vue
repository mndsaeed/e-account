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
import { required } from "@vuelidate/validators";
import { reactive, computed, ref, onMounted, watch, toRefs, toRef } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper class="mb-4" :step="6" />
    </div>
    <div class="block text-base font-medium text-gray-900 dark:text-white mb-2">
      Are you running or already occupied any political, government or an
      executive position?
      <div class="flex flex-row mt-2 mb-2">
        <div class="flex items-center mr-10">
          <input
            id="political-1"
            type="radio"
            value="yes"
            name="political"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="political-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Yes</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="political-2"
            type="radio"
            value="no"
            name="political"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="political-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >No</label
          >
        </div>
      </div>
    </div>

    <div class="block text-base font-medium text-gray-900 dark:text-white mb-2">
      Do you have any relative who occupied any political, government or an
      executive position?
      <div class="flex flex-row mt-2 mb-2">
        <div class="flex items-center mr-10">
          <input
            id="relative-1"
            type="radio"
            value="yes"
            name="realtive"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="relative-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Yes</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="relative-2"
            type="radio"
            value="no"
            name="realtive"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="relative-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >No</label
          >
        </div>
      </div>
    </div>
    <div class="block text-base font-medium text-gray-900 dark:text-white mb-2">
      Do you have any inward and outward remittances to and from countries
      abroad?
      <div class="flex flex-row mt-2 mb-2">
        <div class="flex items-center mr-10">
          <input
            id="remittance-1"
            type="radio"
            value="yes"
            name="remittance"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="remittance-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Yes</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="remittance-2"
            type="radio"
            value="no"
            name="remittance"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="remittance-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >No</label
          >
        </div>
      </div>
    </div>
    <div class="block text-base font-medium text-gray-900 dark:text-white mb-2">
      Are you a USA citizen?
      <div class="flex flex-row mt-2 mb-2">
        <div class="flex items-center mr-10">
          <input
            id="usa-1"
            type="radio"
            value="yes"
            name="usa"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="usa-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Yes</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="usa-2"
            type="radio"
            value="no"
            name="usa"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="usa-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >No</label
          >
        </div>
      </div>
    </div>
  </Form>
</template>
