<template>
  <div class="overflow-hidden">
    <div class="container mt-3 thief-tree">

      <h1 class="w-11/12 mx-auto mb-6 text-xl font-bold tracking-wider text-center md:mb-8 lg:w-10/12 xl:text-2xl 2xl:w-3/4">
        Thief Skills
      </h1>

      <SkillTree :skills="skills"/>

    </div>
  </div>
</template>
 
<script>
import SkillTree from '@/components/SkillTree.vue';

export default {
  name: "Thief",
  components: {
    SkillTree
  },
  data() {
    return {
      skills: this.$store.state.thiefSkillTree
    }
  }
}
</script>