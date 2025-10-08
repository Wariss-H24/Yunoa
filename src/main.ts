import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import './style.css'
import App from './App.vue'
import router from './router'
// import { textesFR } from './translations.js'

// On initialise avec seulement le français
// const i18n = createI18n({
//   legacy: false,
//   locale: 'fr',
//   fallbackLocale: 'fr',
//   messages: { fr: textesFR }
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(i18n)

app.mount('#app')
