import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {
    state: () => {
        return { user: "Tofi" }
    },
    actions: {
        async login() {
            this.user = "Testuser";
            localStorage.setItem('user', JSON.stringify(this.user));
        },
        logout() {
            this.user = "";
            localStorage.removeItem('user');
        }
    }
});



    // actions: {
    //     async login() {
    //         this.user = "Testuser";
    //         localStorage.setItem('user', JSON.stringify(this.user));
    //     },
    //     logout() {
    //         this.user = "";
    //         localStorage.removeItem('user');
    //     }
    // }