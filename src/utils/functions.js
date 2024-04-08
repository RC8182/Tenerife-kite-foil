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
 
  export async function getData() {
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=28.05&longitude=-16.54&hourly=temperature_2m,weathercode,windspeed_10m,windgusts_10m,winddirection_10m,uv_index&daily=sunrise,sunset&models=gfs_global&current_weather=true&windspeed_unit=kn&timezone=Europe%2FLondon";
    const res = await fetch(apiUrl, { next: { revalidate: 1500 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }