<script setup>
import BaseButton from "@/components/BaseButton.vue";
import TheStepper from "@/components/TheStepper.vue";
import Form from "@/layouts/Form.vue";
import { mdiArrowRight, mdiFlagCheckered, mdiArrowLeft } from "@mdi/js";
import { ref, computed, onMounted } from "vue";
import { useUserData } from "@/stores/UserData";
import { useRouter } from "vue-router";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const rules = computed(() => {
  return {
    personalPhoto: { required },
    idPhoto: { required },
    selfieHoldingId: { required },
  };
});
const errorFormat = ref("");
const errorSize = ref("");
const errorFormat1 = ref("");
const errorSize1 = ref("");
const errorFormat2 = ref("");
const errorSize2 = ref("");
const tryAgain = ref();
const formData = useUserData();
const router = useRouter();
const personalPhoto = ref("Click to upload");
const personalPhotoUpload = async (event) => {
  event.preventDefault();

  formData.personalPhoto = event.target.files[0];
  const files = event.target.files;
  for (const file of files) {
    if (
      await formData.upload(formData.personalPhoto, file.type, "personalPhoto")
    ) {
      personalPhoto.value = event.target.files[0].name;
      tryAgain.value = false;
    } else {
      tryAgain.value = true;
    }
    errorFormat.value = formData.fileFormat;
    errorSize.value = formData.fileToo;
  }
};

const idPhoto = ref("Click to upload");
const idPhotoUpload = async (event) => {
  event.preventDefault();

  formData.idPhoto = event.target.files[0];
  const files = event.target.files;
  for (const file of files) {
    if (await formData.upload(formData.idPhoto, file.type, "idPhoto")) {
      idPhoto.value = event.target.files[0].name;
      tryAgain.value = false;
    } else {
      tryAgain.value = true;
    }
    errorFormat1.value = formData.fileFormat;
    errorSize1.value = formData.fileToo;
  }
};

const selfieHoldingId = ref("Click to upload");
const selfieHoldingIdUpload = async (event) => {
  event.preventDefault();

  formData.selfieHoldingId = event.target.files[0];
  const files = event.target.files;
  for (const file of files) {
    if (
      await formData.upload(
        formData.selfieHoldingId,
        file.type,
        "selfieHoldingId"
      )
    ) {
      selfieHoldingId.value = event.target.files[0].name;
      tryAgain.value = false;
    } else {
      tryAgain.value = true;
    }
    errorFormat2.value = formData.fileFormat;
    errorSize2.value = formData.fileToo;
  }
};
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();
  if (result) {
    formData.pageUrl = "/form/submit";
    if (tryAgain.value !== true) {
      router.push("/form/submit");
    }
  } else {
    console.log("validate");
  }
};
const previous = async () => {
  formData.pageUrl = "/form/cbos-form";
  formData.saveForm();
  router.push("/form/cbos-form");
};
const quit = async () => {
  formData.saveForm();
  router.push("/signin");
};
onMounted(async () => {
  await formData.download();
  personalPhoto.value = formData.personalCheck;
  idPhoto.value = formData.idCheck;
  selfieHoldingId.value = formData.selfieCheck;
});
</script>

<template>
  <Form>
    <div class="flex items-center justify-center w-full max-sm:px-5">
      <TheStepper :step="5" />
    </div>
    <div class="grid grid-rows-3 gap-2">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file1"
          class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-fit bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div
            v-if="personalPhoto == 'Click to upload'"
            class="flex flex-col items-center justify-center pt-2 pb-2"
          >
            <svg
              aria-hidden="true"
              class="w-10 h-4 mb-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
              <path
                  d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z" />
          </svg> -->
            <h1 class="font-bold text-primary">Personal Photo</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">{{ personalPhoto }}</span> or
              drag and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              PNG or JPG (MAX. 3.5 MB)
            </p>
          </div>

          <div
            v-else
            class="flex flex-col items-center justify-center pt-2 pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25px"
              height="25px"
            >
              <path
                d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"
              />
            </svg>
            <h1 class="font-bold text-primary">Personal Photo</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">{{ personalPhoto }}</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400"></p>
            <div v-if="errorSize == true" class="text-red-600 mb-2 flex">
              File is too Large
            </div>
            <div v-if="errorFormat == true" class="text-red-600 mb-2 flex">
              Wrong file format
            </div>
          </div>
          <span
            class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
            v-for="error of v$.personalPhoto.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
          <input
            required
            id="dropzone-file1"
            v-on:change="personalPhotoUpload"
            type="file"
            class="hidden"
          />
        </label>
      </div>

      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file2"
          class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-fit bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div
            v-if="idPhoto != 'Click to upload'"
            class="flex flex-col items-center justify-center pt-2 pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25px"
              height="25px"
            >
              <path
                d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"
              />
            </svg>
            <h1 class="font-bold text-primary">ID Photo</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">{{ idPhoto }}</span>
            </p>
          </div>

          <div
            v-else
            class="flex flex-col items-center justify-center pt-2 pb-2"
          >
            <svg
              aria-hidden="true"
              class="w-10 h-4 mb-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <h1 class="font-bold text-primary">ID Photo</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">{{ idPhoto }}</span> or drag
              and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              PNG or JPG (MAX. 3.5 MB)
            </p>
          </div>
          <div v-if="errorSize1 == true" class="text-red-600 mb-2 flex">
            File is too Large
          </div>
          <div v-if="errorFormat1 == true" class="text-red-600 mb-2 flex">
            Wrong file format
          </div>
          <span
            class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
            v-for="error of v$.idPhoto.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
          <input
            required
            id="dropzone-file2"
            v-on:change="idPhotoUpload"
            type="file"
            class="hidden"
          />
        </label>
      </div>
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file3"
          class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer h-fit bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div
            v-if="selfieHoldingId != 'Click to upload'"
            class="flex flex-col items-center justify-center pt-2 pb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25px"
              height="25px"
            >
              <path
                d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"
              />
            </svg>
            <h1 class="font-bold text-primary">Selfie Holding ID</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">{{ selfieHoldingId }}</span>
            </p>
          </div>

          <div
            v-else
            class="flex flex-col items-center justify-center pt-2 pb-2"
          >
            <svg
              aria-hidden="true"
              class="w-10 h-4 mb-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <h1 class="font-bold text-primary">Selfie Holding ID</h1>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="text-sm font-semibold">{{ selfieHoldingId }}</span>
              or drag and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              PNG or JPG (MAX. 3.5 MB)
            </p>
          </div>
          <div v-if="errorSize2 == true" class="text-red-600 mb-2 flex">
            File is too Large
          </div>
          <div v-if="errorFormat2 == true" class="text-red-600 mb-2 flex">
            Wrong file format
          </div>
          <span
            class="mt-2 text-xs font-semibold text-red-600 dark:text-red-400"
            v-for="error of v$.selfieHoldingId.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
          <input
            required
            id="dropzone-file3"
            v-on:change="selfieHoldingIdUpload"
            type="file"
            class="hidden"
          />
        </label>
      </div>
    </div>
    <div v-if="tryAgain == true" class="text-red-600 mb-2">
      An error has occurred please try again later
    </div>
    <div
      class="flex flex-row justify-between gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
    >
      <div class="flex justify-start items-end max-sm:mt-0">
        <BaseButton
          @click="previous"
          :icon="mdiArrowLeft"
          responsive
          buttonName="Previous"
          class="w-32 bg-indigo-900 hover:bg-indigo-800"
        />
      </div>
      <div
        class="flex gap-5 max-sm:justify-center max-sm:items-center max-sm:py-5"
      >
        <div class="flex items-end justify-end">
          <BaseButton
            @click="quit"
            :icon="mdiFlagCheckered"
            responsive
            buttonName="Save and Quit"
            class="w-32 bg-red-600 hover:bg-red-700 max-sm:text-xs max-sm:h-[2.5rem]"
          />
        </div>
        <div class="flex justify-end items-end mt-[1.5rem] max-sm:mt-0">
          <BaseButton
            :icon="mdiArrowRight"
            @click="validate"
            responsive
            buttonName="Next"
            class="w-32"
          />
        </div>
      </div>
    </div>
  </Form>
</template>
