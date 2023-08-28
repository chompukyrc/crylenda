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
                        :class="`${isCry === true ? ' bg-white  ' : ' bg-gray-300 bg-opacity-40'}`"
                        elevation="8"
                        height="120"
                        min-width="200"
                        @click="isCry = true"
                    >
                        {{ options[0] }}
                    </v-btn>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                        :class="`${
                            isCry === false ? ' bg-white  ' : '  bg-gray-300 bg-opacity-40'
                        }`"
                        elevation="8"
                        height="120"
                        min-width="200"
                        @click="isCry = false"
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
                :disabled="isCry === null"
                @click="nextHandler()"
            ></v-btn>
        </v-container>
        {{ diary }}
    </v-container>
</template>

<script lang="ts">
import { mapGetters } from "vuex"
import stores from "../stores"
export default {
    data: () => ({
        // selected: -1,
        options: ["Cry", "Not Cry"]
    }),
    computed: {
        ...mapGetters({
            diary: "getDiary"
        }),
        isCry: {
            set(data: boolean) {
                stores.commit("setDiary", {
                    ...this.diary,
                    isCry: data
                })
            },
            get() {
                return this.diary.isCry
            }
        }
    },

    methods: {
        nextHandler() {
            if (this.isCry) {
                this.$router.push("/question2")
            } else {
                this.$router.push("/diary")
            }
        }
    }
}
</script>
