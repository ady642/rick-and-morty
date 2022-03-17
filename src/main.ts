import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import messages from '@/Common/messages'
import App from './App.vue'
import router from './Common/router'
import store from './Common/store'

const i18n = createI18n({
    locale: 'fr',
    messages
})

createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app')
