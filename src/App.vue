<template>
  <section class="relative min-h-screen overflow-scroll text-gray-300 bg-blue-900 font-montserrat">

    <div class="absolute inset-0 w-full h-full after:absolute after:empty-content after:inset-0 after:w-full after:h-full after:bg-black after:bg-opacity-60">
      <img src="./assets/img/star-bg-resized.jpg"
      data-credit="Night by Kyle Gregory Devaras on Unsplash"
      alt="Stars against a dark night sky"
      class="object-cover w-full h-full">
    </div>

    <div id="nav" class="relative z-10 flex justify-center px-4 py-6 text-sm font-medium tracking-widest text-center md:text-base xl:text-lg">
      <keep-alive><router-link to="/">Home</router-link></keep-alive>
      <span class="mx-2">|</span>
      <keep-alive><router-link to="/warrior">Warrior</router-link></keep-alive>
      <span class="mx-2">|</span>
      <keep-alive><router-link to="/thief">Thief</router-link></keep-alive>
      <span class="mx-2">|</span>
      <keep-alive><router-link to="/mage">Mage</router-link></keep-alive>
    </div>

    <div class="relative z-10">
      <router-view />
    </div>

  </section>
</template>
