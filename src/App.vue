<script setup>
import { RouterLink, RouterView } from "vue-router";
import OTP from "@/views/OTP.vue";
import SignUpView from "@/views/SignUpView.vue";
import Step1 from "@/views/PersonalInfoView.vue";
import AccountType from "@/views/AccountType.vue";
import Form from "@/layouts/Form.vue";

// const router = useRouter();
</script>

<template>
  <!-- <Form /> -->
  <!-- <AccountType /> -->
  <!-- <OTP /> -->
  <!-- <Home /> -->
  <!-- <SignIn /> -->

  <router-view />
</template>
