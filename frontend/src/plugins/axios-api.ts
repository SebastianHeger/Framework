import axios from 'axios'
import { Notify } from 'quasar'
import { useAuthStore } from '../stores/auth'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 5000,
})

api.interceptors.request.use(
    config => {
        const authStore = useAuthStore()
        if (authStore.token !== null && config.headers !== undefined) {
            config.headers.authorization = `Bearer ${authStore.token}`
        }
        return config
    },
    error => {
        Promise.reject(error)
        Notify.create({
            message: 'Data cannot be received from the server.',
            color: 'negative',
            actions: [
                { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
            ]
        })
    }
)

api.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config
        if (originalConfig.url !== "token/" && originalConfig.url !== "token/refresh/" && err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const authStore = useAuthStore()
                    await authStore.refresh()
                    return api(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
)

export default api