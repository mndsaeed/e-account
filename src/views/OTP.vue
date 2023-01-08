<script>
import TheBg from "../components/TheBg.vue";
import BaseCard from "../components/BaseCard.vue";
export default {
  components: { BaseCard, TheBg },
};
</script>

<template>
  <!-- <div class="h-screen bg-primary">
    <div class="flex justify-center">
      <div class="flex items-center justify-center mt-10 object-cover">
        <img class="mr-2" src="../assets/imgs/SFB-logo-2.png" alt="" />
        <h1 class="ml-2 text-3xl text-white font-serif">
          Online Account Opening
        </h1>
      </div>
    </div> -->
  <TheBg>
    <div class="mt-10">
      <BaseCard
        ><div class="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div
            class="flex flex-col items-center justify-center text-center space-y-2"
          >
            <div class="text-primary text-3xl">
              <p>One Time Password</p>
            </div>
            <div class="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your Phone +249123456789</p>
            </div>
          </div>

          <div>
            <form action="" @submit="checkForm" method="post">
              <div class="flex flex-col space-y-16">
                <div
                  class="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
                >
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="string"
                      name="string"
                      id="string1"
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                    />
                  </div>
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                    />
                  </div>
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                    />
                  </div>
                  <div class="w-16 h-16">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      maxlength="1"
                      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                      required
                    />
                  </div>
                </div>

                <div class="flex flex-col space-y-5">
                  <div>
                    <router-link to="/account-type">
                      <button
                        type="submit"
                        class="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Verify
                      </button>
                    </router-link>
                  </div>

                  <div
                    class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500"
                  >
                    <p>Didn't recieve code?</p>
                    <a
                      class="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Resend</a
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div></BaseCard
      >
    </div>
  </TheBg>
</template>
