import { Idiomas } from '../idiomas';


export default async function FootBar({ idioma}) {
  const viento = (idioma === 'es') ? ' Viento Actual:' : 'Actual Wind:';
  const data = await getData()
  const datos= data.current_weather.windspeed
  return (
    <div className="fixed bottom-0 w-full h-12 bg-orange-500 border-t-2 border-white rounded-t-lg flex items-center justify-center">
      <div className="w-3/4 flex justify-star m-2 text-white">
        {`${viento} ${datos} Knts`}
      </div>  
      <div className="w-3/4 flex justify-end m-2">
        <Idiomas idioma={idioma} />
      </div>
    </div>
  );
};

async function getData() {
  const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=28.05&longitude=-16.54&hourly=temperature_2m,weathercode,windspeed_10m,windgusts_10m,winddirection_10m,uv_index&models=gfs_global&current_weather=true&windspeed_unit=kn&timezone=Europe%2FLondon";
  const res = await fetch(apiUrl, { next: { revalidate: 1500 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}