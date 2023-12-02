import { defineStore } from 'pinia'
import axios from 'axios';
import  router from '@/router'
import { CapacitorHttp } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { useKaryawanStores } from './karyawanStore';


export const useAuthStores = defineStore('authStore', {
  state: () => ({
    login: false,
    token:'', 
    username:'',
    userId:'',
    apiUrl:import.meta.env.VITE_APP_API_URL,
    error:''

  }),
  actions: {

    async doLogin(data) {
      try {
        const store = useKaryawanStores();
        const response = await axios.post(this.apiUrl+'apis/login', {
          email: data.email,
          password: data.password,
        });
       
        if (response.status === 200) {
          // alert('Berhasil login');

          await Preferences.set({
            key: 'token',
            value: response.data.data.token,
          });
          console.log('Berhasil login')
          this.login = true;
          this.userId = response.data.data.userId;
          this.token = response.data.data.token;
          this.username = response.data.data.name;
          store.fetchDetail();
       
          console.log(this.token);
          console.log(this.userId);
          console.log(this.username);
          router.push('/')
        } else {
          alert('Login gagal');
        }
      } catch (error) {
        // alert('Terjadi kesalahan. Periksa kembali email dan password Anda.');
        console.error(error);
      
        Toast.show({
          text: 'Hello!'+error.message,
        });
        showHelloToast();
        alert(error.message);


        this.error = 'Terjadi Kesalahan . Periksa kembali email dan password Anda';
        
       
      }
    },
    async doLogout() {
      try {
        const response = await axios.post(this.apiUrl+'api/logout', null, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
    
        if (response.status === 200) {
          alert('Berhasil logout');
          this.login = false;
          this.token = '';
          router.push('/login')

        } else {
          alert('Logout gagal');
        }
      } catch (error) {
        console.error(error);
        alert('Logout gagals')
      
      }
    }
    

  },
  getters: {
    isLogin() {
      return this.login
    },
    getToken(){
        return this.token
    },
    getError(){
        return this.error
    },
    getUserId()
    {
        return this.userId
    },
    getUsername()
    {
      return this.username
    }

  },
  persist:true
})
