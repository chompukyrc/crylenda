<template>
    <v-container
        class="flex justify-center items-center h-screen flex-col animate-in zoom-in duration-1000"
    >
        <div class="text-white text-2xl mb-8">Enter Password</div>
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
export default {
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
                    this.$router.push("/question")
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
