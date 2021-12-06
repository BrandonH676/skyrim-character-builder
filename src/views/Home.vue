<template>
  <div class="container mt-8 md:mt-10 lg:mt-14">

  <h1 class="w-11/12 mx-auto mb-4 text-2xl font-bold leading-tight md:w-10/12 md:text-3xl md:mb-6 lg:w-3/4 xl:w-2/3 xl:text-4xl 2xl:w-7/12">
    Elder Scrolls V Skyrim Character Builder
  </h1>

  <div class="w-11/12 mx-auto md:w-10/12 lg:w-3/4 xl:w-2/3 xl:text-lg 2xl:w-7/12">
    Plan your next character build in the Elder Scrolls V Skyrim. Choose how you will
    spend your perk points by navigating to each of the main skill trees in the
    menu above.
  </div>

  <div class="w-11/12 mx-auto mt-8 md:w-10/12 md:mt-10 lg:w-3/4 xl:w-2/3 2xl:w-7/12">
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
