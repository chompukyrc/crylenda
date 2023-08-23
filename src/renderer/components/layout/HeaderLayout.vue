<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route: any = useRoute()
const routes = [
    {
        icon: "mdi-home",
        route: "/greeting",
        name: "greeting"
    },
    {
        icon: "mdi-home",
        route: "/lock",
        name: "lock screen"
    },
    {
        icon: "mdi-home",
        route: "/question",
        name: "question"
    },
    {
        icon: "mdi-home",
        route: "/question2",
        name: "question2"
    },
    {
        icon: "mdi-home",
        route: "/diary",
        name: "diary"
    },
    {
        icon: "mdi-home",
        route: "/today",
        name: "today"
    },
    {
        icon: "mdi-home",
        route: "/",
        name: "Home"
    }
]
const titleKey: string = (route?.meta?.titleKey || "CRYLENDAR") as string

const handleRoute = (path: string): void => {
    router.push(path)
}

const isCurrentRoute = (path: string): boolean => {
    return path === route.path
}
</script>
<template>
    <v-app-bar color="primary" density="compact">
        <v-app-bar-title class="cursor-pointer font-bold">{{ titleKey }}</v-app-bar-title>
        <template #append>
            <v-btn
                v-for="e in routes"
                :key="e.route"
                :prepend-icon="e.icon"
                variant="text"
                :class="{ active: isCurrentRoute(e.route) }"
                @click="handleRoute(e.route)"
            >
                {{ e.name }}
            </v-btn>
        </template>
    </v-app-bar>
</template>

<style scoped>
.v-btn {
    opacity: 0.4;
}
.active {
    opacity: 1 !important;
}
</style>
