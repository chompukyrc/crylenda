<template>
    <v-container
        fluid
        class="flex justify-center items-center h-screen text-white text-2xl flex-col animate-in zoom-in duration-1000"
    >
        <v-container>
            <v-container class="mb-8 text-center">Have you cried today?</v-container>
            <v-row justify="center">
                <v-col cols="auto">
                    <v-btn
                        :class="`${selected === 0 ? ' bg-white  ' : ' bg-gray-300 bg-opacity-40'}`"
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
                        :class="`${selected === 1 ? ' bg-white  ' : '  bg-gray-300 bg-opacity-40'}`"
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
        <v-container class="absolute bottom-0 right-0 flex justify-end p-8">
            <v-btn
                icon="mdi-arrow-right"
                size="large"
                color="white"
                variant="tonal"
                :disabled="selected === -1"
                @click="nextHandler()"
            ></v-btn
        ></v-container>
    </v-container>
</template>

<script lang="ts">
export default {
    data: () => ({
        selected: -1,
        options: ["Cry", "Not Cry"]
    }),
    methods: {
        nextHandler() {
            if (this.selected === 0) {
                this.$router.push("/question2")
            } else {
                this.$router.push("/diary")
            }
        }
    }
}
</script>
