<template>
    <v-layout>
        <AppBar/>
        <v-main>
           <slot name="content"></slot>
        </v-main>
   
    </v-layout>
    <BottomBar/>
    <Notification/>
</template>
<script setup>
    import AppBar from '@/layout/partial/AppBar.vue'
    import BottomBar from '@/layout/partial/BottomBar.vue'
    import Notification from '@/components/Notification.vue';
</script>