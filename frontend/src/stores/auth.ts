import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { Notify } from 'quasar'

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
            await authService.login(username, password)
            .then((data) => {
                this.user = username
                this.token = data["data"]["access"]
                useLocalStorage("user", JSON.stringify(this.user))
                useLocalStorage("token", JSON.stringify(this.token))
                Notify.create({
                    message: 'Successfully logged in!',
                    color: 'primary',
                    actions: [
                        { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                    ]
                })
            })
            .catch((error) => {
                Notify.create({
                    message: 'Log in failed. Username or password wrong.',
                    color: 'red',
                    actions: [
                        { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                    ]
                })
            })
        },

        logout() {
            this.user = null
            this.token = null
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            Notify.create({
                message: 'Successfully logged out!',
                color: 'primary',
                actions: [
                    { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                ]
            })
        }
    }
});
