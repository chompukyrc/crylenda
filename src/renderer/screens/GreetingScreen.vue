<script lang="ts">
import { useRoute, useRouter } from "vue-router"
const router = useRouter()
</script>

<template>
    <router-link to="/lock">
        <v-container class="flex justify-center items-center h-screen text-white text-xl flex-col">
            <div>There is a certain strength in enduring pain that not everyone possesses.</div>
            <div class="mt-4 text-sm">- David Gemmell -</div>
        </v-container>
    </router-link>
</template>
