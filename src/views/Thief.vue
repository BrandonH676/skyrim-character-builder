<template>
  <div class="container">

    <h1 class="w-11/12 mx-auto mb-6 text-xl font-bold text-center">
      This is the Thief skill tree
    </h1>

    <SkillTree :skills="skills"/>

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