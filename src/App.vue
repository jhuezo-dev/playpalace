<template>
  <div class="main_wrapper">
    <!-- <link rel="stylesheet" type="text/css" :href="`/themes/${theme}.css`" /> -->
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGeneralStore } from "./stores/general";
const generalStore = useGeneralStore();

onMounted(() => {
  const settings = JSON.parse(localStorage.getItem("playpalace"));

  if (settings?.nav_collapsed) {
    generalStore.nav_collapsed = settings.nav_collapsed;
  }
});
</script>
<style scoped>
.main_wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
</style>
