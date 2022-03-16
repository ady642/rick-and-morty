import { createApp } from 'vue'
import App from './App.vue'
import router from './Common/router'
import store from './Common/store'

createApp(App).use(store).use(router).mount('#app')
