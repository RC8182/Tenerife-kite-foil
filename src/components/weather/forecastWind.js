import { getDataWind } from "@/utils/functions";
import { ContenedorDays } from "./Acordion/Cards/ContenedorDays";

export const ForecastWind = async ({ idioma }) => {
  const title = idioma === 'es' ? 'Pronóstico' : 'Forecast';
  const data = await getDataWind();
  const fechas = data.daily.time;
  const hora = data.hourly.time;
  const amanecer = data.daily.sunrise;
  const atardecer = data.daily.sunset;
  const viento = data.hourly.windspeed_10m.map(v => Math.round(v)); // Redondear las velocidades del viento
  const direccion = data.hourly.winddirection_10m;
  let racha = data.hourly.windgusts_10m.map(r => Math.round(r)); // Redondear las rachas de viento
  const cantidadDias = fechas.length;
  const temperatura = data.hourly.temperature_2m.map(t => Math.round(t)); // Redondear las temperaturas
  const dias = [];
  const lang = idioma === 'es' ? 'es-ES' : 'en-US';

  // Asegurar que las rachas no sean menores que las velocidades del viento
  for (let i = 0; i < racha.length; i++) {
    if (racha[i] < viento[i]) {
      racha[i] = viento[i];
    }
  }

  for (let i = 0; i < cantidadDias; i++) {
    const inicioIndice = i * 24;
    const finIndice = inicioIndice + 24;

    const horasFormateadas = hora.slice(inicioIndice, finIndice).map((horaItem) => {
      const horaDate = new Date(horaItem);
      const formattedHour = horaDate.getHours().toString().padStart(2, '0');
      const formattedMinute = horaDate.getMinutes().toString().padStart(2, '0');
      return `${formattedHour}:${formattedMinute}`;
    });

    dias.push({
      fecha: new Date(fechas[i]).toLocaleString(lang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
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
        <ContenedorDays idioma={idioma} dias={dias} />
      </div>
      <hr className="divider border-t-2 border-orange-300" />
    </div>
  );
};
