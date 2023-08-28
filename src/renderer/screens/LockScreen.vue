<template>
    <v-container
        class="flex justify-center items-center h-screen flex-col animate-in slide-in-from-top duration-1000"
    >
        <v-container class="text-white text-2xl mb-8 text-center">Enter Password</v-container>
        <v-otp-input
            ref="otpInput"
            v-model="otp"
            variant="solo"
            type="password"
            :loading="loading"
            @finish="onFinish"
        >
        </v-otp-input>
    </v-container>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
        {{ text }}
    </v-snackbar>
</template>

<script lang="ts">
import { IDiary } from "@/main/interfaces"
import { useRouter } from "vue-router"

export default {
    setup() {
        const navigation = useRouter()

        window.mainApi.receive("msgReceivedGetDiary", (event: Event, dirary: IDiary) => {
            // เชคว่าวันนี้มีไดอารี่ยัง
            console.log(dirary)
            if (dirary) {
                // มีแล้ว
                navigation.push("/home")
                // alert("มีแล้วจ้า")
            } else {
                navigation.push("/question")
            }
        })
    },
    data: () => ({
        loading: false,
        snackbar: false,
        snackbarColor: "default",
        otp: "",
        text: "",
        expectedOtp: "885544"
    }),

    methods: {
        onFinish(rsp: string) {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                if (rsp === this.expectedOtp) {
                    window.mainApi.send("msgRequestGetDiary", new Date())
                } else {
                    this.text = `Invalid password`
                    this.snackbarColor = "warning"
                    this.otp = ""
                    this.snackbar = true
                    // @ts-ignore
                    this.$refs.otpInput?.focus()
                }
            }, 1500)
        }
    },
    mounted() {
        // @ts-ignore
        this.$refs.otpInput?.focus()
    }
}
</script>
