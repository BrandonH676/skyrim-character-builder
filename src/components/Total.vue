<template>

  <div class="mt-8 font-bold">
    Total Perks Taken: {{this.$store.state.totalPerks}}
  </div>

  <div class="mt-1 font-bold">
    Character Level: {{this.$store.state.totalPerks + 1}}
  </div>

  <div class="mt-4">
    <button
      @click="clearPerks()">
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