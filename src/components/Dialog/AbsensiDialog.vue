<template>
    <v-row justify="center">
      <v-dialog
        v-model="isDialogActive"
        persistent
        width="full"
      >
        <v-card>
          <!-- <v-card-title class="text-h6"> -->
   
            <div class="w-full d-flex justify-between">
            <span class="text-slate-500 text-h6 ml-3">Data Absen Anda</span>
            <v-btn
            color="pink"
            class="mr-3 mt-2"
            size="x-small"
            variant="outlined"
            icon="fas fa-close"
            @click="store.absensiStore.toggleDialog()"
          >
          </v-btn>
        </div>

          <!-- </v-card-title> -->
          
            <span class="text-slate-500 ml-3 text-xs"><i class="text-red">*</i> Pastikan foto sudah benar</span>
          <v-card-text>  </v-card-text>

          <v-img  :width="200" class="mx-auto border-red-300 border-3 rounded-lg" :src="getAbsenTemp.foto" alt="Foto"></v-img>

          <br>
          <v-btn
          color="info"
          size="small"
          class=" w-1/2 mx-auto "
          variant="outlined"
          prepend-icon="fas fa-camera"
          @click="store.absensiStore.takePicture()"
        >
          Foto Ulang
        </v-btn>
          
          <v-card-actions class="mt-10">
            <v-spacer></v-spacer>
        
            <v-btn
              color="pink"
              class=" w-full"
              block
              variant="outlined"
              prepend-icon="fas fa-fingerprint"
              @click="store.absensiStore.doAbsen()"
            >
              Absen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script setup>
    import {inject} from 'vue'
    import { storeToRefs } from 'pinia';

    const store = inject('store')

    const { getAbsenTemp,isDialogActive } = storeToRefs(store.absensiStore);


  </script>