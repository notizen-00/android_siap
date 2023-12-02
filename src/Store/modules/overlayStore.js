import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'

export const useOverlayStores = defineStore('overlayStore', {
  state: () => ({
    overlay: false,
   

  }),
  actions: {
    toggleOverlay(){
        this.overlay = !this.overlay
    }
    

  },
  getters: {
    isOverlayActive() {
      return this.overlay
    },

  },
  persist:true
})
