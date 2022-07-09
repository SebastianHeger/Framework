import { defineStore } from 'pinia';

import router from '../router'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: "Tofi",
        returnUrl: null
    }),
    actions: {
        async login() {
            this.user = "Testuser";
            localStorage.setItem('user', JSON.stringify(this.user));
        },
        logout() {
            this.user = "";
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});