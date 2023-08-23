import { createRouter, createWebHashHistory } from "vue-router/dist/vue-router.esm-bundler"
import ErrorScreen from "@/renderer/screens/ErrorScreen.vue"
import HomeScreen from "@/renderer/screens/HomeScreen.vue"
import GreetingScreen from "@/renderer/screens/GreetingScreen.vue"
import LockScreen from "@/renderer/screens/LockScreen.vue"
import QuestionScreen from "@/renderer/screens/QuestionScreen.vue"
import Question2Screen from "@/renderer/screens/Question2Screen.vue"
import DiaryScreen from "@/renderer/screens/DiaryScreen.vue"
import TodayScore from "@/renderer/screens/TodayScoreScreen.vue"
import GoodScreen from "@/renderer/screens/GoodScreen.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/greeting",
            component: GreetingScreen,
            meta: {}
        },
        {
            path: "/lock",
            component: LockScreen,
            meta: {}
        },
        {
            path: "/question",
            component: QuestionScreen,
            meta: {}
        },
        {
            path: "/question2",
            component: Question2Screen,
            meta: {}
        },
        {
            path: "/diary",
            component: DiaryScreen,
            meta: {}
        },
        {
            path: "/today",
            component: TodayScore,
            meta: {}
        },
        {
            path: "/good",
            component: GoodScreen,
            meta: {}
        },
        {
            path: "/",
            component: HomeScreen,
            meta: {}
        },
        {
            path: "/error",
            component: ErrorScreen,
            meta: {}
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
})
