<template>

    <div class="d-flex w-full justify-between sticky top-0 z-10" style="background-color:#291e7b;">
         <div class="m-3">
        
            <v-icon class="mb-2" color="white">fas fa-code</v-icon>
            <span class="font-serif text-h6 ml-3 text-white">S I A P</span>
         
         </div>
     
          <v-btn icon="fa-solid fa-bell" variant="text" @click="store.overlayStore.toggleOverlay()" color="white"></v-btn>
        
    </div>
</template>
<script setup>
    import { inject } from 'vue'

    const store = inject('store')



</script>