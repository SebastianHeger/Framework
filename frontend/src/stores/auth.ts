import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import User from '../data/user'


export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            user: JSON.parse(localStorage.getItem('user'))
        }
    },
    actions: {
        async login(username: string, password: string) {
            
            this.user = "Testuser";
            useLocalStorage("user", JSON.stringify(this.user))
        },
        logout() {
            this.user = "";
            localStorage.removeItem('user');
        }
    }
});
