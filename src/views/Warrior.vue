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
import json from "@/assets/skills/warrior-skills.json";

export default {
  name: "Warrior",
  components: {
    SkillTree,
    Total
  },
  data() {
    return {
      skills: json.skills
    }
  }
}
</script>