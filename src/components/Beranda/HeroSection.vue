<template>
    
    <div class="relative w-full d-flex justify-center" >
        <div class="text-center asbolute rounded-xl -mt-20 w-4/5 bg-white border-2 border-slate-300 h-20">
          <div class="d-flex justify-around items-center">   
          <v-btn
            rounded="xl"
            class="mt-1"
            size="70"
            prepend-icon
            elevation="0"
            stacked
            @click="store.absensiStore.absenMasuk()"
            >
            <v-icon size="40" color="pink">fa-light fa-right-to-bracket</v-icon>
            <small class="text-capitalize font-light mt-1 text-slate-500">Masuk</small>
            </v-btn>
         
            <v-btn
            rounded="xl"
            class="mt-1"
            size="70"
            prepend-icon
            elevation="0"
            stacked
            >
            <v-icon size="40" color="pink">fa-light fa-mug-saucer</v-icon>
            <small class="text-capitalize font-light mt-2 text-slate-500">Istirahat</small>
            </v-btn>

            <v-btn
            rounded="xl"
            class="mt-1"
            size="70"
            prepend-icon
            elevation="0"
            stacked
            >
            <v-icon size="40" color="pink">fa-light fa-right-from-bracket</v-icon>
            <small class="text-capitalize font-light mt-2 text-slate-500">keluar</small>
            </v-btn>
          </div>
        </div>
    </div>
  
</template>
<script setup>
import { Device } from '@capacitor/device';
import { storeToRefs } from 'pinia';
import {inject,ref,computed,onMounted} from 'vue'

const store = inject('store')
const {getDetail} = storeToRefs(store.karyawanStore)


onMounted(() => {

  store.karyawanStore.fetchDetail();
  

});
</script>