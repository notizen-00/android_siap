import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { Device } from '@capacitor/device';
export const useDevicesStores = defineStore('deviceStore', {
  state: () => ({
    dialog: false,
    device:{
        manufacturer:'',
        model:'',
        id:''
    }

  }),
  actions: {
    toggleDialog(){
        this.dialog = !this.dialog
    },
    async fetchDevices() {
      try {
        const info = await Device.getInfo();
        const Id = await Device.getId();
        this.device.manufacturer = info.manufacturer || '-';
        this.device.model = info.model || '-';
        this.device.id = Id.identifier || 0;
      
      } catch (error) {
        console.error('Error fetching device info:', error);
      }
    },
    

  },
  getters: {
    isDialogActive() {
      return this.dialog
    },
    getDevice(){
        return this.device
    }

  },
  persist:true
})
