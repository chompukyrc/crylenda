import { createApp } from 'vue'

import App from '@/renderer/App.vue'
import router from '@/renderer/router'
import vuetify from '@/renderer/plugins/vuetify'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

// Add API key defined in contextBridge to window object type
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    mainApi?: any
  }
}

const app = createApp(App)
app.use(VCalendar, {})

app.use(vuetify).use(router)

app.mount('#app')
