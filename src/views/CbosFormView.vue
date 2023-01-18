<script setup>
import DropBtype from "@/components/DropDownBtype.vue";
import DropBsector from "@/components/DropDownBsector.vue";
import DropIncome from "@/components/DropDownIncome.vue";
import DropSalary from "@/components/DropDownSrange.vue";
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
import { mdiArrowRight, mdiFlagCheckered, mdiArrowLeft } from "@mdi/js";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed, ref, watch, onMounted } from "vue";

import { useUserData } from "@/stores/UserData";
const formData = useUserData();

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const router = useRouter();

// const formData = reactive({
//   mothersName: "",
//   spouseName: "",
//   maritalStatus: "",
//   idType: "",
//   idNumber: "",
//   dateOfIssue: "",
//   dateOfExpiry: "",
//   cbosId: "",
//   terms: "",
// });

// watch(formData, (formData) => {
//   for (const property in formData) {
//     localStorage.setItem(property, JSON.stringify(formData[property]));
//   }
// });
// onMounted(() => {
//   for (const property in formData) {
//     formData[property] = JSON.parse(localStorage.getItem(property));
//     console.log(property);
//   }
// });

const rules = computed(() => {
  return {
    mothersName: { required, minLength: minLength(3) },
    // spouseName: { required, minLength: minLength(3) },
    maritalStatus: { required },
    idType: { required },
    idNumber: { required },
    dateOfIssue: { required },
    dateOfExpiry: { required },
    cbosId: { required },
    terms: { required },
  };
});
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    router.push("/form/upload");
    // alert("valid");
  } else {
    // alert("invalid");
  }
};
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper :step="4" />
    </div>
    <div class="flex flex-col w-full px-5">
      <!-- <div class="flex flex-col w-full px-5 pb-5"> -->

      <div class="relative z-0 w-full group">
        <label
          class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
        >
          Marital Status
        </label>
        <!-- <label class="text-sm" for="marititalStatus">Maritial Status</label> -->

        <div class="relative z-0 flex flex-row gap-5 mb-2 group">
          <!-- <label for="marititalStatus">Maritial Status</label> -->
          <div
            id="maritialStatus"
            class="flex items-center w-full pl-4 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
          >
            <input
              v-model="formData.maritalStatus"
              value="Single"
              id="maritial-1"
              type="radio"
              name="bordered-radio1"
              class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="maritial-1"
              class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
              >Single</label
            >
          </div>
          <div
            class="flex items-center w-full pl-4 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
          >
            <input
              v-model="formData.maritalStatus"
              value="Married"
              id="maritial-2"
              type="radio"
              name="bordered-radio1"
              class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="maritial-2"
              class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
              >Married</label
            >
          </div>
          <div
            class="flex items-center w-full pl-4 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
          >
            <input
              v-model="formData.maritalStatus"
              value="Other"
              id="maritial-3"
              type="radio"
              name="bordered-radio1"
              class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="maritial-3"
              class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
              >Other</label
            >
          </div>
        </div>
        <span
          class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
          v-for="error of v$.maritalStatus.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
        <div class="flex flex-col">
          <div class="grid md:grid-cols-2 md:gap-20">
            <div class="relative z-0 flex flex-row w-full group">
              <div class="relative z-0 w-full mb-2">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Mothers Name
                </label>
                <input
                  v-model="formData.mothersName"
                  placeholder="Mothers Name"
                  type="text"
                  onkeydown="return /[a-zA-Z]/i.test(event.key)"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 max-sm:w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.mothersName.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
            <div
              v-if="formData.maritalStatus == 'Married'"
              class="relative z-0 flex flex-row w-full group"
            >
              <div class="relative z-0 w-full mb-2">
                <label
                  class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
                >
                  Spouses Name
                </label>
                <input
                  v-model="formData.spouseName"
                  placeholder="Spouse Name"
                  onkeydown="return /[a-zA-Z]/i.test(event.key)"
                  type="text"
                  id="base-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <!-- <span
                  class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                  v-for="error of v$.spouseName.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span> -->
              </div>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 w-full group">
            <label
              class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
            >
              ID Type
            </label>
            <div class="relative z-0 flex flex-row w-full mb-2 group">
              <div
                class="flex items-center w-full pl-4 mr-5 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
              >
                <input
                  v-model="formData.idType"
                  value="Passport"
                  id="i-1"
                  type="radio"
                  name="bordered-radio2"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="i-1"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >Passport</label
                >
              </div>
              <div
                class="flex items-center w-full pl-4 border border-gray-200 rounded-sm bg-gray-50 dark:border-gray-700"
              >
                <input
                  v-model="formData.idType"
                  value="National Number"
                  id="i-2"
                  type="radio"
                  name="bordered-radio2"
                  class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="i-2"
                  class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
                  >National Number</label
                >
              </div>
            </div>
            <span
              class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
              v-for="error of v$.idType.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="relative z-0 w-full max-sm:mb-5">
            <label
              class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
            >
              ID Number
            </label>
            <input
              v-model="formData.idNumber"
              placeholder="ID Number"
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
              v-for="error of v$.idNumber.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 w-full group max-sm:mb-5 mb-2">
            <label
              class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
            >
              Date of Issue
            </label>
            <input
              v-model="formData.dateOfIssue"
              placeholder="Date of Issue"
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
              v-for="error of v$.dateOfIssue.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="relative z-0 w-full mb-2 group">
            <label
              class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
            >
              Date of Expiry
            </label>
            <input
              v-model="formData.dateOfExpiry"
              placeholder="Date of Expiry"
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span
              class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
              v-for="error of v$.dateOfExpiry.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-20">
          <div class="relative z-0 w-full group">
            <div class="relative z-0 w-full">
              <label
                class="block text-sm font-medium mb-1 text-gray-900 dark:text-white"
              >
                CBOS ID
              </label>
              <input
                v-model="formData.cbosId"
                placeholder="CBOS ID"
                type="text"
                id="base-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
                v-for="error of v$.cbosId.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
        </div>

        <div class="grid mt-2 md:grid-cols-2 md:gap-20">
          <div class="flex items-center">
            <input
              v-model="formData.terms"
              :value="true"
              id="default-checkbox"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <!-- <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-blue-600 underline dark:text-gray-300 hover:underline" -->
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
          <div class="flex justify-start items-end max-sm:mt-0">
            <router-link to="/form/occupation-details">
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
            <div class="flex justify-end items-end mt-[0.5rem] max-sm:mt-0">
              <!-- <router-link to="/form/occupation-details"> -->
              <!-- <BaseButton buttonName="Next" class="w-32" /> -->
              <BaseButton
                :icon="mdiArrowRight"
                responsive
                @click="validate"
                buttonName="Next"
                class="w-32"
              />
              <!-- </router-link> -->
            </div>
          </div>
        </div>

        <!-- <div class="flex justify-end"> -->
        <!-- <router-link to="/form/upload"> -->
        <!-- <BaseButton @click="validate" buttonName="Next" class="w-32" /> -->
        <!-- </router-link> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- </div> -->

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
                class="w-full max-w-[40rem] p-6 max-h-[40rem] overflow-auto text-left align-middle transition-all transform bg-white rounded-sm shadow-xl"
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
