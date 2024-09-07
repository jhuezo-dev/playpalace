<template>
  <div :class="`fullnavbar ${generalStore.nav_collapsed ? 'nav_mini' : ''}`">
    <div class="nav_card">
      <router-link to="/" class="logo_wrapper">
        <IconLogo :icon="generalStore.nav_collapsed"/>
      </router-link>
      <div class="nav_wrapper">
        <div
          class="mobile_nav_menu"
          @click="mobile_nav_menu_open = !mobile_nav_menu_open"
        >
          <svg-icon
            type="mdi"
            :path="mobile_nav_menu_open ? mdiMenuUp : mdiMenuDown"
            :size="28"
          ></svg-icon>
        </div>

        <div :class="`nav_items ${mobile_nav_menu_open ? 'show_mobile_nav' : ''}`">
          <nav-item
            text="Welcome"
            :path="`/welcome`"
            :active="['Welcome']"
            :collapsed="generalStore.nav_collapsed"
            @click="closeMobileMenu"
          >
            <svg-icon  type="mdi" :path="mdiHome" :size="20"></svg-icon>
          </nav-item>

          <nav-item
            text="About"
            :path="`/about`"
            :active="['About']"
            :collapsed="generalStore.nav_collapsed"
            @click="closeMobileMenu"
          >
            <svg-icon type="mdi" :path="mdiInformation" :size="20"></svg-icon>
          </nav-item>

          <nav-item
            text="Pricing"
            :path="`/pricing`"
            :active="['Pricing']"
            :collapsed="generalStore.nav_collapsed"
            @click="closeMobileMenu"
          >
            <svg-icon type="mdi" :path="mdiContactlessPayment" :size="20"></svg-icon>
          </nav-item>
          
          <nav-item
            text="Gallery"
            :path="`/gallery`"
            :active="['Gallery']"
            :collapsed="generalStore.nav_collapsed"
            @click="closeMobileMenu"
            >
            <svg-icon type="mdi" :path="mdiViewGallery" :size="20"></svg-icon>
          </nav-item>
          
          <nav-item
            text="Contact"
            :path="`/contact`"
            :active="['Contact']"
            :collapsed="generalStore.nav_collapsed"
            @click="closeMobileMenu"
          >
            <svg-icon type="mdi" :path="mdiEmail" :size="20"></svg-icon>
          </nav-item>
        </div>
      </div>
      <div class="bottom_wrapper">
        <div class="bottom_buttons">
          <button
            class="btn"
            @click="ToggleNavCollapse"
            size="small"
          >
            <svg-icon type="mdi" :path="mdiDockLeft" :size="18"></svg-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useGeneralStore } from "@/stores/general";
import { useRouter, useRoute } from "vue-router";
import IconLogo from "../logo/IconLogo.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import NavItem from "./NavItem.vue";
import {
  mdiDockLeft,
  mdiHome,
  mdiInformation,
  mdiMenuUp,
  mdiMenuDown,
  mdiContactlessPayment,
  mdiViewGallery,
  mdiEmail,
} from "@mdi/js";

const route = useRoute()
const router = useRouter();
const generalStore = useGeneralStore();
const mobile_nav_menu_open = ref();

function ToggleNavCollapse() {
  generalStore.toggleNavCollapse();
}

function closeMobileMenu() {
  mobile_nav_menu_open.value = false;
}
</script>

<style lang="scss" scoped>
.fullnavbar {
  width: 260px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  transition: all ease 0.1s;
  
  .separator {
    width: 100%;
    height: 1px;
    background: var(--colors-almostlight);
  }
  
  .nav_card {
    margin: 0;
    padding: 0;
    // border-radius: 60px;
    width: 260px;
    height: 100vh;
    // margin-top: 10px;
    background: var(--navbar_bg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .logo_wrapper {
      height: 140px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--navbar_bg_secondary);
      // border-radius: 60px 60px 0 0;
      margin-top: 0px;
      padding: 0;
      transition: all ease 0.1s;
    }

    .nav_wrapper {
      display: flex;
      width: 150px;

      .nav_items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        gap: 30px;
        width: inherit;
      }
    }

    .bottom_wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;

      .bottom_buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;

        button {
          height: 30px;
          font-size: 10px;
        }
      }

      
    }
  }
}
.mobile_nav_menu {
  display: none;
}

.nav_mini {
  width: 100px;

  .nav_card {
    width: 100px;

    .separator {
      width: 50%;
    }

    .logo_wrapper {
      height: 64px;
      width: 64px;
      margin-top: 10px;
      padding: 0;
    }

    .nav_wrapper {
      width: inherit;
    }

    .nav_items {
      width: inherit;
      align-items: center;

      .nav_link {
        width: inherit;
        justify-content: center;
        height: 40px;
        padding: 0;

        .icon {
          position: relative;
          top: 3px;
        }
        span {
          display: none;
        }
      }
    }

    .d_active:before,
    .d_active:after {
      top: 3px;
    }
    .d_active:before {
      left: 0px;
      border-radius: 0px 10px 10px 0;
    }
    .d_active:after {
      right: 0px;
      border-radius: 10px 0px 0px 10px;
    }

    .bottom_wrapper {
      width: inherit;
      display: flex;
      align-items: center;
      gap: 15px;

      .bottom_buttons {
        flex-direction: column;
        gap: 15px;
      }

      .user_card {
        width: 48px;
        justify-content: center;
        margin-bottom: 15px;
        padding-left: 0;

        .name {
          display: none;
        }
      }
    }
  }
}

// for phones
@media only screen and (max-width: 480px) {
  .fullnavbar {
    height: 60px;
    width: 100vw;

    .nav_card {
      height: 60px;
      width: inherit;
      flex-direction: row;
      margin: 0px;

      .logo_wrapper {
        height: 40px;
        width: 40px;
        margin: 0 0 0 10px;
      }

      .nav_wrapper {
        width: 30px;
        height: 30px;
        position: relative;

        .mobile_nav_menu {
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--text-gray);
          width: 30px;
          height: 30px;
          background: var(--colors-almostlight);
          border-radius: 100%;
        }

        .nav_items {
          display: none;
        }
      }

      .show_mobile_nav {
        display: flex !important;
        position: fixed;
        top: 58px;
        right: 0px;
        width: 165px !important;
        height: auto;
        background: var(--colors-almostlight);
        padding: 15px;
        border-radius: 8px 0 0 8px;
        gap: 20px !important;
        color: var(--text-gray);

        .nav_link {
          justify-content: left;
          padding-left: 25px;
          height: 40px !important;

          .icon {
            top: 8px;
          }

          .tooltip {
            display: none !important;
          }
          .name {
            display: flex !important;
          }
        }
      }

      .bottom_wrapper {
        width: 32px;
        height: 32px;
        margin-right: 10px;

        .bottom_buttons {
          display: none;
        }
      }

      .d_active:before,
      .d_active:after {
        display: none;
      }
    }
  }

  .nav_mini {
    .show_mobile_nav {
      .nav_link {
        .icon {
          top: 3px !important;
        }
      }
    }
  }
}
</style>