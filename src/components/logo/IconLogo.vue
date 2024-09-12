<template>
    <div
      class="icon_logo"
      :style="`
        background-image: url(${icon ? img_icon : img_logo});
        width: ${icon ? iconSize : w};
        height: ${icon ? iconSize : h};
      `"
    ></div>
  </template>
  
  <script setup>
  import img_logo from "../../assets/logo.png";
  import img_icon from "../../assets/logo-sm.png";
  const props = defineProps({
    icon: {
      type: Boolean,
      default: false,
    },
    iconSize: {
      type: String,
      default: "100%",
    },
    w: {
      type: String,
      default: "100%",
    },
    h: {
      type: String,
      default: "100%",
    },
  });
  </script>
  
  <style scoped>
  .icon_logo {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: all ease 0.1s;
    border-radius: 10px;
    /* border-radius: 60px 60px 0px 0px; */
  }
  </style>
  