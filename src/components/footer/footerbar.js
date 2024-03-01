//import data from '../data.json';
import { Idiomas } from '../idiomas';
import {data} from '../../../data'


export default function FootBar({ idioma }) {
  const viento = (idioma === 'es') ? ' Viento Actual:' : 'Actual Wind:';
  // Utiliza los datos importados de data.json
  const datos = data.current_weather.windspeed;

  return (
    <div className="fixed bottom-0 w-full h-12 bg-orange-500 border-t-2 border-white rounded-t-lg flex items-center justify-center">
      <div className="w-3/4 flex justify-star m-2 text-white">
        {viento} {datos}
      </div>  
      <div className="w-3/4 flex justify-end m-2">
        <Idiomas idioma={idioma} />
      </div>
    </div>
  );
}
