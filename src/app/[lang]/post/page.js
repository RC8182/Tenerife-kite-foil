import Webcam from "@/components/webcam/webcam";
import { getDataWind } from "@/utils/functions";
import { DayCardPost } from "./dayCardPost";



export default async function Page ({params}) {
  
    const idioma= params.lang;
    const meta_title= (idioma === 'es')? 'El Médano Webcam': 'El Médano Live Camera';
    const currentUrl = `https://tenerife-kite-foil.com/${params.lang}/post`;
    const meta_description=(idioma === 'es')?
    'Condiciones actuales y las previsiones del tiempo en El Médano a través de nuestra cámara web en vivo. Nuestro sitio web ofrece materiales de alta calidad para kitesurf y wingfoil. Mantente al día con las condiciones climáticas, la temperatura y las mareas para planificar tu próxima aventura de kitesurf o wingfoil en El Médano'
    :
    'Current conditions and weather forecasts in El Médano through our live webcam. Our website offers high-quality materials for kitesurfing and wingfoil. Stay up-to-date with the weather conditions, temperature, and tides to plan your next kitesurfing or wingfoil adventure in El Médano.'
    ;
    const meta_keywords= (idioma === 'es')?
    'Kitesurf El Médano, Wingfoil El Médano, Condiciones climáticas El Médano, Webcam El Médano, Temperatura El Médano, Mareas El Médano, Previsión del tiempo El Médano, Materiales de kitesurf, Materiales de wingfoil'
    :
    'Kitesurf El Médano, Wingfoil El Médano, Weather conditions El Médano, Webcam El Médano, Temperature El Médano, Tides El Médano, Weather forecast El Médano, Kitesurfing materials, Wingfoil materials'
    ;

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
    const diasFiltrados = dias.slice(0, 5);
    return (
        <div>
          <meta name="robots" content="noindex"></meta>
          <title>{meta_title}</title>
          <link rel="canonical" href={currentUrl} />
          <meta name="description" content={meta_description} />
          <meta name="keywords" content={meta_keywords} />
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <Webcam width={'100%'} height={'20%'} />
            </div>
            <div className="relative z-10 flex justify-center items-center">
              {diasFiltrados.map((dia, index) => (
                <DayCardPost
                  key={index}
                  idioma={idioma}
                  fecha={dia.fecha}
                  hora={dia.horarios.hora}
                  temperatura={dia.horarios.temperatura}
                  viento={dia.horarios.viento}
                  racha={dia.horarios.racha}
                  direccion={dia.horarios.direccion}
                  amanecer={dia.amanecer}
                  atardecer={dia.atardecer}
                />
              ))}
            </div>
          </div>
        </div>
      );
}