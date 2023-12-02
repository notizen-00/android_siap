import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { useAuthStores } from './authStore';


export const useKaryawanStores = defineStore('karyawanStore', {
  state: () => ({
    overlay: '',
    detail:[],
    lokasi_penugasan:[],
    koordinat_penugasan:{
        lat:null,
        lng:null
    },
     apiUrl:import.meta.env.VITE_APP_API_URL

  }),
  actions: {
    toggleOverlay(){
        this.overlay = !this.overlay
    },
    async fetchDetail() {
    
        const authStore = useAuthStores();
        const token = authStore.token;
        const userId = authStore.userId;
     
        try {
            const response = await axios.get(this.apiUrl+`api/karyawan_api/${userId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
       
          this.detail = response.data.data;
        } catch (error) {
     
          alert(error.message);
        }
    },
    async fetchLokasiPenugasan()
    {
        const authStore = useAuthStores();
        const token = authStore.token;
        try {
            const response = await axios.get(this.apiUrl+'api/karyawan/lokasi_penugasan', {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
         
          this.lokasi_penugasan = response.data.data[0];
          this.koordinat_penugasan.lat = parseFloat(response.data.data[0].lokasi.latitude);
          this.koordinat_penugasan.lng = parseFloat(response.data.data[0].lokasi.longitude);
        } catch (error) {
     
          console.error('Gagal mengambil data Lokasi Penugasan:', error);
          alert('test')
          // alert(error.message);
        }
    }
    

  },
  getters: {
    isOverlayActive() {
      return this.overlay
    },
    getDetail(){
        return this.detail
    },
    getLokasiPenugasan()
    {
        return this.lokasi_penugasan
    },
    getKoordinatPenugasan()
    {
        return this.koordinat_penugasan
    }
  },
  persist:true
})
