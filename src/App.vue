<script setup>
import { RouterLink, RouterView } from "vue-router";
import OTP from "./views/OTP.vue";
import Home from "./views/Home.vue";
import Step1 from "./components/PersonalInfo.vue";
import AccountType from "./views/AccountType.vue";
import Form from "./views/Form.vue";

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
