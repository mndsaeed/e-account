<template>
  <Listbox as="div" v-model="selected">
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-72 cursor-default rounded-sm border border-gray-300 bg-white py-2 pl-3 pr-10 text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      >
        <span class="flex items-center">
          <span class="ml-3 block truncate">{{
            selected ? selected : "Select"
          }}</span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-sm bg-white py-1 text-base text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="data in dropData"
            :key="data.id"
            :value="data"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                  >{{ data }}</span
                >
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";

const dropData = [
  "Current",

  "Savings",

  //   "Afghanistan",
  //   "Albania",
  //   "Algeria",
  //   "Andorra",
  //   "Angola",
  //   "Antigua and Barbuda",
  //   "Argentina",
  //   "Armenia",
  //   "Australia",
  //   "Austria",
  //   "Azerbaijan",
  //   "The Bahamas",
  //   "Bahrain",
  //   "Bangladesh",
  //   "Barbados",
  //   "Belarus",
  //   "Belgium",
  //   "Belize",
  //   "Benin",
  //   "Bhutan",
  //   "Bolivia",
  //   "Bosnia and Herzegovina",
  //   "Botswana",
  //   "Brazil",
  //   "Brunei",
  //   "Bulgaria",
  //   "Burkina Faso",
  //   "Burundi",
  //   "Cabo Verde",
  //   "Cambodia",
  //   "Cameroon",
  //   "Canada",
  //   "Central African Republic",
  //   "Chad",
  //   "Chile",
  //   "China",
  //   "Colombia",
  //   "Comoros",
  //   "Congo, Democratic Republic of the",
  //   "Congo, Republic of the",
  //   "Costa Rica",
  //   "Côte dIvoire",
  //   "Croatia",
  //   "Cuba",
  //   "Cyprus",
  //   "Czech Republic",
  //   "Denmark",
  //   "Djibouti",
  //   "Dominica",
  //   "Dominican Republic",
  //   "East Timor (Timor-Leste)",
  //   "Ecuador",
  //   "Egypt",
  //   "El Salvador",
  //   "Equatorial Guinea",
  //   "Eritrea",
  //   "Estonia",
  //   "Eswatini",
  //   "Ethiopia",
  //   "Fiji",
  //   "Finland",
  //   "France",
  //   "Gabon",
  //   "The Gambia",
  //   "Georgia",
  //   "Germany",
  //   "Ghana",
  //   "Greece",
  //   "Grenada",
  //   "Guatemala",
  //   "Guinea",
  //   "Guinea-Bissau",
  //   "Guyana",
  //   "Haiti",
  //   "Honduras",
  //   "Hungary",
  //   "Iceland",
  //   "India",
  //   "Indonesia",
  //   "Iran",
  //   "Iraq",
  //   "Ireland",
  //   "Israel",
  //   "Italy",
  //   "Jamaica",
  //   "Japan",
  //   "Jordan",
  //   "Kazakhstan",
  //   "Kenya",
  //   "Kiribati",
  //   "Korea, North",
  //   "Korea, South",
  //   "Kosovo",
  //   "Kuwait",
  //   "Kyrgyzstan",
  //   "Laos",
  //   "Latvia",
  //   "Lebanon",
  //   "Lesotho",
  //   "Liberia",
  //   "Libya",
  //   "Liechtenstein",
  //   "Lithuania",
  //   "Luxembourg",
  //   "Madagascar",
  //   "Malawi",
  //   "Malaysia",
  //   "Maldives",
  //   "Mali",
  //   "Malta",
  //   "Marshall Islands",
  //   "Mauritania",
  //   "Mauritius",
  //   "Mexico",
  //   "Micronesia, Federated States of",
  //   "Moldova",
  //   "Monaco",
  //   "Mongolia",
  //   "Montenegro",
  //   "Morocco",
  //   "Mozambique",
  //   "Myanmar (Burma)",
  //   "Namibia",
  //   "Nauru",
  //   "Nepal",
  //   "Netherlands",
  //   "New Zealand",
  //   "Nicaragua",
  //   "Niger",
  //   "Nigeria",
  //   "North Macedonia",
  //   "Norway",
  //   "Oman",
  //   "Pakistan",
  //   "Palau",
  //   "Panama",
  //   "Papua New Guinea",
  //   "Paraguay",
  //   "Peru",
  //   "Philippines",
  //   "Poland",
  //   "Portugal",
  //   "Qatar",
  //   "Romania",
  //   "Russia",
  //   "Rwanda",
  //   "Saint Kitts and Nevis",
  //   "Saint Lucia",
  //   "Saint Vincent and the Grenadines",
  //   "Samoa",
  //   "San Marino",
  //   "Sao Tome and Principe",
  //   "Saudi Arabia",
  //   "Senegal",
  //   "Serbia",
  //   "Seychelles",
  //   "Sierra Leone",
  //   "Singapore",
  //   "Slovakia",
  //   "Slovenia",
  //   "Solomon Islands",
  //   "Somalia",
  //   "South Africa",
  //   "Spain",
  //   "Sri Lanka",
  //   "Sudan",
  //   "Sudan, South",
  //   "Suriname",
  //   "Sweden",
  //   "Switzerland",
  //   "Syria",
  //   "Taiwan",
  //   "Tajikistan",
  //   "Tanzania",
  //   "Thailand",
  //   "Togo",
  //   "Tonga",
  //   "Trinidad and Tobago",
  //   "Tunisia",
  //   "Turkey",
  //   "Turkmenistan",
  //   "Tuvalu",
  //   "Uganda",
  //   "Ukraine",
  //   "United Arab Emirates",
  //   "United Kingdom",
  //   "United States",
  //   "Uruguay",
  //   "Uzbekistan",
  //   "Vanuatu",
  //   "Vatican City",
  //   "Venezuela",
  //   "Vietnam",
  //   "Yemen",
  //   "Zambia",
  //   "Zimbabwe",
];

const selected = ref(dropData[-1]);
</script>
