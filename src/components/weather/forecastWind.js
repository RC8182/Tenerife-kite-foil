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
  const dias = [];
  const lang = (idioma === 'es') ? 'es-ES' : 'en-US';

  for (let i = 0; i < cantidadDias; i++) {
      const inicioIndice = i * 24;
      const finIndice = inicioIndice + 24;

      const horasFormateadas = hora.slice(inicioIndice, finIndice).map((horaItem) => {
          // Parsear la hora en caso de que esté en un formato diferente
          const horaDate = new Date(horaItem);
          // Formatear la hora y los minutos con dos dígitos
          const formattedHour = horaDate.getHours().toString().padStart(2, '0');
          const formattedMinute = horaDate.getMinutes().toString().padStart(2, '0');
          // Retornar la hora formateada
          return `${formattedHour}:${formattedMinute}`;
      });

      dias.push({
          fecha: new Date(fechas[i]).toLocaleString(lang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}),
          horarios: {
              hora: horasFormateadas,
              temperatura: temperatura.slice(inicioIndice, finIndice),
              viento: viento.slice(inicioIndice, finIndice),
              direccion: direccion.slice(inicioIndice, finIndice),
              racha: racha.slice(inicioIndice, finIndice),
          },
          amanecer: amanecer[i],
          atardecer: atardecer[i],
      });
  }


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
      dias={dias} />
      </div>
      <hr className="divider border-t-2 border-orange-300" />
    </div>
  );
};
