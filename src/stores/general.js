import { defineStore } from "pinia";
import { updateSettings } from "./utils";

export const useGeneralStore = defineStore({
    id: "general",
    state: () => ({
      bg_image: null,
      nav_collapsed: false,
    }),
   
    actions: {
      setBg(img) {
        this.bg_image = img;
      },
      toggleNavCollapse() {
        this.nav_collapsed = !this.nav_collapsed;
        updateSettings("nav_collapsed", this.nav_collapsed);
      },
    },
  });