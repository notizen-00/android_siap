<template>
    <AppBar/>
            <ProfileSection></ProfileSection>
            <HeroSection></HeroSection>
         
            <Notification/>
            <Maps/>
            <Device/>
            <Recent/>

    <BottomBar/>
</template>
<script setup>
    import AppBar from '@/layout/partial/AppBar.vue'
    import BottomBar from '@/layout/partial/BottomBar.vue'
    import ProfileSection from '@/components/Beranda/ProfileSection.vue'
    import Notification from '@/components/Notification.vue'
    import Recent from '@/components/Beranda/Recent.vue'
    import Maps from '@/components/absensi/Maps.vue'
    import HeroSection from '@/components/Beranda/HeroSection.vue';
    import Device from '@/components/Beranda/Device.vue'
    import {inject,onMounted} from 'vue'
    import { storeToRefs } from 'pinia'

    const store = inject('store')

    const { getLocation } = storeToRefs(store.mapStore)

    onMounted(()=>{
        store.mapStore.setGeolocation();

     
         store.karyawanStore.fetchDetail();
    })

</script>