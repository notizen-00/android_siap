// tanggal.js
export const tanggal = () => {
    const options = { day: 'numeric' };
    return new Date().toLocaleDateString('id-ID', options);
  };
  
  export const bulan = () => {
    const options = { month: 'long' };
    return new Date().toLocaleDateString('id-ID', options);
  };
  
  export const hari = () => {
    const options = { weekday: 'long' };
    return new Date().toLocaleDateString('id-ID', options);
  };
  
  export const fullDay = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('id-ID', options);
  };
  