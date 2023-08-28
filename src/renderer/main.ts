import { createApp } from "vue"

import App from "@/renderer/App.vue"
import router from "@/renderer/router"
import vuetify from "@/renderer/plugins/vuetify"
import "./index.css"
import VCalendar from "v-calendar"
import "v-calendar/style.css"
// Import store
import store from "./stores"

// Add API key defined in contextBridge to window object type
declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        mainApi?: any
    }
}

const app = createApp(App)

app.use(store).use(VCalendar, {}).use(vuetify).use(router).mount("#app")
