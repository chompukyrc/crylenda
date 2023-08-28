<template>
    <v-container
        fluid
        class="flex flex-col h-screen justify-center items-center animate-in slide-in-from-right duration-1000"
        ><v-container class="w-1/2"
            ><v-container class="text-center mb-8 text-xl text-white"
                >Why did you cry ;-;</v-container
            >
            <v-combobox
                v-model="select"
                class="h-24"
                :items="items"
                label="Why did you cry ;-;"
                variant="solo"
                multiple
                chips
            ></v-combobox
        ></v-container>
        <div class="absolute bottom-0 flex justify-between p-8 w-screen">
            <v-btn
                icon="mdi-arrow-left"
                size="large"
                color="white"
                variant="tonal"
                @click="nextHandler()"
            ></v-btn>
            <v-btn
                icon="mdi-arrow-right"
                size="large"
                color="white"
                variant="tonal"
                :disabled="select.length === 0"
                @click="backHandler()"
            ></v-btn
        ></div>
        <div>{{ diary }}</div>
    </v-container>
</template>

<script lang="ts">
import { mapGetters } from "vuex"
import stores from "../stores"

export default {
    data() {
        return {
            // select: [],
            items: ["พี่กุ๊กดุ", "น้อยใจ", "เครียดงาน", "ไม่เก่งพอ"]
        }
    },
    computed: {
        ...mapGetters({
            diary: "getDiary"
        }),
        select: {
            set(data: []) {
                stores.commit("setDiary", {
                    ...this.diary,
                    reason: data
                })
            },
            get() {
                return this.diary.reason
            }
        }
    },
    methods: {
        nextHandler() {
            this.$router.push("/question")
        },
        backHandler() {
            this.$router.push("/diary")
        }
    }
}
</script>
