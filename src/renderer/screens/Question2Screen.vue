<template>
    <v-container
        class="flex flex-col justify-center items-center h-5/6 animate-in zoom-in duration-1000"
    >
        <div class="mb-8 text-xl text-white">Why did you cry ;-;</div>
        <div class="w-1/2"
            ><v-combobox
                class="h-24"
                v-model="select"
                :items="items"
                label="Why did you cry ;-;"
                variant="solo"
                multiple
                chips
            ></v-combobox
        ></div>
    </v-container>
    <div class="flex justify-between items-center mx-20 h-1/6">
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
