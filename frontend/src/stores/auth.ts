import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import User from '../data/user'

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {user: "Tofi"}
    },
    actions: {
        async login() {
            this.user = "Testuser";
            useLocalStorage("user", JSON.stringify(this.user))
        },
        logout() {
            this.user = "";
            localStorage.removeItem('user');
        }
    }
});
