import axios from 'axios'
import { Notify } from 'quasar'
import { useAuthStore } from '../stores/auth'

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 5000,
})

api.interceptors.request.use(
    config => {
        const authStore = useAuthStore()
        if (authStore.token !== null) {
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

export default api 