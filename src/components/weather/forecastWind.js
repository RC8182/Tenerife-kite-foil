import { getDataWind } from "@/utils/functions";
import { ContenedorDays } from "./Acordion/Cards/ContenedorDays";

export const ForecastWind = async ({idioma}) => {
  const title= (idioma === 'es')? 'Pronóstico': 'Forecast';
  const data = await getDataWind();
  const fechas = data.daily.time;
  const hora = data.hourly.time;
  const amanecer = data.daily.sunrise;
  const atardecer = data.daily.sunset;
  const viento = data.hourly.windspeed_10m;
  const direccion = data.hourly.winddirection_10m;
  const racha = data.hourly.windgusts_10m;
  const cantidadDias = fechas.length;
  const temperatura= data.hourly.temperature_2m;


  return (
    <div className='contenedor-card bg-white text-black font-semibold text-12 rounded-lg min-w-full md:min-w-[350px] h-auto p-2 flex flex-col'>
      <div className="flex flex-col">
      <div className="flex justify-center text-lg">
          <h2>{title}</h2>
        </div>
      </div>

      <hr className="divider border-t-2 border-orange-300" />

      <div className="flex flex-col">
      <ContenedorDays 
      idioma={idioma}
      fechas={fechas}
      hora={hora} 
      amanecer={amanecer}
      atardecer={atardecer}
      temperatura={temperatura}
      viento={viento}
      direccion={direccion}
      racha={racha}
      cantidadDias={cantidadDias} />
      </div>
      <hr className="divider border-t-2 border-orange-300" />
    </div>
  );
};
