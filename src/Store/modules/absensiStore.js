import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { Toast } from '@capacitor/toast';
import { useAuthStores } from './authStore';
import { useMapStores } from './mapStore';
import { useKaryawanStores } from './karyawanStore';
import { useDevicesStores } from './deviceStore';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
export const useAbsensiStores = defineStore('absensiStore', {
  state: () => ({
    dialog: false,
    mapStore:useMapStores(),
    karyawanStore:useKaryawanStores(),
    authStore:useAuthStores(),
    deviceStore:useDevicesStores(),
    hasil:[],
    apiUrl:import.meta.env.VITE_APP_API_URL,
    absenTemp:{
      foto:'',
      terlambat:'',
      device_id:''
  }

  }),
  actions: {
    toggleDialog(){
        this.dialog = !this.dialog
        this.absenTemp.foto = ''
    },
    async takePicture(){
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64, // Ubah tipe menjadi Base64
        promptLabelHeader: 'Arahkan kamera ke objek',
        saveToGallery: false,
        source: CameraSource.Camera,
      });

      if (image.base64String === undefined) {
        await Toast.show({
          text: 'Pastikan Foto dengan benar ',
          duration: 'short',
          position: 'center'
          
        });
    
    }else {
      this.absenTemp.foto = 'data:image/jpeg;base64,' + image.base64String;
      this.dialog = !this.dialog;
    }
    
    
    
    },
    async doAbsen()
    {
      const response = await axios.post(
        this.apiUrl + 'api/doAbsen',
        { 
          image:this.absenTemp.foto,
          lokasi:this.mapStore.location,
          device_id:this.absenTemp.device_id,
          karyawan_id:this.karyawanStore.detail.id,
          jenis_presensi:'masuk',


        }, 
        {
          headers: {
            Authorization: `Bearer ${this.authStore.token}`
          }
        }
      );

    
      alert(JSON.stringify(response.data.message));  
  
    },
    async absenMasuk() {
      try {
        const lokasi_karyawan = this.mapStore.location;
        
        // Assuming you have the 'axios' library imported
        const response = await axios.post(
          this.apiUrl + 'api/absensi',
          { 
            lokasi_karyawan:lokasi_karyawan,
            lokasi_penugasan:this.karyawanStore.koordinat_penugasan,
            radius:this.karyawanStore.radius_penugasan,
            device_id:this.deviceStore.device.id,
            karyawan_id:this.karyawanStore.detail.id,
            device:this.deviceStore.device
          }, 
          {
            headers: {
              Authorization: `Bearer ${this.authStore.token}`
            }
          }
        );
    

      if(response.data.success === true)
      {
        // alert(JSON.stringify(response.data.data.id_device))

      this.absenTemp.device_id = response.data.data.id_device;
      this.absenTemp.terlambat = response.data.data.terlambat ? response.data.data.terlambat : '-';
      this.takePicture();
        // alert(JSON.stringify(response.data));
      }else{

          response.data.data.forEach(async item => {
    
          await Toast.show({
            text: item.error_message,
            duration: 'short',
            position: 'center'
          });
        });

      }
        // alert(JSON.stringify(response.data));
    
        // Assuming you have 'react-native-toast-message' imported for showing toasts
    
      } catch (error) {
        console.error('Error during absenMasuk:', error);
        // alert('test');
        alert(JSON.stringify(error.response.data.message))
        
        // Handle the error as needed
      }
    }
    

  },
  getters: {
    isDialogActive() {
      return this.dialog
    },
    getAbsenTemp(){
      return this.absenTemp
    }

  },
  persist:true
})
