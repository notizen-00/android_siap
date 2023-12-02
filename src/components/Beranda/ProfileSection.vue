<template>
    <v-sheet color="#291e7b" height="180" class="w-full -mt-2 overflow-hidden" style="border-bottom-left-radius:50%; border-bottom-right-radius:50%">
        <div class="w-full ml-5 pt-5 flex items-center bg-blue-800/10" >
          <v-avatar :image="getDetail.user.profile_photo_path === null ? getDetail.user.profile_photo_url:getDetail.user.profile_photo_path" color="white" size="55">

          </v-avatar>
           
          <div class="ml-3">
            <span class="text-white text-md font-bold">{{ getUsername ? getUsername : '-' }}</span>
            <br>
            <span class="text-xs font-thin text-slate-400"><v-chip color="pink" size="small" class="-ml-1">  {{ getDetail.divisi.nama_divisi ? getDetail.divisi.nama_divisi : '-' }} </v-chip></span>
          </div>
          
          <div class="ml-auto mr-10 text-end">
            <span class="text-white text-lg font-serif font-extrabold">{{ jamSekarang ? jamSekarang : "-" }}</span> <br>
            <span class="text-slate-400 text-xs font-thin">{{ fullDay() }}</span>
          </div> 
        
        </div>
<!-- 
        <div class="w-full mt-5 d-flex justify-center ml-2">
            <v-btn
            class="w-3/4"
            color="pink"
            rounded="xl"
            size="large"
            @click.prevent="store.authStore.doLogout()"
            >
            Logout
            </v-btn>
        </div> -->
      </v-sheet>

    
</template>
<script setup>

import {inject,ref,computed,onMounted} from 'vue'
import { storeToRefs } from 'pinia'
import axios from 'axios'
const store = inject('store')

const {getDetail} = storeToRefs(store.karyawanStore)

import { tanggal, bulan, hari, fullDay } from '@/helper/Tanggal.js';

const jamSekarang = ref(getJamSekarang());
function getJamSekarang() {
  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');
  return `${jam}:${menit}:${detik} WIB`;
}

// onMounted(()=>{
//   store.karyawanStore.fetchDetail();
// })

setInterval(() => {
  jamSekarang.value = getJamSekarang();
}, 1000);
const {getUsername,getToken} = storeToRefs(store.authStore)



</script>