<script setup>
import Total from '@/components/Total.vue';
</script>

<template>
  <div class="container mt-8 md:mt-10 lg:mt-14">

  <h1 class="w-11/12 mx-auto mb-4 text-2xl font-bold leading-tight md:w-10/12 md:text-3xl md:mb-6 lg:w-3/4 xl:w-2/3 xl:text-4xl 2xl:w-7/12">
    Elder Scrolls V Skyrim Character Builder
  </h1>

  <div class="w-11/12 mx-auto flex flex-col md:w-10/12 lg:w-3/4 xl:w-2/3 xl:text-lg 2xl:w-7/12">
    <p>
      Plan your next character build in the Elder Scrolls V Skyrim. Choose how you will
      spend your perk points by navigating to each of the main skill trees in the
      menu above.
    </p>

    <p class="mt-8">
      Once you have chosen a skill tree, all perks under that skill will become visible.
      Simply click the perk you want to add to your build. To remove it, simply click the X
      icon that becomes visible next to the title, or hit the Clear All Perks button to remove
      them all from your build.
    </p>
  </div>

  <div class="w-11/12 mx-auto mt-8 md:w-10/12 md:mt-10 lg:w-3/4 xl:w-2/3 2xl:w-7/12">
    <Total />
  </div>

  </div>
</template>