<script setup>
import TheBg from "@/components/TheBg.vue";
import BaseCard from "@/components/BaseCard.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserData } from "@/stores/UserData";
const formData = useUserData();
const router = useRouter();
// const refs = ref();
const otp2 = ref(null);
const otp3 = ref(null);
const otp4 = ref(null);
const submit = ref(null);
onMounted(() => {
  formData.loadForm();
});
const checkForm = async () => {
  formData.pageNumber = 1;
  await router.push("/account-type");
};

// const next = async () => {
//   await otp3.value.focus();
//   console.log("focus");
// };

const next2 = (e) => {
  otp2.value.focus();
};
const next3 = () => {
  otp3.value.focus();
};
const next4 = () => {
  otp4.value.focus();
};
const next5 = () => {
  submit.value.focus();
};
//   if (result) {
//     router.push("/otp");
//   } else {
//   }
// };
// async submitForm(){
//   this.$router.go("/account-type");
// };
</script>

<template>
  <TheBg>
    <div class="mt-10">
      <BaseCard>
        <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div
            class="flex flex-col items-center justify-center text-center space-y-2"
          >
            <div class="text-primary text-3xl">
              <p>One Time Password</p>
            </div>
            <div class="flex flex-row text-sm font-medium text-gray-400">
              <p>
                We have sent a code to your Phone {{ formData.mobileNumber }} or
                email
                {{ formData.email }}
              </p>
            </div>
          </div>

          <div>
            <form action="" @submit.prevent="checkForm" method="post">
              <div class="flex flex-col space-y-16">
                <div
                  class="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
                >
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      id="otp-1"
                      name="otp-1"
                      data-next="otp-2"
                      ref="otp1"
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                      @keyup="next2"
                    />
                  </div>
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      id="otp-2"
                      name="otp-2"
                      ref="otp2"
                      data-next="otp-3"
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                      @input="next3"
                    />
                  </div>
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      id="otp-3"
                      name="otp-3"
                      ref="otp3"
                      data-next="otp-4"
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                      @input="next4"
                    />
                  </div>
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      id="otp-4"
                      name="otp-4"
                      ref="otp4"
                      data-next="otp-2"
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                      @input="next5"
                    />
                  </div>
                </div>

                <div class="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      ref="submit"
                      class="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Verify
                    </button>
                  </div>

                  <div
                    class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500"
                  >
                    <p>Didn't recieve code?</p>
                    <a
                      class="flex flex-row items-center text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Resend</a
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </BaseCard>
    </div>
  </TheBg>
</template>
