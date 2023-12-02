<script setup>
import { ref,inject } from 'vue'
import { Preferences } from '@capacitor/preferences';
import { storeToRefs } from 'pinia';
const store = inject('store')

const {getToken } = storeToRefs(store.authStore)

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card ">
    <button type="button" class="text-blue-400 ring-2 ring-blue-400 px-2 ml-2" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

 

  <p class="read-the-docs">Token Anda : {{ getToken }}</p>

  <router-link to="/logout">
    <v-btn
    color="blue"
    >
    Logout
    </v-btn>
  </router-link>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
