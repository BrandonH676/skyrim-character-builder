<template>

  <div
    v-for="skill in skills"
    :key="skill.name"
    @click="setActiveSkillTree(skill)"
    class="cursor-pointer select-none">
      <span>{{skill.name}}</span>
      <span class="ml-2">{{skill.perksTaken}}</span>
  </div>

  <div
    v-if="activeSkillTree"
    class="mt-8 select-none">
      <ul>
        <li
          v-for="perk in activeSkillTree.perks"
          :key="perk.name"
          @click="chooseSkill(perk)"
          class="cursor-pointer">
            <span class="font-bold">{{perk.name}}</span>
            <span class="ml-1 text-sm">{{perk.description}}</span>
            <span class="ml-1 font-medium">({{perk.chosen}} of {{perk.steps}})</span>
        </li>
      </ul>
  </div>

</template>

<script>
  export default {
    props: {
      skills: Object
    },
    data() {
      return {
        activeSkillTree: null,
      }
    },
    methods: {
      setActiveSkillTree(skill) {
        this.activeSkillTree = skill
      },
      chooseSkill(perk) {
        if (perk.chosen < perk.steps) {
        perk.chosen += 1

        this.activeSkillTree.perksTaken += 1
        this.$store.commit('INCREMENT_PERKS')
        } else if (perk.chosen >= perk.steps) {
          this.activeSkillTree.perksTaken -= perk.chosen
          this.$store.commit('DECREMENT_PERKS', perk.chosen)

          perk.chosen = 0
        }
      }
    }
  }
</script>
