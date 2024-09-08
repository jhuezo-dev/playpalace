<template>
  <div class="relative">
    <img
      class="object-cover w-full h-52 max-h-52"
      src="../assets/Play-area-3.webp"
      alt="Play Palace rules list"
    />
    <div class="mb-6 px-4 pb-12 md:mx-6 md:px-6 lg:mx-8 lg:px-8">
      <div class="text-center my-6 relative">
        <div class="text-6xl">{{ PricingTitle }}</div>
        <p
          class="mt-0 py-6 line-height-5 font-bold text-xl text-center mx-auto text-seconadry"
          style="max-width: 500px"
        >
          {{PricingSubtitle}}
        </p>
      </div>

      <div class="flex flex-column mx-auto w-full px-8 lg:max-w-lg">
        <img src="../assets/info-chart.JPG" alt="Play Palace Pricing list">
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import {PricingTitle, PricingSubtitle} from '../constants'

</script>

<style lang="scss" scoped>

</style>