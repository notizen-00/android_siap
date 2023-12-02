import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { Geolocation } from '@capacitor/geolocation';

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
    async setGeolocation(){

        const position = await Geolocation.getCurrentPosition();

        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;

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
