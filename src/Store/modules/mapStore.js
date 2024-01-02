import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { Geolocation } from '@capacitor/geolocation';
import {useAuthStores} from './authStore'
import { Toast } from '@capacitor/toast';
export const useMapStores = defineStore('mapStore', {
  state: () => ({
    dialog: false,
    mapElement:null,
    location:{
        lat:null,
        lng:null
    },
    watchId:null,
  }),

  actions: {
    toggleDialog(){
        this.dialog = !this.dialog
    },
    setMapElement(){
        this.mapElement = !this.mapElement
    },
    async getWatchPosition() {
   

      this.watchId = await Geolocation.watchPosition(
        {
          enableHighAccuracy: true,
          maximumAge: 0,
        },
        async (data) => {
          try {
            this.location.lat = data.coords.latitude;
            this.location.lng = data.coords.longitude;

            await Toast.show({
              text: 'Akurat sampai ' + Math.round(data.coords.altitudeAccuracy) + ' Meter',
              duration: 'short',
              position: 'center',
            });

            this.stopTrack();
          
          } catch (e) {
            // Handle errors when updating geolocation
            alert(e.message);
          }
        }
      );
    },
    async stopTrack() {
      if (this.watchId !== null) {
        await Geolocation.clearWatch({ id: this.watchId });
        
        this.watchId = null; // Reset the watchId

      }
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
          alert(error.message);
        }
      } else if (permissions.coarseLocation !== 'granted') {
        // Coarse location permission granted, handle accordingly
        await Geolocation.requestPermissions();
        // alert('belum accuracy')
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
