<template>
    <div
      class="nav_link"
      :class="{
        d_active:
          active.includes(route.name) || active.includes(route.meta.navParent),
      }"
      @click="changeRoute"
    >
      <div v-if="collapsed" v-tooltip.right="text" class="tooltip"></div>
      <div class="icon">
        <slot></slot>
      </div>
      <span :class="`${collapsed ? 'hide' : 'hide_on_768'} prevent-select`">
        {{ text }}
      </span>
    </div>
  </template>
  
  <script setup>
  import { useRouter, useRoute } from "vue-router";
  const props = defineProps({
    text: {
      type: String,
      default: "Link",
    },
    path: {
      type: String,
      default: "/",
    },
    active: {
      type: [String, Array],
      default: "",
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(["clicked"]);
  const router = useRouter();
  const route = useRoute();
  
  function changeRoute() {
    emit("clicked");
    if (props.path) {
      router.push(props.path);
    }
  }
  </script>
  
  <style lang="scss">
  .nav_link {
    display: flex;
    font-size: 16px;
    align-items: center;
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    color: var(--text-gray);
    z-index: 0;
    justify-content: left;
    position: relative;
  
    span {
      padding-left: 15px;
    }
  
    .icon {
      z-index: 1;
      font-size: 20px;
      display: flex;
      align-items: center;
      height: 100%;
    }
  
    .tooltip {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      z-index: 2;
      margin: 0 25%;
    }
  
    .hide {
      display: none;
    }
  
    &:hover {
      color: var(--colors-dark);
      .icon {
        color: var(--colors-dark);
      }
    }
  }
  .d_active {
    position: relative;
    color: var(--navbar_active);
  }
  .d_active:before,
  .d_active:after {
    content: "";
    display: block;
    width: 8px;
    height: 32px;
    position: absolute;
    top: -5px;
    background: var(--navbar_active);
    border-radius: 0px 10px 10px 0;
  }
  .d_active:before {
    left: -55px;
    border-radius: 0px 10px 10px 0;
  }
  .d_active:after {
    right: -55px;
    border-radius: 10px 0px 0px 10px;
  }
  
  .dark {
    .nav_link {
      &:hover {
        color: var(--colors-light);
  
        .icon {
          color: var(--colors-light);
        }
      }
    }
    .d_active {
      color: var(--navbar_active_dark);
    }
    .d_active:before,
    .d_active:after {
      background: var(--navbar_active_dark);
    }
  }
  
  // sub navs should hide text when nav is not collapsed
  @media only screen and (max-width: 768px) {
    .h-sub-nav {
      .hide_on_768 {
        display: none;
      }
    }
  }
  </style>
  