<template>
    <section class="display">
    

    
    </section>
    <BottomBar></BottomBar>
  </template>
  
  <script setup>
  import BottomBar from '@/layout/partial/BottomBar.vue'
  import * as faceAPI from 'face-api.js'
  import { ref, onMounted, reactive } from 'vue'
  import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
  import { CameraPreview } from '@capacitor-community/camera-preview';
  

  

  </script>
  