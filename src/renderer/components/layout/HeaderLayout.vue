<script setup lang="tsx">
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route: any = useRoute()
const titleKey: string = (route?.meta?.titleKey || 'Cry') as string

const handleRoute = (path: string): void => {
  router.push(path)
}

const isCurrentRoute = (path: string): boolean => {
  return path === route.path
}
</script>
<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title>{{ titleKey }}</v-app-bar-title>
    <template #append>
      <v-btn
        prepend-icon="mdi-home"
        variant="text"
        :class="{ active: isCurrentRoute('/') }"
        @click="handleRoute('/')"
      >
        Main
      </v-btn>
      <v-btn
        prepend-icon="mdi-fit-to-screen-outline"
        variant="text"
        :class="{ active: isCurrentRoute('/second') }"
        @click="handleRoute('/second')"
      >
        Page 2
      </v-btn>
    </template>
  </v-app-bar>
</template>
<style scoped>
.v-btn {
  opacity: 0.4;
}
.active {
  opacity: 1 !important;
}
</style>
