<template>
  <AppBar />

  <div class="d-flex justify-center items-center h-80">
    Absensi
    <v-btn
      icon="fas fa-camera"
      rounded="xl"
      @click.prevent="takePicture"
    ></v-btn>

    <v-img  :width="100" class="m-10" :src="imageUrl" alt="Foto"></v-img>
  </div>
  <v-container>
   

    <v-btn @click="store.authStore.doLogout()">Logout</v-btn>
  </v-container>
  <BottomBar />
</template>

<script setup>
import AppBar from '@/layout/partial/AppBar.vue'
import BottomBar from '@/layout/partial/BottomBar.vue'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ref, inject } from 'vue'

const store = inject('store')

const imageUrl = ref('');

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64, // Ubah tipe menjadi Base64
    promptLabelHeader: 'Arahkan kamera ke objek',
    saveToGallery: false,
    source: CameraSource.Camera,
  });

  imageUrl.value = 'data:image/jpeg;base64,' + image.base64String; // Set nilai gambar sebagai base64

  alert(imageUrl.value)
};
</script>
