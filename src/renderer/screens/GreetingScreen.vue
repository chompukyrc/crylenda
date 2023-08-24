<script lang="ts">
import { useRoute, useRouter } from "vue-router"
const router = useRouter()
</script>

<template>
    <router-link to="/lock">
        <v-container
            class="flex justify-center items-center h-screen text-white text-3xl"
            onclick=""
        >
            - How does your heart feel today? -
        </v-container>
    </router-link>
</template>
