<template>
    <v-container class="flex justify-center items-center h-screen text-white text-2xl flex-col">
        <div>Have you cried today?</div>
        <v-btn-toggle v-model="toggle" color="white" class="m-20">
            <v-btn size="x-large" rounded="lg">Cry</v-btn>
            <v-btn size="x-large" rounded="lg">DC</v-btn>
        </v-btn-toggle>
    </v-container>
</template>

<script lang="ts">
export default {
    data: () => ({
        toggle: null
    })
}
</script>
