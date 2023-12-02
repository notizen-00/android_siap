<template>

        <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation v-model="value" bg-color="white" :fixed="true" rounded="xl" class=" d-flex justify-around items-center sticky z-10">
            <RouterLink to="/">
                <v-btn color="white">
                    <v-icon :color="isActive('Home') ? 'pink':'grey-darken-1'">fa-light fa-house-blank</v-icon>
                </v-btn>
            </RouterLink>
            <RouterLink to="/Cuti">
                <v-btn color="white">
                    <v-icon :color="isActive('Cuti') ? 'pink':'grey-darken-1'">fa-sharp fa-regular fa-calendar-circle-exclamation</v-icon>
                </v-btn>
            </RouterLink>
            <RouterLink to="/Task">
                <v-btn color="white">
                    <v-icon :color="isActive('Task') ? 'pink':'grey-darken-1'">fa-duotone fa-list-check</v-icon>
                </v-btn>
            </RouterLink>
            <RouterLink to="/Absensi">
                <v-btn color="white" >
                    <v-icon :color="isActive('Absensi') ? 'pink':'grey-darken-1'">fa-sharp fa-fingerprint</v-icon>
                </v-btn>
            </RouterLink>
        </v-bottom-navigation>
        </v-layout>


</template>
<script setup>
import {ref,inject} from 'vue'
import {useRoute} from 'vue-router'
const store = inject('store')

const route = useRoute();

const value = ref(0)



const isActive = (routeName) =>{

    if(route.name === routeName){
        return true
    }else{
        return false
    }

}


</script>

<style scoped>
.v-layout {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100; /* Adjust the z-index if needed */
}
</style>