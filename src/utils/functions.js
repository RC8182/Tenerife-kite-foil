export const fetchStrapi = async(slug,locale,component1,component2) => {
  const localhost=process.env.NEXT_PUBLIC_STRAPI_LOCAL_HOST
  const token= process.env.API_TOKEN
    const url= (component1==='')
    ? `${localhost}/api/${slug}?populate=*&locale=${locale}`
    :`${localhost}/api/${slug}?populate[${component1}][populate]=*&populate[${component2}][populate]=*&locale=${locale}`;

    const request = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: "no-store"
    })
    const response = await request.json()
    return response
  }
 
  export async function getDataWind() {
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=28.05&longitude=-16.54&hourly=temperature_2m,weathercode,windspeed_10m,windgusts_10m,winddirection_10m,uv_index&daily=sunrise,sunset&models=gfs_global&current_weather=true&windspeed_unit=kn&timezone=Europe%2FLondon";
    const res = await fetch(apiUrl, { next: { revalidate: 1500 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data wind')
    }
   
    return res.json()
  }
  function obtenerMesActual() {
    const hoy = new Date();
    const año = hoy.getFullYear().toString();
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes como cadena y asegurarse de que tenga dos dígitos
  
    return año + mes;
  }
  

  export async function getDataTide() {
    const currenmonth= obtenerMesActual()
    const apiUrl = `https://ideihm.covam.es/api-ihm/getmarea?request=gettide&id=64&format=json&month=${currenmonth}`;
    const res = await fetch(apiUrl, { next: { revalidate: 1500 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data tide')
    }
   
    return res.json()
  }

  const apiKey= 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYXZpZXJ2aXNjb250aUBob3RtYWlsLmNvbSIsImp0aSI6IjFkNjM1Y2FhLWY0M2UtNDAxYS1hNDk5LWY0NGU4ZmI0YzkxNyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzEyNzQ0MDIwLCJ1c2VySWQiOiIxZDYzNWNhYS1mNDNlLTQwMWEtYTQ5OS1mNDRlOGZiNGM5MTciLCJyb2xlIjoiIn0.flvTqoNFufMUdDhfh45aZupckWGk4GTXsZ_-TAwX7B4';

  export async function getMedano() {
    const apiUrl = `https://opendata.aemet.es/opendata/api/prediccion/maritima/costera/costa/43/?api_key=${apiKey}`;
    const res = await fetch(apiUrl, { next: { revalidate: 1500 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data wind')
    }
   
    return res.json()
  }