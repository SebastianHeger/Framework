<template>
  <q-toolbar class="bg-primary glossy text-white">
    <q-btn stretch flat icon="settings_suggest" :to="{ name: 'About' }">
      <div class="text-h6 text-capitalize q-pl-sm">About</div>
    </q-btn>
    <q-btn stretch flat icon="auto_stories" :to="{ name: 'Limited' }">
      <div class="text-h6 text-capitalize q-pl-sm">Limited</div>
    </q-btn>

    <q-space />

    <q-btn class="absolute-center" stretch flat :to="{ name: 'Home' }">
      <div class="text-h5 text-capitalize">Framework</div>
    </q-btn>

    <q-space />

    <q-btn
      v-if="authStore.user == null"
      stretch
      flat
      icon="badge"
      :to="{ name: 'Register' }"
      ><div class="text-h6 text-capitalize q-pl-sm">Register</div>
    </q-btn>
    <q-btn
      v-if="authStore.user == null"
      stretch
      flat
      icon="login"
      :to="{ name: 'Login' }"
      ><div class="text-h6 text-capitalize q-pl-sm">Login</div>
    </q-btn>
    <q-btn
      v-if="authStore.user != null"
      stretch
      flat
      icon="face"
      :to="{ name: 'User' }"
      ><div class="text-h6 text-capitalize q-pl-sm">{{ authStore.user }}</div>
    </q-btn>
    <q-btn
      v-if="authStore.user != null"
      stretch
      flat
      icon="logout"
      @click="authStore.logout()"
      ><div class="text-h6 text-capitalize q-pl-sm">Logout</div>
    </q-btn>
  </q-toolbar>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>
