<template>
    <v-container
        class="flex flex-col justify-center items-center h-screen animate-in zoom-in duration-1000"
    >
        <v-container class="text-xl text-white mb-12 text-center"
            >Rate how you feel today <v-icon icon="mdi-white-balance-sunny"></v-icon>
        </v-container>
        <v-container class="w-5/6"
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
                <template v-slot:thumb-label="{ modelValue }">
                    <p class="text-xl">{{ season(modelValue) }}</p>
                </template>
            </v-slider></v-container
        >
        <v-btn
            icon="mdi-send"
            color="white"
            size="large"
            class="mt-12"
            @click="sendHandler()"
            :loading="loading"
        ></v-btn>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        emotion: {
            1: "cry",
            2: "sad",
            3: "just ok",
            4: "well",
            5: "happy"
        },
        icons: ["", "😢", "😞", "😐", "😙", "😁"]
    }),
    methods: {
        season(val) {
            return this.icons[val]
        },
        sendHandler() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.$router.push("/home")
            }, 1500)
        }
    }
}
</script>
