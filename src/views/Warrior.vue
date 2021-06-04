<template>
  <div>

    <h1 class="font-bold mb-3">
      This is the Warrior skill tree
    </h1>

    <SkillTree :skills="skills"/>

    <Total />

  </div>
</template>
 
<script>
import SkillTree from '@/components/SkillTree.vue';
import Total from '@/components/Total.vue';

export default {
  name: "Warrior",
  components: {
    SkillTree,
    Total
  },
  data() {
    return {
      skills: this.$store.state.warriorSkillTree
    }
  }
}
</script>