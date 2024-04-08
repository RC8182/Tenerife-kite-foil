import { create } from 'zustand'

const url= "https://api.open-meteo.com/v1/forecast?latitude=28.05&longitude=-16.54&hourly=temperature_2m,weathercode,windspeed_10m,windgusts_10m,winddirection_10m,uv_index&models=gfs_global&current_weather=true&windspeed_unit=kn&timezone=Europe%2FLondon";

export const useWindState = create((set) => ({
    getWind: async ()=>{
        const data= await fetch(url, { next: { revalidate: 1500 } })
        const objViento= await data.json()
        console.log(objViento)
        set(state=>({
            ...state, // Copiamos todo el objeto windState, en este caso no haría falta ya que el objeto solo tiene getWind
            objViento
        }))
    }
}))