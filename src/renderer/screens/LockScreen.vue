<template>
    <v-container
        class="flex justify-center items-center h-screen flex-col animate-in slide-in-from-right duration-1000"
    >
        <div class="text-white text-2xl mb-8">Enter Password</div>
        <v-otp-input
            v-model="otp"
            variant="solo"
            type="password"
            focus-all
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
                this.snackbarColor = rsp === this.expectedOtp ? "success" : "warning"
                if (rsp === this.expectedOtp) {
                    this.$router.push("/question")
                } else {
                    this.$router.push("/lock")
                }
                this.text = `Processed password ${this.snackbarColor}`
                this.snackbar = true
            }, 1500)
        }
    }
}
</script>
