import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import AuthService from '../services/auth'
const authService = new AuthService

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            token: JSON.parse(localStorage.getItem('token'))
        }
    },
    actions: {
        async login(username: string, password: string) {
            console.log("Authstore: Login user", username)
            await authService.login(username, password)
            .then((data) => {
                console.log(data["data"])
                this.user = username
                this.token = data["data"]["access"]
                console.log(this.token)
                useLocalStorage("user", JSON.stringify(this.user))
                useLocalStorage("token", JSON.stringify(this.token))
            })
            .catch((error) => {
                console.log(error)
            })
        },

        logout() {
            console.log("Authstore: Logout", this.user)
            this.user = null
            this.token = null
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }
});
