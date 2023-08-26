<template>
    <v-container class="flex justify-center items-center h-screen text-white text-2xl flex-col animate-in zoom-in duration-1000">
        <div>Have you cried today?</div>
        <v-container>
            <v-row justify="center">
                <v-col cols="auto">
                    <router-link to="/question2"
                        ><v-btn elevation="8" height="120" min-width="200" color="white"> Cry </v-btn></router-link
                    >
                </v-col>
                <v-col cols="auto">
                    <router-link to="/diary"
                        ><v-btn elevation="8" height="120" min-width="200" color="white"> not cry </v-btn></router-link
                    >
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts"></script>
