import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { Quasar } from 'quasar'
import router from './router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
app.mount('#app');
