import { createStore } from "vuex";
import warriorSkills from "@/assets/skills/warrior-skills.json";
import mageSkills from "@/assets/skills/mage-skills.json";
import thiefSkills from "@/assets/skills/thief-skills.json";

export default createStore({
  state: {
    totalPerks: 0,
    warriorSkillTree: warriorSkills.skills,
    mageSkillTree: mageSkills.skills,
    thiefSkillTree: thiefSkills.skills
  },
  mutations: {
    INCREMENT_PERKS(state) {
      state.totalPerks += 1
    },
    DECREMENT_PERKS(state, value) {
      state.totalPerks -= value
    },
    CLEAR_ALL_SKILLS(state) {
      state.totalPerks = 0

      // Todo make more dry?
      state.warriorSkillTree.forEach(skill => skill.perksTaken = 0)
      state.warriorSkillTree.forEach(skill => skill.perks.forEach(perk => perk.chosen = 0))

      state.mageSkillTree.forEach(skill => skill.perksTaken = 0)
      state.mageSkillTree.forEach(skill => skill.perks.forEach(perk => perk.chosen = 0))

      state.thiefSkillTree.forEach(skill => skill.perksTaken = 0)
      state.thiefSkillTree.forEach(skill => skill.perks.forEach(perk => perk.chosen = 0))
    }
  },
  actions: {
    ResetAll({commit}) {
      commit('CLEAR_ALL_SKILLS')
    }
  }
});
