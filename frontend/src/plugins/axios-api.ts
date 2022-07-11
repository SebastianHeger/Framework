import axios from 'axios'

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 5000,
})

api.interceptors.request.use(
    config => {
        let token = null
        if (token !== null) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

export default api 