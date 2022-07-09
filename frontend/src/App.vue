<template>
  <header class="q-header q-layout__section--marginal fixed-top q-header--bordered header text-dark">
    <Navbar />
  </header>
  <p>Logged in user is: {{ store.user }}</p>
  <router-view />
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
  import {useAuthStore} from "./stores/auth"

  const store = useAuthStore()
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
