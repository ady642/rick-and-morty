import { createApp } from 'vue'
import App from './App.vue'
import router from './Common/router'
import store from './Common/store'
import i18n from './i18n'

createApp(App)
    .use(i18n)
    .use(store)
    .use(router)
    .mount('#app')
