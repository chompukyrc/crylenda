<script setup lang="tsx">
import { DefaultLayout } from "@/renderer/components/layout"
</script>

<template>
    <DefaultLayout class="bg-gradient-to-r from-[#adb3ff] to-[#8385ff]">
        <router-view />
    </DefaultLayout>
</template>

<style>
html {
    overflow-y: auto !important;
    user-select: none;
}
html,
body {
    width: 100%;
    height: 100%;
}
/* Do not force capitalization of button text */
.v-btn {
    text-transform: unset !important;
}
</style>
