<script setup>
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
import { mdiArrowRight, mdiFlagCheckered, mdiArrowLeft } from "@mdi/js";

import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

// export default {
//   components: { BaseCard, TheBg, BaseDropDown, DropDown, Basebutton },
// };

import { useRouter } from "vue-router";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const router = useRouter();
// const checkForm = async () => {
//   console.log("submitted");
//   await router.push("/form/contact-info");
// };

const formData = reactive({
  terms: "",
});

const rules = computed(() => {
  return {
    terms: { required },
  };
});
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    router.push("/form/success");
    // alert("valid");
  } else {
    // alert("invalid");
  }
};
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper :step="6" />
    </div>

    <div class="flex flex-col max-sm:px-7">
      <div class="mb-5">
        <router-link to="/Form/Personal-info">
          <a class="font-bold text-primary text-md"> Personal Information </a>
        </router-link>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
      </div>
      <div class="mb-5">
        <router-link to="/form/contact-info">
          <a class="font-bold text-primary text-md">Contact Information</a>
        </router-link>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
      </div>
      <div class="mb-5">
        <router-link to="/form/occupation-details">
          <a class="font-bold text-primary text-md">Occupation Details</a>
        </router-link>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
      </div>
      <div class="mb-3">
        <router-link to="/form/cbos-form">
          <a class="font-bold text-primary text-md">CBOS Form</a>
        </router-link>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
        <div>
          <span class="text-sm font-semibold">Lorem ipsum: </span>
          <span class="text-xs"
            >dolor sit amet consectetur adipisicing elit. Necessitatibus maxime
            iure illo asperiores! Esse, praesentium.
          </span>
        </div>
      </div>
      <div class="grid mt-2 md:grid-cols-2 md:gap-20">
        <div class="flex items-center">
          <input
            v-model="formData.terms"
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <button
            class="ml-2 text-sm font-medium text-blue-600 underline dark:text-gray-300 hover:underline"
            @click="openModal"
          >
            I've the Terms and Conditions.
          </button>
          <span
            class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
            v-for="error of v$.terms.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>
      </div>

      <div
        class="flex flex-row justify-between gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
      >
        <div class="flex justify-start items-end mt-[4.5rem] max-sm:mt-0">
          <router-link to="/form/upload">
            <BaseButton
              :icon="mdiArrowLeft"
              responsive
              buttonName="Previous"
              class="w-32 bg-indigo-900 hover:bg-indigo-800"
            />
          </router-link>
        </div>
        <div
          class="flex gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
        >
          <div class="flex items-end justify-end">
            <router-link to="/signin">
              <BaseButton
                :icon="mdiFlagCheckered"
                responsive
                buttonName="Save and Quit"
                class="w-32 bg-red-600 hover:bg-red-700 max-sm:text-xs max-sm:h-[2.5rem]"
              />
            </router-link>
          </div>
          <div class="flex justify-end items-end mt-[4.5rem] max-sm:mt-0">
            <!-- <router-link to="/form/success"> -->
            <BaseButton
              :icon="mdiArrowRight"
              @click="validate"
              responsive
              buttonName="Submit"
              class="w-32"
            />
            <!-- </router-link> -->
          </div>
        </div>
      </div>
      <!-- <div class="flex flex-col items-end justify-end"> -->
      <!-- <router-link to="/form/success"> -->
      <!-- <BaseButton @click="validate" buttonName="Submit" class="w-32" /> -->
      <!-- </router-link> -->
      <!-- </div> -->
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-[40rem] max-h-[40rem] p-6 overflow-auto text-left align-middle transition-all transform bg-white rounded-sm shadow-xl"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Terms and Conditions
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum dolor ipsa cupiditate officia veniam suscipit sunt
                    quisquam omnis temporibus, dolorum, accusantium, possimus
                    magnam quos ex tempore exercitationem molestiae. In, ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis minus labore ipsam, rem omnis ipsa odio totam hic.
                    Consectetur aspernatur laborum quasi excepturi nihil, rem
                    quidem vitae et eveniet? Nisi! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Praesentium reiciendis quae
                    temporibus tenetur, voluptatum iure quam aliquid. Eius
                    quisquam unde excepturi aliquid a sunt facere ipsam! Nihil
                    maiores obcaecati voluptatem. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis quod fuga tempore quasi
                    eveniet doloribus qui consectetur accusamus quaerat rerum
                    aspernatur magnam officia quae, quos vel nobis ex suscipit
                    molestias. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Alias dicta earum, quibusdam distinctio
                    deleniti laudantium consequatur amet totam. Numquam
                    consequatur optio nihil quaerat eius minus quod, blanditiis
                    similique veritatis in? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Provident, quos assumenda
                    laudantium molestias voluptatum nisi consequatur natus
                    commodi veritatis recusandae iste, ab inventore, obcaecati
                    hic. Sequi rem sapiente quia cum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Asperiores dicta eos velit. Ea
                    eos repudiandae, nesciunt, nemo dolorum tempora quae fugit
                    ex nisi recusandae explicabo voluptas fuga veniam modi
                    alias. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Perspiciatis vero cum asperiores, eveniet illo
                    exercitationem, ipsum unde, nam vitae esse assumenda!
                    Ratione consectetur iste quaerat deserunt, nemo vitae sequi
                    culpa? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quas eveniet labore reiciendis dolor deleniti quo,
                    quisquam nemo quae perferendis neque asperiores, voluptatum
                    et, nam ex veritatis quidem numquam natus ea! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Aliquid
                    architecto ea quisquam, harum, in hic tenetur rem pariatur
                    quia, aliquam suscipit fugit. Animi, dolorem dicta iste
                    adipisci sequi facilis a! Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Harum dolor ipsa cupiditate
                    officia veniam suscipit sunt quisquam omnis temporibus,
                    dolorum, accusantium, possimus magnam quos ex tempore
                    exercitationem molestiae. In, ex. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Corporis minus labore ipsam,
                    rem omnis ipsa odio totam hic. Consectetur aspernatur
                    laborum quasi excepturi nihil, rem quidem vitae et eveniet?
                    Nisi! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Praesentium reiciendis quae temporibus tenetur,
                    voluptatum iure quam aliquid. Eius quisquam unde excepturi
                    aliquid a sunt facere ipsam! Nihil maiores obcaecati
                    voluptatem. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quis quod fuga tempore quasi eveniet
                    doloribus qui consectetur accusamus quaerat rerum aspernatur
                    magnam officia quae, quos vel nobis ex suscipit molestias.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias dicta earum, quibusdam distinctio deleniti laudantium
                    consequatur amet totam. Numquam consequatur optio nihil
                    quaerat eius minus quod, blanditiis similique veritatis in?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, quos assumenda laudantium molestias voluptatum
                    nisi consequatur natus commodi veritatis recusandae iste, ab
                    inventore, obcaecati hic. Sequi rem sapiente quia cum. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores dicta eos velit. Ea eos repudiandae, nesciunt,
                    nemo dolorum tempora quae fugit ex nisi recusandae explicabo
                    voluptas fuga veniam modi alias. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Perspiciatis vero cum
                    asperiores, eveniet illo exercitationem, ipsum unde, nam
                    vitae esse assumenda! Ratione consectetur iste quaerat
                    deserunt, nemo vitae sequi culpa? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas eveniet labore reiciendis
                    dolor deleniti quo, quisquam nemo quae perferendis neque
                    asperiores, voluptatum et, nam ex veritatis quidem numquam
                    natus ea! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aliquid architecto ea quisquam, harum, in hic tenetur
                    rem pariatur quia, aliquam suscipit fugit. Animi, dolorem
                    dicta iste adipisci sequi facilis a!
                  </p>
                </div>

                <div class="mt-4">
                  <!-- <input type="button" v-model="formData.terms" /> -->
                  <button
                    type="button"
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-sm bg-primary hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Accept
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </Form>
</template>
