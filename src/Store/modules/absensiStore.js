import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { Toast } from '@capacitor/toast';
import { useAuthStores } from './authStore';
import { useMapStores } from './mapStore';
import { useKaryawanStores } from './karyawanStore';
import { useDevicesStores } from './deviceStore';
export const useAbsensiStores = defineStore('absensiStore', {
  state: () => ({
    dialog: false,
    mapStore:useMapStores(),
    karyawanStore:useKaryawanStores(),
    authStore:useAuthStores(),
    deviceStore:useDevicesStores(),
    hasil:[],
    apiUrl:import.meta.env.VITE_APP_API_URL

  }),
  actions: {
    toggleDialog(){
        this.dialog = !this.dialog
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
            karyawan_id:this.authStore.userId
          }, // Assuming the API expects an object with 'lokasi_karyawan' property
          {
            headers: {
              Authorization: `Bearer ${this.authStore.token}`
            }
          }
        );
    
        // Assuming the response is a JSON object
        alert(JSON.stringify(response.data));
    
        // Assuming you have 'react-native-toast-message' imported for showing toasts
        await Toast.show({
          text: 'lokasi anda: ' + this.mapStore.location.lat,
          duration: 'short',
          position: 'center'
        });
      } catch (error) {
        console.error('Error during absenMasuk:', error);
        alert(JSON.stringify(error.response.data.message))
        // Handle the error as needed
      }
    }
    

  },
  getters: {
    isDialogActive() {
      return this.dialog
    },

  },
  persist:true
})
