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
import moment from "moment";
import { useUserData } from "@/stores/UserData";

let maxDateOfIssue = moment().format("YYYY-MM-DD");
let minDateOfExpiry = moment().format("YYYY-MM-DD");

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
onMounted(() => {
  formData.loadForm();
});
const tryAgain = ref();
const v$ = useVuelidate(rules, formData);
const validate = async () => {
  const result = await v$.value.$validate();

  if (result) {
    // formData.pageNumber = 5;
    formData.pageUrl = "/form/upload";
    if (await formData.saveForm()) {
      router.push("/form/upload");
    } else {
      tryAgain.value = true;
    }
    // alert("valid");
  } else {
    // alert("invalid");
  }
};
const previous = async () => {
  formData.pageUrl = "/form/occupation-details";
  formData.saveForm();
  router.push("/form/occupation-details");
};
const quit = async () => {
  formData.saveForm();
  router.push("/signin");
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
          class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mother's Name
                </label>
                <input
                  v-model="formData.mothersName"
                  placeholder="Mother's Name"
                  type="text"
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
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
          <div class="relative z-0 w-full mb-2 group max-sm:mb-5">
            <label
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of Issue
            </label>
            <input
              v-model="formData.dateOfIssue"
              placeholder="Date of Issue"
              :max="maxDateOfIssue"
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
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of Expiry
            </label>
            <input
              v-model="formData.dateOfExpiry"
              placeholder="Date of Expiry"
              :min="minDateOfExpiry"
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
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
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
          <div class="flex items-end justify-start max-sm:mt-0">
            <BaseButton
              @click="previous"
              :icon="mdiArrowLeft"
              responsive
              buttonName="Previous"
              class="w-32 bg-indigo-900 hover:bg-indigo-800"
            />
          </div>
          <div
            class="flex gap-5 mt-[0.5rem] max-sm:justify-center max-sm:items-center max-sm:py-5"
          >
            <div v-if="tryAgain == true" class="text-red-600 mb-2">
              An error has occurred please try again later
            </div>
            <div class="flex items-end justify-end">
              <BaseButton
                @click="quit"
                :icon="mdiFlagCheckered"
                responsive
                buttonName="Save and Quit"
                class="w-32 bg-red-600 hover:bg-red-700 max-sm:text-xs max-sm:h-[2.5rem]"
              />
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
                    Terms and Conditions for Account Opening: Current Account 1.
                    Deposits 1.1 When opening deposit account, the Depositor
                    must completely present identification documents as required
                    by the Bank and provide information or fill in the
                    application form, as well as provide the Bank with a
                    withdrawal condition and a specimen signature whereby the
                    Depositor must not use a pseudonym or conceal the
                    Depositor’s real name in order to open a deposit account.
                    1.2 For deposits, the Depositor shall fill in the details of
                    deposit in the Bank’s deposit slip and shall always specify
                    total amount in words and numbers. The Depositor shall also
                    check the accuracy of the deposit amount printed on the
                    deposit slip with the signature of the deposit officer. In
                    case of any mistake or incompleteness, the Depositor must
                    immediately notify the Bank for correction. 1.3 For cheque
                    deposits, the Depositor shall cross the cheque prior to
                    making the deposits, provided that the amount of money shall
                    be paid when the Bank collects the funds from the cheque. In
                    case the Bank is unable to collect the funds, the Depositor
                    must immediately contact the Bank to get the returned cheque
                    within the specified time. 1.4 If the Depositor who is an
                    employee, a customer, a partner, a director of or a person
                    in any position of a juristic person deposits a cheque
                    payable to the juristic person in the Depositor’s own
                    personal account, the Bank may refuse the deposit of such a
                    cheque although such a cheque was duly endorsed by such
                    juristic person. 2. Withdrawals 2.1 For cheque withdrawals,
                    the Depositor shall use the Bank’s cheques issued
                    specifically for each individual. The Bank shall refuse
                    payment in case the Depositor used the cheque of other
                    depositors and/or other banks’ cheque. 2.2 Writing on
                    cheque, the Depositor must use a pen with non-erasable ink,
                    in case of using pencil or a pen with nonerasable ink, the
                    Bank may refuse the payment. In addition, the Bank shall not
                    be responsible for any damage occurred. 2.3 The amount in
                    both numbers and words shall always be written right next to
                    the word “Baht” with no spacing in between. The remaining
                    space shall be crossed out. 2.4 Writing a cheque for
                    instructing the Bank for making payment, the Depositor must
                    perform as follows: a. If the Depositor wishes to have the
                    Bank for making payment according to the cheque via any bank
                    account, the Depositor must cross cheque and may also write
                    the words “and company” or “& CO." within the crossed lines.
                    b. To write a cheque instructing the Bank to make payment in
                    cash, the Depositor must write the payee's name in the space
                    following the word "Pay" or can write the word "Cash" or a
                    message with a similar meaning. c. If the Depositor wishes
                    the Bank to make payment into a particular account, the
                    Depositor must write the payee's name in the space following
                    the word "Pay" and cross out the word "or Bearer" and must
                    write the word "A/C PAYEE ONLY" within the two parallel
                    crossed lines. d. A crossed cheque with writing “NOT
                    NEGOTIABLE” or other wordings with a similar meaning within
                    the two parallel crossed lines or near the crossed lines,
                    the Bank shall deposit the funds into the account of the
                    endorsee Page (2/ 8) Version1/2022_FEB or the legally
                    authorized holder of the cheque only. In case that payer
                    writes other wordings or adds a crossing differently, the
                    Bank may refuse payment of that cheque. 2.5 A stop payment
                    order to any cheque can be done by the following methods: a.
                    Make it in writing according to the form specified by the
                    Bank, indicating the cheque number, date of payment, payee
                    name and the amount of cheque. The Depositors cannot make a
                    stop payment order by phone or verbal communication. b.
                    Making via electronic systems using the identification code
                    and password of the payer. In this regard, the payer is not
                    required to submit documents to the Bank, and it shall be
                    deemed that a stop payment order to such a cheque is
                    completely effective. 3. Correction, Crossing Out 3.1 If
                    there is a crossing out or correction of any wording on a
                    cheque in a crucial part, e.g., correction of date, amount
                    or the payee’s name, the payer shall certify such crossing
                    out or correction by signing as a specimen signature. 3.2 No
                    scrape or deletion of any wording on a cheque is allowed. 4.
                    Signature 4.1 The signature on a cheque shall be the same as
                    the specimen signature submitted by the Depositor to the
                    Bank. The Bank may make a payment on a cheque with a slight
                    difference of signature from the payer’s specimen signature
                    if there is no suspicious clue that the signature is not a
                    true signature of the payer. The Bank shall not be
                    responsible for checking the rubber stamp, seal or any
                    writing other than such signature. 4.2 In case a request for
                    debit or payment transfer from the deposit account with a
                    letter of instruction as specified by the Bank, the payer
                    shall sign such letter of instruction according to the
                    signature on cheque payment in all respects. 5. Refusal of
                    Cheque Payment 5.1 Cheque submitting for a payment, if the
                    Bank considers it to be suspicious or doubtful, the Bank may
                    refuse to make a payment. 5.2 The Depositor agrees that the
                    Bank will debit the deposit account as a fee for returned
                    cheque according to the rate announced by the Bank. 5.3 In
                    case several cheques are presented for payment at the same
                    time and the deposit account has no sufficient funds to make
                    all payments, the Depositor agrees that the Bank may
                    consider making payment on any cheque as deemed appropriate.
                    5.4 If the deposit account has no sufficient funds for
                    cheque payment and the Bank was lenient and made a payment,
                    the Depositors agree that the money that the Bank has paid
                    is an overdraft payment from the Bank and the Depositor
                    agrees to be a debtor of a current account. In this regard,
                    the Depositor agrees to pay interest from the overdraft
                    amount withdrawal at the default rate in case the debtor
                    defaults on payment or breaches the conditions according to
                    the Bank’s notification, staring from the date the Bank has
                    made a payment until the debt payment is made Page (3/ 8)
                    Version1/2022_FEB in full, even if the Bank has terminated
                    the agreement. Such interest rate may change from time to
                    time and thereafter if the interest rate has been changed by
                    the Bank’s announcement, the Depositor consents the Bank to
                    charge an interest at such rate from the date of the Bank’s
                    announcement without prior notice to the Depositor.
                    Accordingly, the interest is entitled to be calculated as
                    monthly compound interest, according to the custom for
                    compound interest in the current account of commercial
                    banks. The Depositor acknowledges that the deposits,
                    withdrawals, and interest calculations made by the Bank are
                    evidence of debt and shall not dispute or make any
                    objections at all. 6. Cheque Certification Cheque that the
                    holder or the payer submits to the Bank for certification,
                    the Bank will immediately deduct the amount from that cheque
                    from the Depositor's account for reservation of payment
                    according to the certified cheque. 7. Lost Cheque or Cheque
                    Book 7.1 The Depositor must keep the cheque book in a secure
                    place and must not give a cheque that has not been filled
                    out to anyone else. If the Depositor neglects or carelessly
                    let other person get the cheque and forge the payer's
                    signature for cheque payment, and the Bank is deceived to
                    make a payment on such forged cheque, the Bank shall not be
                    responsible to the Depositor for the amount paid unless such
                    damage is caused by the willfulness or negligence of the
                    Bank. 7.2 In case a cheque book is lost or stolen, the
                    Depositor shall immediately notify the Bank in writing. The
                    Bank shall not be liable for any damage incurred from a lost
                    or stolen cheque. 7.3 In case a signed cheque is lost, the
                    Depositor shall immediately notify the Bank in writing of
                    the cheque number, amount and other details of the cheque in
                    order to stop cheque payment. In this case, the Depositors
                    shall make a report to the police officer and shall submit a
                    copy of such police report to the Bank. 8. Miscellaneous 8.1
                    Writing on documents related to the deposit or withdrawal,
                    the Depositor must use a pen with non-erasable ink,
                    otherwise, the Bank shall not be responsible for any damage
                    occurred. 8.2 Changes to a personal information, a specimen
                    signature, an address or any condition, the Depositor must
                    inform the Bank in writing by using a form specified by the
                    Bank, together with submitting the related documents and a
                    specimen signature, an address or a condition that the
                    Depositor requests to change. 8.3 In case the Depositor
                    wishes to order a cheque book, the order form which is
                    enclosed in the cheque book shall be used. The Depositor
                    shall sign the order form as the signing for cheque payment.
                    The Bank reserves the right to consider whether to give the
                    cheque book as deemed appropriate. 8.4 In case the Depositor
                    deposits a cheque into the account and it is necessary to
                    withdraw the money before knowing the result of collection,
                    the Depositor consents to the Bank to debit the deposit
                    account for a passing cheque fee at the rate specified by
                    the Bank. In case one or all of the cheque deposited into
                    the account cannot be collected, regardless of what reason,
                    the Depositor allows the Bank to debit or increase the
                    amount of the debt in the deposit account. In this regard,
                    the Depositor shall deem to be the overdraft amount
                    withdrawal from the Bank and agrees Page (4/ 8)
                    Version1/2022_FEB to be a debtor according to a current
                    account, as well as pay a compound interest to the Bank
                    until the debt payment is made in full at the default rate
                    as specified in Clause 5.4. 8.5 If the deposit amount has no
                    sufficient funds for cheque payment, the Depositor consents
                    the Bank to transfer the money from the savings account that
                    the Depositor has entered into the transfer agreement
                    between the accounts to this deposit account in order to
                    have sufficient funds in the account for cheque payment
                    according to with the Bank’s regulations, as well as the
                    Depositor consents the Bank to debit the deposit account for
                    transfer fee at the rate specified by the Bank without prior
                    notice to the Depositor. If any damage occurs, the Depositor
                    agrees to be responsible in all respects and agrees that the
                    Bank shall have the right to cancel this agreement at any
                    time. 8.6 In case the Depositor has any outstanding debts
                    with the Bank or other fees, insurance premiums, service
                    fees, and duties fee payable to the Bank, the Depositor
                    consents the Bank to debit such amount from the Depositor's
                    account. If the money in the account is not enough to pay
                    for such expenses, the Depositor shall deem that the money
                    debited by the Bank to be the overdraft amount withdrawal
                    from the Bank and agrees to be a debtor according to a
                    current account, as well as agrees to pay an interest to the
                    Bank at the default rate as specified in Clause 5.4, the
                    Depositor shall not dispute or make any objections at all.
                    8.7 The Bank may close the current account of the Depositor
                    at any time as the Bank deems appropriate without prior
                    notice to the Depositor. In the event that the Depositor
                    orders to make payment more than the amount available in the
                    account or intends to make cheque payment to prevent the use
                    of money, the Bank will consider closing the account
                    immediately. In addition, when the Bank closes the account
                    or the Depositor requests to close account under any
                    circumstances, the Depositor shall have to return all unused
                    cheques to the Bank and allow the Bank to retain money in
                    the account in order to wait for the cheque payment that the
                    Depositor has already ordered payment but still there is no
                    person presenting to claim for such money. 8.8 The Depositor
                    shall strictly comply with the regulations and relevant
                    practices of the Bank according to the terms and conditions
                    hereof. If there is any damage incurred resulting from
                    non-compliance with the terms and conditions hereof, the
                    Bank shall not be liable for any damage in all respects. 8.9
                    The Depositor agrees that the Bank has the right to add
                    and/or change the terms and conditions hereof at any time.
                    In this regard, the Bank will notify the Depositor in
                    advance via the channels specified by the Bank and the
                    Depositor agrees to comply with the terms and conditions in
                    all respects. In addition, the obligations that the Bank and
                    Depositors will have towards each other in accordance with
                    the provisions of the law as well as the methods and
                    traditions with regard to the current practices in the
                    current account that performed by general commercial banks,
                    it shall apply to the deposit and withdrawal of such current
                    account to the extent that it is not contrary to or
                    inconsistent with the terms and conditions hereof. 8.10 The
                    Bank will charge for the account maintenance fee at the rate
                    specified by the Bank in the event that the account has a
                    balance less than the minimum balance required, or any
                    deposit or withdrawal thereunder has not been made as
                    determined by the Bank. In this regard, the Bank shall
                    automatically close the account within the specified period
                    as the Bank deems appropriate when the account balance is
                    zero and there is no transfer condition between the Page (5/
                    8) Version1/2022_FEB accounts or other conditions as
                    specified by the Bank. Furthermore, in order to avoid/
                    prevent your damage from frauds, please return all unused
                    cheque books to the branch where you have accounts. 8.11 The
                    Depositor agrees that the Bank has the right to add and/or
                    change terms and conditions of Bank’s services, including
                    criteria, fee rate and/or other expenses in using the Bank’s
                    service as the Bank deems appropriate. The Bank will post an
                    announcement to inform the Depositor in a public area at the
                    Head Office, other branches of the Bank and via the Bank’s
                    website (krungthai.com). Consequently, if such amendment
                    and/or change significantly affects the Depositor's use of
                    the service, the Bank may notify the Depositor at least 30
                    days in advance through additional channels as deemed
                    appropriate, such as via SMS or email, etc. 8.12 Any
                    documentsor letters of the Bank, which are delivered to the
                    address or the workplace or the contact address or to the
                    email address or via telephone number specified in the
                    application form of deposit account opening or the Depositor
                    informed to the Bank respectively, the Depositor agrees that
                    the Bank has duly and rightfully delivered documents to the
                    Depositor. 8.13 The Bank will immediately restrain any
                    payment from the account when the Bank has acknowledged that
                    the Depositor is deceased. The heirs or the administrator of
                    the estate of the Depositor have the right to receive the
                    deposit in the account by presenting the passbook or deposit
                    slip along with the relevant documents required by the Bank
                    to prove tothe Bank's satisfaction. The Bank will then
                    consider repaying such deposit. 8.14 If two or more
                    individuals open a joint account, each co-Depositor is
                    entitled to withdraw the deposit, whether in whole or in
                    part, unless the withdrawal condition states otherwise. If
                    there is any dispute between each co-Depositor, the Bank
                    shall assume that each co-Depositor is entitled to claim
                    money in the deposit account with an equal amount from the
                    Bank. 8.15 If two or more individuals open a joint account
                    and one of the co-Depositors dies, the Bank shall consider
                    the relevant documents in order to pay the deposit to the
                    other surviving co-Depositor(s), and/or the deceased’s heirs
                    and/or the administrator of the estate (as the case may be).
                    For the deposit payment to the co-Depositor and/or
                    deceased’s heirs and/or the administrator of the estate, the
                    surviving co-Depositor(s) agrees that the Bank shall
                    consider that each of the co-Depositors has the right to
                    equally receive the deposit amount. In this regard, the Bank
                    shall pay only the deceased's eligible portion of the
                    deposit to the co-Depositor(s) and/or the deceased’s heirs
                    and/or the administrator of the estate. 8.16 In case the
                    specified law, announcement or government regulation
                    requires the Bank to disclose the information or the
                    financial transaction of the Depositor or one/some of the
                    Depositor’s customers to the government officer or the
                    government agency, when the Bank receives the request, the
                    Depositor consents the Bank to disclose such information
                    and/or to report the Depositor’s financial transactions to
                    the government officer or the government agency in all
                    respects. Page (6/ 8) Version1/2022_FEB 8.17 The Depositor
                    agrees not to bring the deposit account for incurring any
                    obligation with a person, a juristic person or other
                    financial institutions, including but not limited to a
                    transfer of a right of claim in a deposit account and/or a
                    right to receive deposit, whether in whole or in part,
                    unless the prior written consent from the Bank is obtained.
                    8.18 The Depositor agrees that the Bank has a right to
                    restrain the deposit and/or withdrawal service for the
                    Depositor’s deposit account and/or close such deposit
                    account at any time when the Bank suspects any doubtful
                    incidents related to such deposit account or the financial
                    transaction of whether the Depositor or related person to
                    the Depositor or one of the Depositor’s customer becomes the
                    account or contains financial transactions that related to
                    corruption, being against the law or using the account in an
                    illegal way, including but not limited to the anti-money
                    laundering transaction or financial support to the
                    terrorism. In this regard, the Depositor agrees not to claim
                    for any damages arising from the Bank’s action as
                    abovementioned at all. 8.19 If the Bank deposits money into
                    the Depositor’s account by any means whereby it is a wrong
                    account number or the deposit amount is incorrect, and the
                    Depositor has no legal right to such deposit amount, the
                    Depositor shall authorize the Bank to immediately debit such
                    amount from the Depositor’s account. However, the Bank shall
                    inform the Depositor of such transaction thereafter via
                    telephone. If the account balance of the Depositor has no
                    money or is insufficient for the debit, the Depositor agrees
                    to pay such amount in full to the Bank immediately upon
                    receipt of the notification from the Bank. 8.20 The
                    Depositor agrees and consents to the Bank to send and/or
                    disclose personal information, financial information and/or
                    any information, which the Depositor has provided or already
                    exists with the Bank; or the Bank has received or accessed
                    from other sources; or any other information as prescribed
                    by the agencies or the committee having the power under the
                    law; to the agencies/organizations/government agencies
                    and/or any juristic person that the Bank is a counterparty
                    or has a relationship with. The main objective is to support
                    the Bank's services such as data analysis, improvement of
                    the Bank's products or services, completing tasks that the
                    Bank hires or assigns third parties to perform on behalf of
                    the Bank (e.g., works relating to technology, IT,
                    communication, debt collection, etc.) whether in a whole or
                    in some part. In this regard, the Depositor acknowledges
                    that the Depositor can contact the Bank via Contact Center
                    Tel. 0-2111-1111 or any branch. However, the channels to
                    contact the Bank may change, increase or decrease in the
                    future. The Bank will inform the Depositor of such change on
                    the Bank's website. In addition, when the Depositor provides
                    personal information of any person other than that of the
                    Depositor himself/herself to the Bank, the Depositor
                    represents and warrants that (a) the Depositor has checked
                    the accuracy and completeness of other persons’ personal
                    information provided by the Depositor to the Bank and will
                    notify the Bank if there are any changes in the provided
                    personal information of other persons (if applicable); (b)
                    The Depositor has obtained consent or is able to rely on
                    other lawful bases for collection, usage, disclosure and/or
                    transfer of such persons' personal data in accordance with
                    applicable law; (c) The Depositor has notified about the
                    Bank's relevant privacy policy to such persons; and (d) The
                    Bank can collect, use, disclose and/or transfer personal
                    information for the purposes set out in the Bank's relevant
                    privacy policy, which may be revised from time to time. This
                    includes all purposes set forth in these terms and
                    conditions. Page (7/ 8) Version1/2022_FEB 8.21 The Depositor
                    acknowledges that being hired to open an account, buying and
                    selling an account or consenting other people to use
                    accounts in committing an offense shall get punishments by
                    the law. 8.22 The Depositor agrees to be bound and to comply
                    with the terms and conditions as specified in this
                    agreement, including the regulations and procedures as
                    specified by the Bank, both of which are stated now and/or
                    will continue to be specified in the future in all respects.
                    8.23 The Depositor acknowledges the contents of the terms
                    and conditions for Current Account and agrees that the
                    contents are in accordance with the determination of the
                    Depositor in all respects. 8.24 The Depositor agrees to pay
                    service fees, fees, and any expenses in opening a deposit
                    account and/or using the services as specified by the Bank
                    at the present and/or as announced in the future by the Bank
                    in all respects. Additionally, these terms and conditions
                    are considered as part of the application form for deposit
                    account opening. If the Depositor fails to comply with the
                    terms and conditions and/or any cautions resulting in damage
                    to the Bank and/or any person, the Depositor agrees to take
                    responsibility for such damage occurring upon the Bank’s
                    claim immediately. In the event that a fault occurs,
                    regardless of the reason for that mistake, the Depositor
                    agrees that the Bank is entitled to adjust and correct the
                    faults and errors for accuracy, including allowing the Banks
                    to debit funds and/or transfer funds from various accounts
                    of the Depositor maintained with the Bank without requiring
                    the consent of the Depositor in any way. However, the Bank
                    will notify the Depositor of the debit and/or transfer such
                    amount thereafter. 8.25 The Depositor accepts that the
                    information provided in the application form for account
                    opening as well as other documents submitted to the Bank is
                    accurate, true and complete in all respects. 8.26 The
                    Depositor allows the Bank to inspect and/or search for the
                    information from the Civil Registration and/or faces of
                    Depositor from the relevant government agencies, including
                    to contact, request some or all of Depositor’s information
                    or from any person or juristic person, if necessary and/or
                    in case the Bank deems appropriate. 8.27 The Depositor
                    allows the Bank to adjust and update the information that
                    the Bank has acquired since the date of request for opening
                    a deposit account for accuracy, in order to prevent fraud
                    crimes. 8.28 The Depositor consents the Bank to present the
                    news, and/or product information and/or Bank’s services to
                    the Depositors, including the information sending or
                    notifying via SMS and/or other electronic channels. If the
                    Depositor does not wish to receive news and/or
                    product/services information from the Bank, the Depositor
                    can notify the Bank through specified channels such as
                    Contact Center Tel. 0-2111-1111 or at any branch. Page (8/
                    8) Version1/2022_FEB Terms and Conditions for PromptPay
                    International Services Krungthai Bank Public Company Limited
                    (the “Bank”) will provide PromptPay International services
                    that are the services covering funds received from or
                    transferred overseas, subject to terms and conditions,
                    timeline and procedure including the fee determined by the
                    Bank. The customer/depositor as the user that request to use
                    the services (“User”) also agrees to the following terms and
                    conditions: (a) For services with respect to receiving funds
                    transferred from overseas, the User agrees that the Bank may
                    disclose its account name, account number and/or other
                    information to the transferor and the relevant service
                    provider in a foreign country for the purpose of compliance
                    with the laws and/or regulations that in force to the
                    service provider and for corrective checking of the
                    transaction. (b) For services with respect to transfer funds
                    to overseas, the User agrees that the Bank may disclose its
                    t account name, account number and/or other information to
                    the transferee and the relevant service provider in a
                    foreign country for the purpose of compliance with the laws
                    and/or regulations that in force to the service provider and
                    for corrective checking of the transaction. For transfer
                    funds to overseas, the User agrees and accepts that the User
                    will transfer money to overseas with the foreign currency
                    determined by the Bank and in case the User requires to
                    exchange currency from Thai Baht to such foreign currency,
                    the User agrees to exchange the money by using exchange rate
                    specified by the Bank. In addition, in case the User is Thai
                    nationality, the User shall not proceed with transferring
                    money into its own account abroad. These terms and
                    conditions shall be an integral part of terms and conditions
                    of Saving Deposit and/or Current Deposit Account that and/or
                    other relevant product or service with the Bank.
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
