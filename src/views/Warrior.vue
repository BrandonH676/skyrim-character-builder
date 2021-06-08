<template>
  <div class="container mt-3">

    <h1 class="w-11/12 mx-auto mb-6 text-xl font-bold tracking-wider text-center md:mb-8 lg:w-10/12 xl:text-2xl 2xl:w-3/4">
      Warrior Skills
    </h1>

    <SkillTree :skills="skills"/>

  </div>
</template>
 
<script>
import SkillTree from '@/components/SkillTree.vue';

export default {
  name: "Warrior",
  components: {
    SkillTree
  },
  data() {
    return {
      skills: this.$store.state.warriorSkillTree
    }
  }
}
</script>