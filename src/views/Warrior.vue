<script setup>
import SkillTree from '@/components/SkillTree.vue';
import { computed } from "vue";
import { Store } from '@/stores/store.js';

const store = Store();

const skills = computed(() => {
  return store.state.warriorSkillTree;
})
</script>

<template>
  <div class="overflow-hidden">
    <div class="container mt-3 warrior-tree">

      <h1 class="w-11/12 mx-auto mb-6 text-xl font-bold tracking-wider text-center md:mb-8 lg:w-10/12 xl:text-2xl 2xl:w-3/4">
        Warrior Skills
      </h1>

      <SkillTree :skills="skills"/>

    </div>
  </div>
</template>