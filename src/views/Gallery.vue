<template>
  <div class="relative">
    <div class="mb-6 px-4 pb-12">
      <div class="text-center my-6 relative">
        <div class="text-6xl">{{ GalleryTitle }}</div>
        <p
          class="mt-0 py-6 line-height-5 font-bold text-2xl text-center mx-auto text-seconadry"
          style="max-width: 500px"
        >
          {{GallerySubtitle}}
        </p>
      </div>

      
      <div class="flex flex-wrap justify-center gap-4">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Ballpit.webp" alt="Play Palace Ballpit">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Play-area.webp" alt="Play Palace play area">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Play-area-2.webp" alt="Play Palace play area">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Play-area-3.webp" alt="Play Palace play area">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Play-area-4.webp" alt="Play Palace play area">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Play-area-5.webp" alt="Play Palace play area">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Play-area-6.webp" alt="Play Palace play area">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Birthday.webp" alt="Play Palace play birthday setup">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Birthday-2.webp" alt="Play Palace play birthday setup">
          <img class="object-cover lg:max-w-lg xl:max-w-xl" src="../assets/Birthday-3.webp" alt="Play Palace play birthday setup">
      </div>
    </div>  
  </div>
</template>

<script setup>
import { GalleryTitle, GallerySubtitle } from '../constants';

</script>

<style lang="scss" scoped>

</style>