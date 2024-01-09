<template>
    <v-container>
        <div class="d-flex justify-center">
        <v-btn 
            variant="outline"
            prepend-icon="fa-duotone fa-mobile"
        > 
            {{ getDevice.manufacturer || '-' }}  {{ getDevice.model || '-' }} 
        </v-btn>
        
        </div>
    </v-container>
</template>

<script setup>
import { onMounted, ref,inject } from 'vue';
import { storeToRefs } from 'pinia';
const store = inject('store')
const { getDevice } = storeToRefs(store.deviceStore)
const { getLocation} = storeToRefs(store.mapStore)

// alert(getDevice.value.manufacturer)

onMounted(async() => {
    await store.deviceStore.fetchDevices();
});
</script>
