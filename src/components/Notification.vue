<template>
    <v-row justify="center">
      <v-dialog
        v-model="isOverlayActive"
        fullscreen
     
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
          
            <v-toolbar-title>Pemberitahuan</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
            icon
            dark
            @click="store.overlayStore.toggleOverlay()"
          >
            <v-icon>fas fa-close</v-icon>
          </v-btn>
           
          </v-toolbar>
          <v-list
            lines="two"
            subheader
          >
            <v-list-subheader>User Controls</v-list-subheader>
            <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
            <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list
            lines="two"
            subheader
          >
            <v-list-subheader>General</v-list-subheader>
            <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
              <template v-slot:prepend>
                <v-checkbox v-model="notifications"></v-checkbox>
              </template>
            </v-list-item>
            <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
              <template v-slot:prepend>
                <v-checkbox v-model="sound"></v-checkbox>
              </template>
            </v-list-item>
            <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
              <template v-slot:prepend>
                <v-checkbox v-model="widgets"></v-checkbox>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  <script setup>
  import {ref,inject} from 'vue'
  import { storeToRefs } from 'pinia'
  const store = inject('store')

  const {isOverlayActive} = storeToRefs(store.overlayStore)
  
  const notifications = ref(false);
  
  const sound = ref(true);
  
  const widgets = ref(false);
  </script>
  
