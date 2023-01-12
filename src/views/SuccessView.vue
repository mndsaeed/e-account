<script setup>
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "../layouts/Form.vue";
</script>

<template>
  <Form>
    <TheStepper :step="7" />
    <div class="flex flex-col justify-center items-center mt-24 text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-20 h-20">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="flex justify-center items-center">
      Application Submitted Successfully
    </div>
    <div class="flex justify-center items-center text-xs text-slate-700">
      Please allow 3-5 working days for feedback
    </div>
    <div class="flex flex-col items-end mt-[12rem]">
      <router-link to="/signIn">
        <BaseButton buttonName="Sign Out" class="w-32" />
      </router-link>
    </div>
  </Form>
</template>
