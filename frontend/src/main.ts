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
            primary: '#27187E',
            secondary: '#86BBD8',
            accent: '#9EE493',
            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }
})
app.mount('#app');
