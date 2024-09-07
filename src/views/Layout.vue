<template>
  <div :class="`layout ${generalStore.nav_collapsed ? 'nav_collapsed' : ''}`">
    <div
      :class="`bg_image ${generalStore.bg_image ? 'show' : ''}`"
      :style="`background-image: url(${generalStore.bg_image});`"
    ></div>
    <Navigation />
    <div class="content_wrapper">
      <div class="content_pane">
        <router-view :key="$route.fullPath" v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" class="content_bg" />
          </transition>
        </router-view>
      </div>
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

.bg_image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  background-position: center;
  background-size: cover;
}

.show {
  opacity: 1;
}

.content_wrapper {
  /* display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 50px 1fr; */
}

.content_pane {
  grid-column-start: 1;
  grid-column-end: 2;
  position: relative;
  height: 100%;
}

.content_bg {
  padding: 0px;
  overflow-y: auto;
  height: 100vh;
  margin-bottom: 6px;
}

.nav_collapsed {
  grid-template-columns: 100px 1fr;
}

@media only screen and (max-width: 480px) {
  .layout {
    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr;
  }

  .content_wrapper {
    height: calc(100vh - 60px);
  }

  .content_pane {
  }

  
}
</style>
