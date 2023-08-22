<script setup lang="tsx">
import { onMounted, ref } from 'vue'

const appVersion = ref('Unknown')
const attrs = ref<{ key: string; highlight: string; dates: Date }[]>([
  {
    key: 'today',
    highlight: 'red',
    dates: new Date(2023, 8, 22)
  },
  {
    key: 'test',
    highlight: 'red',
    dates: new Date(2019, 3, 15)
  }
])

async function onclick(event) {
  console.log('click', event)
}

onMounted((): void => {
  // Get application version from package.json version string (Using IPC communication)
  window.mainApi.receive('msgReceivedVersion', (event: Event, version: string) => {
    console.log(version)
    appVersion.value = version
  })

  window.mainApi.send('msgRequestGetVersion', { test: 'test' })
})
</script>

<template>
  <v-container>
    <div>Hello worlddddddd</div>
    <div style="background-color: brown; height: 400px">
      <v-calendar expanded style="height: max-content" :attributes="attrs" @dayclick="onclick" />
    </div>
  </v-container>
</template>
