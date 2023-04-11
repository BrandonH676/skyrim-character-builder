<script setup>
import { computed } from "vue";
import { Store } from '@/stores/store.js';

const store = Store();

const totalPerks = computed(() => {
  return store.state.totalPerks;
})

const clearPerks = () => {
  store.resetAll();
}
</script>

<template>

  <div class="flex text-lg font-bold tracking-wider lg:whitespace-nowrap xl:text-xl">
    <span>Total Perks Taken:</span>
    <span class="ml-3">{{ totalPerks }}</span>
  </div>

  <div class="flex mt-1 text-lg font-bold tracking-wider lg:whitespace-nowrap xl:text-xl">
    <span>Required Character Level:</span>
    <span class="ml-3">{{ totalPerks + 1 }}</span>
  </div>

  <div class="mt-5">
    <button
      @click="clearPerks()"
      class="px-6 py-3 tracking-wider transition duration-100 bg-teal-500 rounded-lg ring-0 filter hover:brightness-125">
      Clear all Perks
    </button>
  </div>

</template>