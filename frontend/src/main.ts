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
        notify: { /* look at QuasarConfOptions from the API card */ },
        brand: {
            primary: '#212b59',
            secondary: '#5f6a71',
            accent: '#465dc2',
            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }
})
app.mount('#app');
