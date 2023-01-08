<script>
import BaseCard from "../components/BaseCard.vue";
import TheBg from "../components/TheBg.vue";

import DropDown from "../components/DropDown.vue";
import Basebutton from "../components/BaseButton.vue";
export default {
  components: { BaseCard, TheBg, DropDown, Basebutton },
};
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
        <DropDown />
      </div>
      <div class="flex justify-center mt-6">
        <router-link to="/form/personal-info">
          <Basebutton buttonName="Next" />
        </router-link>
      </div>
    </BaseCard>
  </TheBg>
</template>
