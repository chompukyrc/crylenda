<template>
    <v-container
        fluid
        class="flex flex-col h-screen justify-center items-center animate-in fade-in duration-1000"
    >
        <div class="w-full flex flex-col items-center"
            ><div class="mb-8 text-white text-xl">Tell something about today</div>
            <div class="flex justify-center w-1/3"
                ><v-textarea auto-grow variant="solo" v-model="message"> </v-textarea
            ></div>
            <v-btn
                :class="`${message.length > 0 ? ' bg-white ' : ' bg-opacity-20'}`"
                @click="saveHandler()"
                :loading="loading"
                :disabled="message.length === 0"
                size="large"
                >save</v-btn
            ></div
        >
    </v-container>
    <div class="absolute bottom-0 flex justify-start p-8">
        <v-btn
            icon="mdi-arrow-left"
            size="large"
            color="white"
            variant="tonal"
            @click="backHandler()"
        ></v-btn
    ></div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            loading: false,
            message: ""
        }
    },
    methods: {
        saveHandler() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                console.log(this.message)
                this.$router.push("/today")
            }, 1500)
        },
        backHandler() {
            this.$router.push("/question2")
        }
    }
}
</script>
