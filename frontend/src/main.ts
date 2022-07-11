import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { Quasar, Notify } from 'quasar'
import router from './router'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Quasar, {
    plugins: {
        Notify
    },
    config: {
        notify: { /* look at QuasarConfOptions from the API card */ }
    }
})
app.mount('#app');
