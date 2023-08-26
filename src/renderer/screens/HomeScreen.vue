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
    window.mainApi.send("msgRequestCreateDiary", {
        isCry: false,
        reason: "ไม่รู้",
        diary: "สวัสดีค้าบ",
        date: toDay,
        happyScore: 10
    } as ICreateDiary)
}

onMounted((): void => {
    window.mainApi.receive("msgReceivedCreateDiary", (event: Event, diary: IDiary) => {
        console.log(diary)
    })

    window.mainApi.receive("msgReceivedListDiary", (event: Event, diaries: IDiary[]) => {
        console.log(diaries)
    })

    window.mainApi.receive("msgReceivedGetDiary", (event: Event, dirary: IDiary) => {
        console.log(dirary)
    })

    // call
    window.mainApi.send("msgRequestListDiary")
    window.mainApi.send("msgRequestGetDiary", new Date())
})
</script>

<template>
    <v-container class="animate-in zoom-in duration-1000">
        <div>Hello world</div>
        <div style="background-color: brown; height: 400px">
            <v-calendar
                expanded
                style="height: max-content"
                :attributes="attrs"
                @dayclick="onclick"
            />
        </div>
        <v-btn @click="createCreateDiary">New Diary</v-btn>
    </v-container>
</template>
