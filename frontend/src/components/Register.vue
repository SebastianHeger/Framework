<template>
  <div class="row justify-center">
        <div class="col-xs-12 col-sm-8 col-md-4">
            <q-card class="q-ma-md">
                <q-card-section>
                    <div class="text-h4">Register</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                    <q-input class="q-pa-sm" outlined v-model="email" label="E-Mail" />
                    <q-input class="q-pa-sm" outlined v-model="username" label="Username" />
                    <q-input class="q-pa-sm" outlined v-model="password" label="Password" type="password" />
                </q-card-section>
                <q-card-actions class="justify-center">
                    <q-btn push class="glossy q-ma-xs" color="primary" label="Register" @click="register"/>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import AuthService from "../services/auth"
import { useAuthStore } from "../stores/auth"
import { Notify } from 'quasar'

export default {
  name: "Register",
  components: {
    
  },
  setup() {
    const authStore = useAuthStore()
    const authService = new AuthService()

    const email = ref("")
    const username = ref("")
    const password = ref("")
    
    async function register() {
        await authService.register(username.value, password.value, email.value)
        .then((data) => {
            Notify.create({
                message: 'User account successfully created.',
                color: 'positive',
                actions: [
                    { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                ]
            })
            authStore.login(username.value, password.value)
        })
        .catch((error) => {
            Notify.create({
                message: 'Registration failed.',
                color: 'negative',
                actions: [
                    { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                ]
            })
        })
    }

    return {
        email,
        username, 
        password,
        register
    }
  }
} 
</script>