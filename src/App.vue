<template>
  <section class="min-h-screen overflow-scroll text-gray-300 bg-blue-900 font-montserrat">

    <div id="nav" class="flex justify-center px-4 py-6 text-sm font-medium tracking-widest text-center md:text-base xl:text-lg">
      <keep-alive><router-link to="/">Home</router-link></keep-alive>
      <span class="mx-2">|</span>
      <keep-alive><router-link to="/warrior">Warrior</router-link></keep-alive>
      <span class="mx-2">|</span>
      <keep-alive><router-link to="/thief">Thief</router-link></keep-alive>
      <span class="mx-2">|</span>
      <keep-alive><router-link to="/mage">Mage</router-link></keep-alive>
    </div>

    <router-view />

  </section>
</template>
