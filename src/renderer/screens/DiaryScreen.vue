<template>
    <v-container
        class="flex justify-center items-center h-5/6 text-white text-2xl flex-col animate-in zoom-in duration-1000"
    >
        <div class="mb-8 text-white text-xl">Tell some stories of today</div>
        <div class="flex justify-center w-1/3"
            ><v-textarea auto-grow variant="solo" v-model="message"> </v-textarea
        ></div>
        <v-btn
            variant="tonal"
            @click="saveHandler()"
            :loading="loading"
            :disabled="message.length === 0"
            >save</v-btn
        >
    </v-container>
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
        }
    }
}
</script>
