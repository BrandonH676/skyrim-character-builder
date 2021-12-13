<template>
  <div class="w-11/12 mx-auto pb-28 md:pb-32 lg:flex lg:w-full lg:px-4 lg:pb-28 xl:w-11/12 xl:px-0">
  
    <!-- Skill Cards Wrapper -->
    <div class="grid w-full grid-cols-8 gap-4 mx-auto md:w-3/4 lg:w-30% lg:h-none lg:mx-0 lg:pt-16">
      <div
        v-for="skill in skills"
        :key="skill.name"
        @click="setActiveSkillTree(skill)"
        class="relative pb-40% col-span-4 px-4 text-center transition duration-100 cursor-pointer select-none rounded-xl lg:pb-80% lg:px-6 skill-card"
        :class="this.activeSkillTree === skill ? 'active-skill-card' : ''">
          <div class="absolute inset-0 flex items-center justify-center opacity-20">
             <img :src="require(`../assets/img/${skill.name}-bg.png`)"
             :alt="'Elder Scrolls V Skyrim '+skill.name+' skill logo'"
             class="object-cover w-full h-full lg:object-contain">
          </div>
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full">
            <span class="mb-0.5 text-xs font-medium tracking-0.15 uppercase md:text-sm lg:text-xs xl:text-sm 2xl:text-base">
              {{skill.name}}
            </span>
            <span class="text-base font-medium tracking-wide md:text-lg xl:text-xl">
              {{skill.perksTaken}}
            </span>
          </div>
      </div>

      <div class="hidden col-span-8 mt-6 lg:block">
        <Total />
      </div>
    </div>
    <!-- Close Skill Cards Wrapper -->

    <!-- Active Tree Wrapper -->
    <div
      v-if="activeSkillTree"
      class="relative w-full mt-12 lg:w-70% lg:min-h-200 lg:mt-0 xl:min-h-260">
        <ul class="relative z-10 flex overflow-scroll text-sm break-full-width scrollbar-hide pl-5% lg:grid lg:grid-cols-12 lg:gap-2 lg:text-xs lg:mx-0 lg:pl-4 lg:overflow-visible xl:gap-5 xl:text-sm xl:pl-6">

          <li
            v-for="perk in activeSkillTree.perks"
            :key="perk.name"
            :data-name="perk.name"
            class="relative flex-shrink-0 w-64 min-h-full mr-5 select-none lg:col-span-3 lg:w-full lg:m-0">
              <div
                @click="chooseSkill(perk)"
                class="flex flex-col h-full px-6 pb-6 bg-teal-500 border cursor-pointer pt-9 lg:h-min-content lg:pt-6 lg:px-2 lg:pb-2 xl:px-3 xl:pb-3 2xl:px-4 2xl:pb-4"
                :class="perk.chosen > 0 ? 'bg-opacity-100 border-white lg:bg-opacity-40 lg:opacity-100 lg:bg-teal-500' : 'bg-opacity-50 border-transparent lg:opacity-90 lg:bg-transparent'">
                  <div
                    class="flex items-center pb-2 border-b border-white lg:items-end">
                    <span class="mt-1 font-bold leading-tight tracking-wider lg:mt-0">{{perk.name}}</span>
                    <span v-if="perk.steps > 1" class="ml-1 font-medium">({{perk.chosen}}/{{perk.steps}})</span>
                  </div>
                  <div
                    v-if="perk.chosen < perk.steps"
                    class="mt-2 lg:leading-snug">
                      {{perk.description[perk.chosen]}}
                  </div>
                  <div
                    v-else
                    class="mt-2 lg:leading-snug">
                      {{perk.description[perk.description.length - 1]}}
                  </div>
              </div>
              <button
                v-if="perk.chosen > 0"
                @click="removeSkill(perk)"
                class="absolute w-5 h-5 top-3 right-4 lg:w-3.4 lg:h-3.4 lg:top-2 lg:right-2 2xl:w-4 2xl:h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-current" viewBox="12.1 9.11 30 28.7">
                    <path d="M30.25 23.78l11.55 11c.2.19.3.4.3.65s-.1.47-.3.66l-1.5 1.43a.99.99 0 01-1.38 0L27.29 26.46l-.14.02c-.07 0-.14-.02-.21-.04L15.29 37.52a.99.99 0 01-1.38 0l-1.5-1.43c-.2-.19-.3-.41-.3-.66s.1-.46.3-.65L24 23.73 12.56 12.27a.94.94 0 010-1.37l1.49-1.5a.94.94 0 011.37 0l11.73 11.74L38.88 9.41a.94.94 0 011.37 0l1.5 1.5c.2.2.3.42.3.68 0 .26-.1.49-.3.69l-11.5 11.5z"/>
                  </svg>
              </button>
          </li>

        </ul>
        <!-- Background Image -->
        <span class="absolute bottom-0 left-0 right-0 flex items-start justify-center opacity-75 -top-10 lg:top-10">
          <img :src="require(`../assets/img/skill-${activeSkillTree.name}.png`)"
          :alt="'Elder Scrolls V Skyrim '+activeSkillTree.name+' perk selection tree'"
          class="w-auto h-72 md:h-96 lg:h-112 xl:h-140">
        </span>
        <!-- Close Background Image -->
    </div>

    <div
      v-else
      class="w-full mt-10 md:w-3/4 md:mx-auto lg:w-7/12 lg:m-0">
        <h2 class="text-lg font-medium tracking-wider lg:pl-10 xl:pl-12 xl:text-xl">
          Choose a skill to assign perk points.
        </h2>
    </div>
    <!-- Close Active Tree Wrapper -->

    <div class="relative z-10 mt-8 md:w-3/4 md:mx-auto lg:hidden">
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
      }
    },
    removeSkill(perk) {
      this.activeSkillTree.perksTaken -= perk.chosen
      this.$store.commit('DECREMENT_PERKS', perk.chosen)

      perk.chosen = 0
    }
  }
}
</script>
