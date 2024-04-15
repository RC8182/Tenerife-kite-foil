import { Tiempo } from "./ModulosTiempo/tiempo";
import { Sunrise } from "./ModulosTiempo/sunrise";
import { Sunset } from "./ModulosTiempo/sunset";
import { Temperature } from "./ModulosTiempo/temperature";
import { Uv } from "./ModulosTiempo/uv";
import { Viento } from "./ModulosTiempo/viento";
import { RosaViento } from "./ModulosTiempo/RosaViento";
import { Compass } from "./ModulosTiempo/compass";
import { getDataWind} from "@/utils/functions";


export const ActualWind = async ({idioma}) => {
  const horaActual = new Date().getHours().toString().padStart(2, '0');
  const data = await getDataWind();
  const estadotiempo = data.current_weather.weathercode;
  const amanecer = data.daily.sunrise[0];
  const atardecer = data.daily.sunset[0];

  var condicion = '';
  if (estadotiempo === 0) {
    condicion = (idioma === 'es') ? 'Despejado' : 'Clear';
  } else if (estadotiempo === 1) {
    condicion = (idioma === 'es') ? 'Nubes Dispersas' : 'Scattered Clouds';
  } else if (estadotiempo === 2) {
    condicion = (idioma === 'es') ? 'Parcialmente Nublado' : 'Partly Cloudy';
  } else if (estadotiempo === 3) {
    condicion = (idioma === 'es') ? 'Mayormente Nublado' : 'Mostly Cloudy';
  } else if (estadotiempo === 4) {
    condicion = (idioma === 'es') ? 'Nublado' : 'Cloudy';
  } else if (estadotiempo === 5) {
    condicion = (idioma === 'es') ? 'Lluvia Dispersa' : 'Light Rain';
  } else if (estadotiempo === 6) {
    condicion = (idioma === 'es') ? 'Lluvia' : 'Rain';
  }
  
   const lastWindUpdate = data.current_weather.time.split('T')[1];
   const tempActual = data.current_weather.temperature + 'º';
   const indiceUv = data.hourly.uv_index[horaActual];
   const grados = data.current_weather.winddirection;
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
   const lang= (idioma === 'es')? 'es-ES' : 'en-US' 
   const fecha_hora = new Date().toLocaleString(lang, options);

  return (
    <div className="flex bg-white text-black font-semibold text-lg rounded-lg min-w-full md:min-w-[350px] h-auto p-2 flex-col flex-wrap">
      <div className="flex flex-row ">
        <div className="flex flex-col m-2">
          <h2>El Medano</h2>
          <h3 className="text-xs">{fecha_hora}</h3>
        </div>
        <div className=" border-l-2 border-orange-300 h-full px-2">
          <Tiempo tiempo={condicion} />
        </div>
        
      </div>

      <hr className="border border-orange-300" />

      <div className="flex flex-col">
        <Sunrise amanecer={amanecer} idioma={idioma}/>
        <Sunset atardecer={atardecer} idioma={idioma}/>
      </div>

      <hr className="border border-orange-300" />

      <div className="flex">
        <Temperature temp_amb={tempActual} temp_agua={'18-20 º'} idioma={idioma}/>
      </div>

      <hr className="border border-orange-300" />

      <div className="flex">
        <Uv uv={indiceUv} idioma={idioma} />
      </div>

      <hr className="border border-orange-300" />

      <div className="flex justify-center m-5 flex-col">
        <div className="flex flex-col m-2">
          <div className="flex justify-start">
            <Viento idioma={idioma} viento={data.current_weather.windspeed} update={lastWindUpdate} />
          </div>
          <div className="flex justify-center relative m-2">
            <RosaViento grados={grados} />
          </div>
          <div className="flex justify-start">
            <Compass grados={grados} idioma={idioma}/>
          </div>
        </div>
      </div>

      <hr className="border border-orange-300" />
    </div>
  );
};
