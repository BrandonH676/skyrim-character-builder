<template>

  <div class="flex text-lg font-bold tracking-wider lg:whitespace-nowrap xl:text-xl">
    <span>Total Perks Taken:</span>
    <span class="ml-3">{{this.$store.state.totalPerks}}</span>
  </div>

  <div class="flex mt-1 text-lg font-bold tracking-wider lg:whitespace-nowrap xl:text-xl">
    <span>Required Character Level:</span>
    <span class="ml-3">{{this.$store.state.totalPerks + 1}}</span>
  </div>

  <div class="mt-5">
    <button
      @click="clearPerks()"
      class="px-6 py-3 tracking-wider transition duration-100 bg-teal-500 rounded-lg ring-0 filter hover:brightness-125">
      Clear all Perks
    </button>
  </div>

</template>

<script>

export default {
  name: "Total",
  methods: {
    clearPerks() {
      this.$store.dispatch('ResetAll')
    }
  }
}
  
</script>