<script setup lang="tsx">
import { onMounted, ref } from "vue"
import { ICreateDiary, IDiary } from "@/main/interfaces"
import { format } from "date-fns"

const appVersion = ref("Unknown")
const attrs = ref<{ key: string; highlight: string; dates: Date }[]>([
    {
        key: "today",
        highlight: "red",
        dates: new Date(2023, 8, 22)
    },
    {
        key: "test",
        highlight: "red",
        dates: new Date(2019, 3, 15)
    }
])

async function onclick(event) {
    console.log("click", event)
}

async function createCreateDiary() {
    const toDay = new Date() // , 'MM-dd-yyyy'
    // window.mainApi.send("msgRequestCreateDiary", {
    //     isCry: false,
    //     reason: "ไม่รู้",
    //     diary: "สวัสดีค้าบ",
    //     date: toDay,
    //     happyScore: 10
    // } as ICreateDiary)
}

onMounted((): void => {
    // window.mainApi.receive("msgReceivedCreateDiary", (event: Event, diary: IDiary) => {
    //     console.log(diary)
    // })

    window.mainApi.receive("msgReceivedListDiary", (event: Event, diaries: IDiary[]) => {
        console.log(diaries)
    })

    // call
    window.mainApi.send("msgRequestListDiary")
})
</script>

<template>
    <v-container
        class="h-screen flex flex-col items-center justify-center animate-in zoom-in duration-1000"
    >
        <v-container>
            <v-calendar
                expanded
                style="height: max-content"
                :attributes="attrs"
                @dayclick="onclick"
            />
        </v-container>
        <v-btn @click="createCreateDiary">New Diary</v-btn>
    </v-container>
</template>
