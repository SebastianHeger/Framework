<template>
    <q-toolbar class="bg-primary glossy text-white">
        <q-btn flat icon="home" label="Home" :to="{ name: 'Home'}"/>
        <q-btn flat icon="explore" label="About" :to="{ name: 'About'}" />
        <q-btn flat icon="explore" label="Hidden" :to="{ name: 'Hidden'}" />
        <q-space />
        <q-toolbar-title class="absolute-center">Framework</q-toolbar-title>
        <q-space />
        <q-btn v-if="authStore.user==null" flat icon="badge" label="Register" :to="{ name: 'Register'}" />
        <q-btn v-if="authStore.user==null" flat icon="login" label="Login" :to="{ name: 'Login'}" />
        <q-btn v-if="authStore.user!=null" flat icon="face" :label="authStore.user" :to="{ name: 'User'}" />
        <q-btn v-if="authStore.user!=null" flat icon="logout" label="Logout" @click="authStore.logout()" />
    </q-toolbar>
</template>

<script lang="ts">
import { useAuthStore } from "../stores/auth"

export default {
    name: "Navbar", 
    components: {
        
    },
    setup() {
        const authStore = useAuthStore()

        return {authStore}
    }
}
</script>