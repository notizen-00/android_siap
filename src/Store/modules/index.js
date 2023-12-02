// src/store/modules/index.js

import { useAuthStores } from './authStore'
import { useOverlayStores } from './overlayStore'
import { useKaryawanStores } from './karyawanStore'
import { useAbsensiStores } from './absensiStore'
import { useMapStores } from './mapStore'
import { useDevicesStores } from './deviceStore'

// Impor modul-modul lain jika ada

export function useStore() {
  return {
    authStore:useAuthStores(),
    overlayStore:useOverlayStores(),
    karyawanStore:useKaryawanStores(),
    absensiStore:useAbsensiStores(),
    mapStore:useMapStores(),
    deviceStore:useDevicesStores()
    // Masukkan modul-modul lain di sini jika ada
  }
}
