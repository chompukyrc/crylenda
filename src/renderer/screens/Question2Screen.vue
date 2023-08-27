<template>
    <v-container
        fluid
        class="flex flex-col h-screen justify-center items-center animate-in fade-in duration-1000"
        ><div class="w-1/2"
            ><div class="text-center mb-8 text-xl text-white">Why did you cry ;-;</div>
            <v-combobox
                class="h-24"
                v-model="select"
                :items="items"
                label="Why did you cry ;-;"
                variant="solo"
                multiple
                chips
            ></v-combobox
        ></div>
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
                @click="backHandler()"
                :disabled="select.length === 0"
            ></v-btn
        ></div>
    </v-container>
</template>

<script lang="ts">
export default {
    data() {
        return {
            select: [],
            items: ["พี่กุ๊กดุ", "น้อยใจ", "เครียดงาน", "ไม่เก่งพอ"]
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
