<template>
    <div class="row justify-center">
        <div class="col-xs-12 col-sm-8 col-md-6">
            <q-card class="q-ma-md">
                <q-card-section>
                    <div class="text-h4">Hallo {{ authStore.user }}</div>
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                    <p v-if="userData !== null">Vorname: {{ userData.first_name }}</p>
                    <p v-if="userData !== null">Nachname: {{ userData.last_name }}</p>
                    <p v-if="userData !== null">E-Mail: {{ userData.email }}</p>
                    <p v-if="userData !== null">Letzter Login: {{ userData.last_login }}</p>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue"
import { useAuthStore } from "../stores/auth"
import UserService from "../services/user"

export default {
    name: "User", 
    components: {
    },
    setup() {
        const authStore = useAuthStore()
        const userService = new UserService()
        const userData=ref(null)

        onMounted(() => {
            userService.getUser(authStore.user)
            .then((result) => {
                userData.value = result["data"]
            })
            .catch((error) => {
                console.log(error)
            })
        })

        return {authStore, userData}
    } 
    
}
</script>