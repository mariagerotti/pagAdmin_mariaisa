<script setup>
import { RouterView } from "vue-router";
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style>
@import "@/assets/base.css";

</style>
