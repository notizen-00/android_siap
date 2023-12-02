import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { Geolocation } from '@capacitor/geolocation';
import {useAuthStores} from './authStore'
export const useMapStores = defineStore('mapStore', {
  state: () => ({
    dialog: false,
    mapElement:null,
    location:{
        lat:null,
        lng:null
    }
  }),
  actions: {
    toggleDialog(){
        this.dialog = !this.dialog
    },
    setMapElement(){
        this.mapElement = !this.mapElement
    },
    async setGeolocation() {
      const permissions = await Geolocation.checkPermissions();
     
      if (permissions.coarseLocation === 'granted') {
      
        try {
          const position = await Geolocation.getCurrentPosition();

          this.location.lat = position.coords.latitude;
          this.location.lng = position.coords.longitude;
        } catch (error) {
          // Handle errors when getting geolocation
       
        }
      } else if (permissions.coarseLocation !== 'granted') {
        // Coarse location permission granted, handle accordingly
        await Geolocation.requestPermissions();
        alert('belum accuracy')
        // Add your logic for handling coarse location permission
      } else {

        await Geolocation.requestPermissions();
  
        const authStore = useAuthStores();
   
        authStore.doLogout();

      
        router.push('/logout');

      }
    },
    async setLokasiPenugasan(){


    }
    

  },
  getters: {
    isDialogActive() {
      return this.dialog
    },
    getMapElement() {
      return this.mapElement
    },
    getLocation(){
        return this.location
    }
  }
})
