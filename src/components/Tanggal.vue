<template>
    <div>
      {{ tanggal }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tanggal: null,
        namaHari: '',
        namaBulan: '',
        tahun: 0,
      };
    },
    props(){
        
    },  
    methods: {
      setTanggalIndonesia() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const tanggal = new Date().toLocaleDateString('id-ID', options);
  
        const [namaHari, namaBulan, tahun] = tanggal.split(' ');
  
        this.tanggal = tanggal;
        this.namaHari = namaHari;
        this.namaBulan = namaBulan;
        this.tahun = tahun;
      },
    },
    mounted() {
      this.setTanggalIndonesia();
    },
  };
  </script>
  