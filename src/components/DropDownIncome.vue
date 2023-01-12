<template>
  <Listbox as="div" v-model="selected">
    <div class="mt-1">
      <ListboxButton
        class="w-full cursor-default rounded-sm border border-gray-300 bg-gray-50 py-2 pl-3 pr-10 text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <span class="block truncate text-sm text-gray-500">{{
            selected? selected: "Income and Weath Resources"
          }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-sm bg-white py-1 text-base text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="data in dropData" :key="data.id" :value="data"
            v-slot="{ active, selected }">
            <li :class="[
              active ? 'text-white bg-indigo-600' : 'text-gray-900',
              'relative cursor-default select-none py-2 pl-3 pr-9',
            ]">
              <div class="flex items-center">
                <span :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'ml-3 block truncate',
                ]">{{ data }}</span>
              </div>

              <span v-if="selected" :class="[
                active ? 'text-white' : 'text-indigo-600',
                'absolute inset-y-0 right-0 flex items-center pr-4',
              ]">
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
  "Assets",
  "Commissions",
  "Investment Income",
  "Rents",
  "Salary",
  "Trade",
  "Other",
];

const selected = ref(dropData[-1]);
</script>
