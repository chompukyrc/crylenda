<template>
    <v-container
        fluid
        class="flex flex-col h-screen justify-center items-center animate-in slide-in-from-right duration-1000"
    >
        <v-container class="w-full flex flex-col items-center"
            ><v-container class="mb-8 text-white text-xl text-center"
                >Tell something about today</v-container
            >
            <v-container class="flex justify-center w-1/3"
                ><v-textarea auto-grow variant="solo" v-model="message"> </v-textarea
            ></v-container>
            <v-btn
                :class="`${message.length > 0 ? ' bg-white ' : ' bg-opacity-20'}`"
                @click="saveHandler()"
                :loading="loading"
                :disabled="message.length === 0"
                size="large"
                >save</v-btn
            >
            <div>{{ diary }}</div>
        </v-container>
    </v-container>
    <v-container class="absolute bottom-0 flex justify-start p-8">
        <v-btn
            icon="mdi-arrow-left"
            size="large"
            color="white"
            variant="tonal"
            @click="backHandler()"
        ></v-btn
    ></v-container>
</template>

<script lang="ts">
import { mapGetters } from "vuex"
import stores from "../stores"

export default {
    data() {
        return {
            loading: false
            // message: ""
        }
    },
    computed: {
        ...mapGetters({
            diary: "getDiary"
        }),
        message: {
            set(data: string) {
                stores.commit("setDiary", {
                    ...this.diary,
                    diary: data
                })
            },
            get() {
                return this.diary.diary
            }
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
            this.$router.push("/question")
        }
    }
}
</script>
