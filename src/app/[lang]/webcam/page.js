import ScrollingBanner from "@/components/scrollingBanner/scrollingBanner";
import { ActualTide } from "@/components/weather/actualTide";
import { ActualWind } from "@/components/weather/actualWind";
import { ForecastWind } from "@/components/weather/forecastWind";
import Webcam from "@/components/webcam/webcam";



export default async function Page ({params}) {
  
  const idioma= params.lang;
  const meta_title= (idioma === 'es')? 'El Médano Webcam': 'El Médano Live Camera';
  const currentUrl = `https://tenerife-kite-foil.com/${params.lang}/webcam`;
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

    const bannerTexts = [
        'Eleveight RSV8 kite 1.279€',
        'Eleveight WSV7 kite 1.279€',
        'ELEVEIGHT RS+V2 10m 1.510€',
      ];
      return (
        <div>
          <title>{meta_title}</title>
          <link rel="canonical" href={currentUrl} />
          <meta name="description" content={meta_description} />
          <meta name="keywords" content={meta_keywords} />
          <ScrollingBanner title={'Outlet  '} texts={bannerTexts} />
          <div className="flex justify-center">
            <Webcam width={'auto'} height={'auto'} />
          </div>
          <ScrollingBanner title={'Outlet  '} texts={bannerTexts} />
          <div className="flex justify-center m-2 gap-4 flex-wrap">
            <ActualWind idioma={idioma} />
            <ActualTide idioma={idioma}/>
            <ForecastWind idioma={idioma}/>
          </div>
        </div>
      );
}