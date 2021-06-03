<template>
  <div>

    <h1 class="font-bold mb-3">
      This is the Mage skill tree
    </h1>

    <SkillTree :skills="skills"/>

    <Total />

  </div>
</template>
 
<script>
import SkillTree from '@/components/SkillTree.vue';
import Total from '@/components/Total.vue';
import json from "@/assets/skills/mage-skills.json";

export default {
  name: "Mage",
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