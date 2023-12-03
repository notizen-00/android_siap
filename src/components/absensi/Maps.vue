<template>

        <div class="map mt-8 relative" ref="mapDivRef"></div>
        <div class="relative -mt-20 w-full mb-5 d-flex justify-end">
          <v-btn color="black" @click="store.mapStore.getWatchPosition()" class="mr-5 w-full" icon="fas fa-location-crosshairs"></v-btn>
        </div>

    
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { storeToRefs } from "pinia";
const store = inject('store');
const { isDialogActive,getMapElement } = storeToRefs(store.absensiStore);
const { getLokasiPenugasan,getKoordinatPenugasan } = storeToRefs(store.karyawanStore);
const { getLocation } = storeToRefs(store.mapStore)

const zoom = 18;
const mapType = "roadmap";
const disableUI = false;

  
const map = ref(null);
const mapDivRef = ref(null);
const marker = ref(null);
const circle = ref(null);

onMounted(() => {

  store.karyawanStore.fetchLokasiPenugasan();

  const key = import.meta.env.VITE_APP_GOOGLEMAPS_KEY;
  const googleMapScript = document.createElement("SCRIPT");
  googleMapScript.setAttribute(
    "src",
    `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
  );
  googleMapScript.setAttribute("defer", "");
  googleMapScript.setAttribute("async", "");
  document.head.appendChild(googleMapScript);


window.initMap = () => {
  map.value = new window.google.maps.Map(mapDivRef.value, {
    mapTypeId: mapType,
    zoom: zoom,
    disableDefaultUI: true,
    center: getLocation.value,
    mapTypeControl: false,
 
  });

  marker.value = new window.google.maps.Marker({
    position: getLocation.value,
    map: map.value,
    title: "ini lokasiku", 
  });

  circle.value = new google.maps.Circle({
    strokeColor: "#3af25f", 
    strokeOpacity: 1,    
    strokeWeight: 2,      
    fillColor: "#3af25f",   
    fillOpacity: 0.35,    
    map: map.value,      
    center: getKoordinatPenugasan.value,
    radius: getLokasiPenugasan.value.lokasi.radius_lokasi,
  });

};

});
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
  background-color: azure;
}
</style>
