<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white fixed-top">
      <Navbar />
    </q-header>

    <q-page-container>
      <router-view />
      
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <NavbarBottom />
    </q-footer>
  </q-layout>
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
  import NavbarBottom from "./components/NavbarBottom.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
