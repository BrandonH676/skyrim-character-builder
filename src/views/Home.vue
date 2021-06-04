<template>

  <div class="home container">
    <h1 class="font-bold text-xl mb-3">
      Elder Scrolls V Skyrim Character Builder
    </h1>
  </div>

  <div class="container">
    <div class="w-11/12 mx-auto md:w-3/4">
      Choose your skill tree from the tabs above. Then click on the skill name to
      view a list of all perks available within that skill. Still under development!
    </div>
  </div>

  <Total />

  <div class="mt-4">
    <button
      @click="clearPerks()">
      Clear all Perks
    </button>
  </div>

</template>

<script>
import Total from '@/components/Total.vue';

export default {
  name: "Home",
  components: {
    Total
  },
  methods: {
    clearPerks() {
      this.$store.dispatch('ResetAll')
    }
  }
}

</script>
