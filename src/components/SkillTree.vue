<template>
  <div class="w-11/12 pb-12 mx-auto md:flex lg:w-10/12 2xl:w-3/4">

    <!-- Skill Cards Wrapper -->
    <div class="grid w-full grid-cols-8 gap-4 md:w-1/2 md:h-none lg:w-5/12">
      <div
        v-for="skill in skills"
        :key="skill.name"
        @click="setActiveSkillTree(skill)"
        class="flex flex-col col-span-4 px-4 py-12 text-center bg-gray-300 cursor-pointer select-none bg-opacity-40 rounded-xl xl:py-14">
          <span class="mb-1 font-medium tracking-wide uppercase md:text-sm xl:text-base">
            {{skill.name}}
          </span>
          <span class="text-lg font-medium tracking-wide md:text-base xl:text-lg">
            {{skill.perksTaken}}
          </span>
      </div>

      <div class="hidden col-span-8 md:block">
        <Total />
      </div>
    </div>
    <!-- Close Skill Cards Wrapper -->

    <!-- Active Tree Wrapper -->
    <div
      v-if="activeSkillTree"
      class="w-full mt-10 md:w-1/2 md:mt-0 lg:w-7/12">
        <ul class="flex flex-col md:pl-6 lg:pl-10 xl:pl-12">

          <li
            v-for="perk in activeSkillTree.perks"
            :key="perk.name"
            class="flex flex-col mb-5 select-none">
              <div
                @click="chooseSkill(perk)"
                class="flex self-start cursor-pointer">
                <span class="font-bold">{{perk.name}}</span>
                <span class="ml-1 font-medium">({{perk.chosen}} of {{perk.steps}})</span>
              </div>
              <div
                v-if="perk.chosen < perk.steps"
                class="mt-1">
                  {{perk.description[perk.chosen]}}
              </div>
              <div
                v-else
                class="mt-1">
                  {{perk.description[perk.description.length - 1]}}
              </div>
          </li>

        </ul>
    </div>
    <!-- Close Active Tree Wrapper -->

    <div class="md:hidden">
      <Total />
    </div>

  </div>
</template>

<script>
import Total from '@/components/Total.vue';

export default {
  props: {
    skills: Object
  },
  components: {
    Total
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
