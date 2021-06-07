<template>
  <div class="container">

  <h1 class="w-11/12 mx-auto mb-3 text-xl font-bold">
    Elder Scrolls V Skyrim Character Builder
  </h1>

  <div class="w-11/12 mx-auto">
    Choose your skill tree from the tabs above. Then click on the skill name to
    view a list of all perks available within that skill. Still under development!
  </div>

  <div class="w-11/12 mx-auto">
    <Total />
  </div>

  </div>
</template>

<script>
import Total from '@/components/Total.vue';

export default {
  name: "Home",
  components: {
    Total
  }
}

</script>
