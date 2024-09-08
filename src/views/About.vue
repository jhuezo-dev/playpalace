<template>
  <div class="relative">
    <img
      class="object-cover w-full h-52 max-h-52"
      src="../assets/Play-area-3.webp"
      alt="Play Palace rules list"
    />
    <div class="mb-6 px-4 pb-12 md:mx-6 md:px-6 lg:mx-8 lg:px-8">
      <div class="text-center my-6 relative">
        <div class="text-6xl">{{ AboutTitle }}</div>
        <p
          class="mt-0 py-6 line-height-5 font-bold text-xl text-center mx-auto text-seconadry"
          style="max-width: 500px"
        >
          {{AboutSubtitle}}
        </p>
      </div>

      <div class="flex flex-col gap-4 mx-auto w-full md:px-8 lg:px-8 lg:max-w-lg">
          <img src="../assets/rules-cropped.png" alt="Play Palace Rules list">
          <img src="../assets/play-area-rules-cropped.png" alt="Play Palace play area rules">
          <img src="../assets/cleaning-cropped.png" alt="Play Palace Cleaning Protocol">
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import {AboutTitle, AboutSubtitle} from '../constants'

</script>

<style lang="scss" scoped>

</style>