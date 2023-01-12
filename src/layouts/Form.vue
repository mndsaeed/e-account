<script setup>
import { RouterLink, RouterView } from "vue-router";
import FormCard from "@/components/FormCard.vue";
import TheBg from "@/components/TheBg.vue";
</script>
<template>
  <TheBg>
    <FormCard>
      <slot/>
    </FormCard>
  </TheBg>
</template>
