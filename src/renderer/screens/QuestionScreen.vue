<template>
    <v-container
        class="flex justify-center items-center h-5/6 text-white text-2xl flex-col animate-in zoom-in duration-1000"
    >
        <div>Have you cried today? {{ selected }}</div>
        <v-container>
            <v-row justify="center">
                <v-col cols="auto">
                    <v-btn
                        :class="`${selected === 0 ? ' bg-red-300  ' : '  bg-white '}`"
                        elevation="8"
                        height="120"
                        min-width="200"
                        @click="selected = 0"
                    >
                        {{ options[0] }}
                    </v-btn>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                        :class="`${selected === 1 ? ' bg-red-300  ' : '  bg-white '}`"
                        elevation="8"
                        height="120"
                        min-width="200"
                        @click="selected = 1"
                    >
                        {{ options[1] }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
    <div class="flex justify-end items-center mx-20 h-1/6">
        <v-btn
            icon="mdi-arrow-right"
            size="large"
            color="white"
            variant="tonal"
            :disabled="selected === -1"
            @click="nextHandler()"
        ></v-btn
    ></div>
</template>

<script lang="ts">
export default {
    data: () => ({
        selected: -1,
        options: ["Cry", "Not Cry"]
    }),
    methods: {
        // cryHandler(message: string) {
        //     this.selected = message
        //     console.log(message)
        // },
        // noCryHandler(message: string) {
        //     this.selected = message
        //     console.log(message)
        // },
        nextHandler() {
            if (this.selected === "cry") {
                this.$router.push("/question2")
            } else {
                this.$router.push("/diary")
            }
        }
    }
}
</script>
