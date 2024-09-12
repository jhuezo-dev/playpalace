<template>
  <div class="relative">
    <img
      class="object-cover w-full h-52 max-h-52"
      src="../assets/Play-area-4.webp"
      alt="Play Palace rules list"
    />
    <div class="mb-6 px-4 pb-12 md:px-8 lg:px-20 xl:px-64">
      <div class="text-center my-6 relative">
        <div class="text-5xl md:text-6xl lg:text-6xl xl:text-6xl">{{ ContactTitle }}</div>
        <p
          class="mt-0 pt-6 line-height-5 font-bold text-xl md:text-2xl lg:text-2xl xl:text-2xl text-center mx-auto text-seconadry"
          style="max-width: 500px"
        >
          {{ContactSubtitle}}
        </p>
      </div>

      <div class="flex flex-col mb-8 items-center md:flex-row lg:flex-row xl:flex-row gap-4 justify-center">
        <div class="text-2xl"><a :href="`mailto:${ContactEmail}`">{{ ContactEmail }}</a></div>
        <div class="text-4xl hidden md:block lg:block xl:block">|</div>
        <div class="text-3xl"><a :href="`tel:${ContactPhone}`">{{ ContactPhone }}</a></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ContactTitle, ContactSubtitle, ContactEmail, ContactPhone } from '../constants';

</script>

<style lang="scss" scoped>

</style>