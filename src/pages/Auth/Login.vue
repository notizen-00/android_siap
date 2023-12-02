<template>
    <div class="">
      <form @submit.prevent="onSubmit">
      <v-img
        class="mx-auto my-20"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
      ></v-img>
   
      <div
        class="mx-auto pa-12 -pb-20"
     
      >
      
        <div class="text-subtitle-1 text-medium-emphasis">Emails</div>
      
        <v-text-field
          density="compact"
          v-model="formData.email"
          placeholder="Email address"
          prepend-inner-icon="fa-duotone fa-envelope"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
           Lupa Kata Sandi ?</a>
          
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'fa-duotone fa-eye' : 'fa-duotone fa-eye-slash'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          autocomplete
          v-model="formData.password"
          placeholder="Enter your password"
          prepend-inner-icon="fa-duotone fa-lock"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  

        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          type="submit"
          variant="tonal"
        >
          Log In
        </v-btn>
        <ul>
          <li v-for="a in listPokemon" :key="a.url">{{ a.name }}</li>
        </ul>
     
      </div>
      <div class="ml-3">
      {{ getError ? getError:'' }}
      </div>

    </form>
    </div>
  </template>
  <script setup>
    import {ref,reactive,inject,onMounted} from 'vue'
  
    import { useRouter } from 'vue-router'
    import { storeToRefs } from 'pinia';
    const router = useRouter()
    const store  = inject('store')
    const { listPokemon,isLogin,getToken,getError } =  storeToRefs(store.authStore)
    const visible = ref(false)

    const formData = reactive({
      email: '',
      password: '',
    });
    
    onMounted(() => {

console.log('test')

    })

    
    const onSubmit = async () => {

    await store.authStore.doLogin(formData)

   
  
  }
  </script>