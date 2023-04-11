import { ref } from "vue";
import { defineStore } from "pinia";

import warriorSkills from "@/assets/skills/warrior-skills.json";
import mageSkills from "@/assets/skills/mage-skills.json";
import thiefSkills from "@/assets/skills/thief-skills.json";

export const Store = defineStore('Store', () => {
  const state = ref({
    totalPerks: 0,
    warriorSkillTree: warriorSkills.skills,
    mageSkillTree: mageSkills.skills,
    thiefSkillTree: thiefSkills.skills
  });

  const incrementPerks = () => {
    state.value.totalPerks += 1;
  };

  const decrementPerks = (value) => {
    state.value.totalPerks -= value;
  };

  const resetAll = () => {
    state.value.totalPerks = 0;

    // Todo make more dry?
    state.value.warriorSkillTree.forEach((skill) => (skill.perksTaken = 0));
    state.value.warriorSkillTree.forEach((skill) =>
      skill.perks.forEach((perk) => (perk.chosen = 0))
    );

    state.value.mageSkillTree.forEach((skill) => (skill.perksTaken = 0));
    state.value.mageSkillTree.forEach((skill) =>
      skill.perks.forEach((perk) => (perk.chosen = 0))
    );

    state.value.thiefSkillTree.forEach((skill) => (skill.perksTaken = 0));
    state.value.thiefSkillTree.forEach((skill) =>
      skill.perks.forEach((perk) => (perk.chosen = 0))
    );
  };

  return {
    state,
    incrementPerks,
    decrementPerks,
    resetAll
  }
});
