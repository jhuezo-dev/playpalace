<template>
  <div class="relative">
    <img
      class="object-cover w-full h-52 max-h-52"
      src="../assets/Play-area-2.webp"
      alt="Play Palace rules list"
    />
    <div class="mb-6 px-4 pb-12 md:mx-6 md:px-6 lg:mx-8 lg:px-8">
      <div class="text-center my-6 relative">
        <div class="text-5xl md:text-6xl lg:text-6xl xl:text-6xl">{{ PricingTitle }}</div>
        <p
          class="mt-0 pt-6 line-height-5 font-bold text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center mx-auto text-seconadry"
          style="max-width: 500px"
        >
          {{PricingSubtitle}}
        </p>
      </div>

      <div class="flex flex-col justify-center mx-auto w-full px-4 md:px-0 lg:px-0 lg:max-w-lg xl:max-w-3xl">
        <!-- individual prices  -->
        
        <!-- <div class="text-2xl md:text-3xl lg:text-3xl xl:text-3xl pb-2 md:pb-4 lg:pb-4 xl:pb-4 ">{{ PricesListedTitle }}</div> -->
        <img src="../assets/green-illustrated-zoo-ticket-pricing-graph.PNG" alt="">
        <!-- <div class="flex justify-around gap-4 xs:flex-col md:flex-row lg:flex-row xl:flex-row bg-white p-4">
          <div class="flex flex-col items-center">
            <div class="text-xl md:text-2xl lg:text-2xl xl:text-2xl">{{ PriceHourTitle }}</div>
            <div class="text-xl">{{ PriceHourPrice }}</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-xl md:text-2xl lg:text-2xl xl:text-2xl">{{ PriceTwoHourTitle }}</div>
            <div class="text-xl">{{ PriceTwoHourPrice }}</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-xl md:text-2xl lg:text-2xl xl:text-2xl">{{ PriceThreeHourTitle }}</div>
            <div class="text-xl">{{ PriceThreeHourPrice }}</div>
          </div>
        </div> -->

        <!-- <hr class="mt-4 solid"> -->
        <!-- package prices -->
         <div class="flex flex-col mt-4">
           <!-- <div class="text-2xl md:text-3xl lg:text-3xl xl:text-3xl pb-2 md:pb-4 lg:pb-4 xl:pb-4">{{ PricesPackagesTitle }}</div> -->
           <img src="../assets/updated-party-package.jpg" alt="Play Palace Pricing list">
         </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import {PricingTitle, PricingSubtitle, PricesListedTitle, PricesPackagesTitle, PriceHourTitle,
PriceHourPrice,
PriceTwoHourTitle,
PriceTwoHourPrice,
PriceThreeHourTitle,
PriceThreeHourPrice} from '../constants'

</script>

<style lang="scss" scoped>
hr.solid {
  border-top: 1px solid #d1d1d1;
}
</style>