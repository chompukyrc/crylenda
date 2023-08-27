<template>
    <v-container
        class="flex flex-col justify-center items-center h-screen animate-in zoom-in duration-1000"
    >
        <div class="text-xl text-white mb-12">Rate how you feel today</div>
        <div class="w-5/6"
            ><v-slider
                class="text-md text-white mx-12"
                color="white"
                :ticks="emotion"
                min="1"
                max="5"
                :step="1"
                show-ticks="always"
                thumb-label="always"
            >
            </v-slider
        ></div>
    </v-container>
</template>

<script lang="ts">
export default {
    data: () => ({
        emotion: {
            1: "cry",
            2: "sad",
            3: "just ok",
            4: "well",
            5: "happy"
        },
        icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water", "mdi-water", "mdi-water"]
    })
}
</script>
