<template>
  <div :class="`layout ${generalStore.nav_collapsed ? 'nav_collapsed' : ''}`">
    <Navigation />
    <div class="content_wrapper">
      <router-view :key="$route.fullPath" v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" class="content_bg" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Navigation from '../components/layout/Navigation.vue'
import { useGeneralStore } from "@/stores/general";

const generalStore = useGeneralStore();

</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 260px 1fr;
  width: 100vw;
  height: 100vh;
  background: var(--colors-almostlight);
  transition: 100ms ease-in-out;
}

.show {
  opacity: 1;
}

.content_wrapper {
  display: grid;
  grid-template-columns: calc(100vw - 260px) 1fr; 
}

.content_bg {
  padding: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  margin-bottom: 6px;
}

.nav_collapsed {
  grid-template-columns: 100px 1fr;
  
  .content_wrapper {
    grid-template-columns: calc((100vw - 100px)) 1fr;
  }
}


@media only screen and (max-width: 480px) {
  .layout {
    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;
  }
  
  .content_wrapper {
    height: calc(100dvh - 60px);
    grid-template-columns: auto 1fr;
    // height: 100%;
    // height: -webkit-fill-available;
  }
  
  .content_bg {
    height: -webkit-fill-available;
    height: 100dvh;
    // height: 100%;
  }
  
}
</style>