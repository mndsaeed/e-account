<script setup>
import DropBtype from "./DropDownBtype.vue";
import DropBsector from "./DropDownBsector.vue";
import DropIncome from "./DropDownIncome.vue";
import DropSalary from "./DropDownSrange.vue";
import BaseButton from "./BaseButton.vue";

import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <div class="my-5 mb-10">
    <ol
      class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
    >
      <li
        class="flex md:w-fit items-center text-primary dark:text-blue-500 sm:after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>

          Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center text-primary after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Contact <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center text-primary after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Occupation <span class="hidden sm:inline-flex sm:ml-2">Details</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="mr-2 border rounded-full p-px bg-primary">
            <div class="mx-1.5 my-[1px] text-xs text-white">4</div></span
          >
          CBOS <span class="hidden sm:inline-flex sm:ml-2">Form</span>
        </span>
      </li>
      <li
        class="flex md:w-fit items-center after:content-[''] after:w-10 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700"
      >
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
        >
          <span class="mr-2 border rounded-full p-px"
            ><div class="mx-1.5 my-[1px] text-xs">5</div></span
          >
          Documents <span class="hidden sm:inline-flex sm:ml-2">Upload</span>
        </span>
      </li>
      <li class="flex items-center">
        <span class="mr-2 border-2 rounded-full p-px"
          ><div class="mx-1.5 my-[1px] text-xs">6</div></span
        >
        Review <span class="hidden sm:inline-flex sm:ml-2">&</span>
        <span class="hidden sm:inline-flex sm:ml-2">Submit</span>
      </li>
    </ol>
  </div>
  <div class="flex flex-col">
    <div class="grid md:grid-cols-2 md:gap-20">
      <div class="flex flex-row relative z-0 w-full group">
        <div class="relative z-0 mb-6 w-full">
          <input
            placeholder="Mothers Name"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div class="flex flex-row relative z-0 w-full group">
        <div class="relative z-0 mb-6 w-full">
          <input
            placeholder="Spouse Name"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="relative z-0 w-full group">
    <div class="flex flex-row relative z-0 mb-6 gap-5 group">
      <div
        class="flex items-center w-full pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
      >
        <input
          id="maritial-1"
          type="radio"
          value=""
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
        class="flex items-center w-full pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
      >
        <input
          id="maritial-2"
          type="radio"
          value=""
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
        class="flex items-center w-full pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
      >
        <input
          id="maritial-3"
          type="radio"
          value=""
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
    <div class="grid md:grid-cols-2 md:gap-20">
      <div class="relative z-0 w-full group">
        <div class="flex flex-row relative z-0 mb-6 w-full group">
          <div
            class="flex items-center w-full mr-5 pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
          >
            <input
              id="i-1"
              type="radio"
              value=""
              name="bordered-radio1"
              class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="i-1"
              class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
              >Passport</label
            >
          </div>
          <div
            class="flex items-center w-full pl-4 border bg-gray-50 border-gray-200 rounded-sm dark:border-gray-700"
          >
            <input
              id="i-2"
              type="radio"
              value=""
              name="bordered-radio1"
              class="w-fit h-2.5 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="i-2"
              class="w-full py-2.5 ml-2 text-sm font-sm text-gray-500 dark:text-gray-300"
              >National Number</label
            >
          </div>
        </div>
      </div>
      <div class="relative z-0 w-full">
        <input
          placeholder="ID Number"
          type="text"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-20">
      <div class="relative z-0 w-full group">
        <input
          placeholder="Date of Issue"
          type="text"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          placeholder="Date of Expiry"
          type="text"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-20">
      <div class="relative z-0 w-full group">
        <div class="relative z-0 w-full">
          <input
            placeholder="CBOS ID"
            type="text"
            id="base-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 md:gap-20 mt-20">
      <div class="flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-sm font-medium dark:text-gray-300 text-blue-600 hover:underline underline"
          ><a @click="openModal" href="#">
            I've the Terms and Conditions.</a
          ></label
        >
      </div>
      <div class="flex justify-end">
        <router-link to="/form/upload">
          <BaseButton buttonName="Next" class="w-32" />
        </router-link>
      </div>
    </div>
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
          class="flex min-h-full items-center justify-center p-4 text-center"
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
              class="w-full max-w-md transform overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-xl transition-all"
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
                  magnam quos ex tempore exercitationem molestiae. In, ex. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Corporis
                  minus labore ipsam, rem omnis ipsa odio totam hic. Consectetur
                  aspernatur laborum quasi excepturi nihil, rem quidem vitae et
                  eveniet? Nisi! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Praesentium reiciendis quae temporibus
                  tenetur, voluptatum iure quam aliquid. Eius quisquam unde
                  excepturi aliquid a sunt facere ipsam! Nihil maiores obcaecati
                  voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quis quod fuga tempore quasi eveniet doloribus qui
                  consectetur accusamus quaerat rerum aspernatur magnam officia
                  quae, quos vel nobis ex suscipit molestias. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Alias dicta earum,
                  quibusdam distinctio deleniti laudantium consequatur amet
                  totam. Numquam consequatur optio nihil quaerat eius minus
                  quod, blanditiis similique veritatis in? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Provident, quos assumenda
                  laudantium molestias voluptatum nisi consequatur natus commodi
                  veritatis recusandae iste, ab inventore, obcaecati hic. Sequi
                  rem sapiente quia cum. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Asperiores dicta eos velit. Ea eos
                  repudiandae, nesciunt, nemo dolorum tempora quae fugit ex nisi
                  recusandae explicabo voluptas fuga veniam modi alias. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis vero cum asperiores, eveniet illo exercitationem,
                  ipsum unde, nam vitae esse assumenda! Ratione consectetur iste
                  quaerat deserunt, nemo vitae sequi culpa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas eveniet labore
                  reiciendis dolor deleniti quo, quisquam nemo quae perferendis
                  neque asperiores, voluptatum et, nam ex veritatis quidem
                  numquam natus ea! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aliquid architecto ea quisquam, harum, in
                  hic tenetur rem pariatur quia, aliquam suscipit fugit. Animi,
                  dolorem dicta iste adipisci sequi facilis a!
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center w-full rounded-sm border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
</template>
