import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router';
import { pinia } from './Store/pinia'
import { useStore } from '@/Store/modules'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'

const vuetify = createVuetify({
  components,
  directives,
   date: {
    adapter: VuetifyDateAdapter,
  },
})

createApp(App)

        .use(vuetify)
        .use(router)
        .use(pinia)
        
        .provide('store', useStore())
        .mount('#app')