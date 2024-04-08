import { getData } from "@/utils/functions";
import { Tiempo } from "./ModulosTiempo/tiempo";
import { Sunrise } from "./ModulosTiempo/sunrise";
import { Sunset } from "./ModulosTiempo/sunset";
import { Temperature } from "./ModulosTiempo/temperature";
import { Uv } from "./ModulosTiempo/uv";
import { Viento } from "./ModulosTiempo/viento";
import { RosaViento } from "./ModulosTiempo/RosaViento";
import { Compass } from "./ModulosTiempo/compass";


export const ActualWind = async () => {
  const horaActual = new Date().getHours().toString().padStart(2, '0');
  const data = await getData();
  const estadotiempo = data.current_weather.weathercode;
  const amanecer = data.daily.sunrise[0].split('T')[1];
  const atardecer = data.daily.sunset[0].split('T')[1];

  var condicion = '';
  if (estadotiempo === 0) {
    condicion = 'Despejado';
  } else if (estadotiempo === 1) {
    condicion = 'Nubes Dispersas';
  } else if (estadotiempo === 2) {
    condicion = 'Parcialmente Nublado';
  } else if (estadotiempo === 3) {
    condicion = 'Mayormente Nublado';
  } else if (estadotiempo === 4) {
    condicion = 'Nublado';
  } else if (estadotiempo === 5) {
    condicion = 'Lluvia Dispersa';
  } else if (estadotiempo === 6) {
    condicion = 'Lluvia';
  }
   const lastWindUpdate = data.current_weather.time.split('T')[1];
   const tempActual = data.current_weather.temperature + 'º';
   const indiceUv = data.hourly.uv_index[horaActual];
   const grados = data.current_weather.winddirection;
   console.log(data)
//   const direccion = obVientoActual?.direccion + ' ' + grados + 'º';
//    const localidad = props.localidad;
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
   const fecha_hora = new Date().toLocaleString('es-ES', options);

  return (
    <div className="flex bg-white text-black font-semibold text-lg rounded-lg w-72 h-auto p-2 flex-col flex-wrap">
      <div className="flex flex-row">
        <div className="flex flex-col m-2">
          <h2>El Medano</h2>
          <h3 className="text-xs">{fecha_hora}</h3>
        </div>
        <hr className="h-5 border border-yellow-400 mx-2" />
        <Tiempo tiempo={condicion} />
      </div>

      <hr className="h-0.5 border border-yellow-400" />

      <div className="flex flex-row">
        <Sunrise amanecer={amanecer} />
        <Sunset atardecer={atardecer} />
      </div>

      <hr className="h-0.5 border border-yellow-400" />

      <div className="flex">
        <Temperature temp_amb={tempActual} temp_agua={'19 º'} />
      </div>

      <hr className="h-0.5 border border-yellow-400" />

      <div className="flex">
        <Uv uv={indiceUv} />
      </div>

      <hr className="h-0.5 border border-yellow-400" />

      <div className="flex justify-center m-10 flex-col">
        <div className="flex flex-col m-2">
          <div className="flex justify-start">
            <Viento titulo={'Viento Actual: '} viento={data.current_weather.windspeed} update={lastWindUpdate} />
          </div>
          <div className="flex justify-center relative">
            <RosaViento grados={grados} />
          </div>
          <div className="flex justify-start">
            <Compass compass={'direccion'} />
          </div>
        </div>
      </div>

      <hr className="h-0.5 border border-yellow-400" />
    </div>
  );
};
