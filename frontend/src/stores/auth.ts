import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { Notify } from 'quasar'
import router from '../router'

import AuthService from '../services/auth'
const authService = new AuthService

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            token: JSON.parse(localStorage.getItem('token')),
            refreshToken: JSON.parse(localStorage.getItem('refreshToken'))
        }
    },
    actions: {
        async login(username: string, password: string) {
            await authService.login(username, password)
            .then((data) => {
                this.user = username
                this.token = data["data"]["access"]
                this.refreshToken = data["data"]["refresh"]
                useLocalStorage("user", JSON.stringify(this.user))
                useLocalStorage("token", JSON.stringify(this.token))
                useLocalStorage("refreshToken", JSON.stringify(this.refreshToken))
                router.push({ name: 'Home'})
                Notify.create({
                    message: 'Successfully logged in!',
                    color: 'positive',
                    actions: [
                        { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                    ]
                })
            })
            .catch((error) => {
                Notify.create({
                    message: 'Log in failed. Username or password wrong.',
                    color: 'negative',
                    actions: [
                        { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                    ]
                })
            })
        },

        logout() {
            this.user = null
            this.token = null
            this.refreshToken = null
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            localStorage.removeItem('refreshToken')
            router.push({ name: 'Home'})
            Notify.create({
                message: 'Successfully logged out!',
                color: 'positive',
                actions: [
                    { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                ]
            })
        }
    }
});
