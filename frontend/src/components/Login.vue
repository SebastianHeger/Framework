<template>
  <div class="row justify-center">
        <div class="col-xs-12 col-sm-8 col-md-4">
            <q-card class="q-ma-md">
                <q-card-section>
                    <div class="text-h4">Login</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                    <q-input class="q-pa-sm" outlined v-model="username" label="Username" />
                    <q-input class="q-pa-sm" outlined v-model="password" label="Password" />
                </q-card-section>
                <q-card-actions class="justify-center">
                    <q-btn push class="glossy q-ma-xs" color="primary" label="Login" @click="login"/>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useAuthStore } from "../stores/auth"
import AuthService from "../services/auth"

export default {
  name: "Login",
  components: {
    
  },
  setup() {
    const authStore = useAuthStore()
    const authService = new AuthService

    const username = ref("")
    const password = ref("")
    
    function login() {
        authService.login()
        store.user = username
        console.log(store.user)
    }

    return {
        username, 
        password,
        login
    }
  }
} 
</script>