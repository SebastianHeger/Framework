<template>
    <q-toolbar class="bg-primary glossy text-white">
        <q-btn flat icon="home" label="Home" :to="{ name: 'Home'}"/>
        <q-space />
        <q-toolbar-title>Framework</q-toolbar-title>
        <q-space />
        <q-btn flat icon="explore" label="About" :to="{ name: 'About'}" />
        <q-btn flat icon="explore" label="Login" :to="{ name: 'Login'}" />
        <p>Logged in user is: {{ store.user }}</p>
    </q-toolbar>
</template>

<script>
import {useAuthStore} from "../stores/auth"

export default {
    name: "Navbar", 
    components: {
        
    },
    setup() {
        const store = useAuthStore()

        return {store}
    }
}
</script>