import { getDataWind } from '@/utils/functions';
import { Idiomas } from '../idiomas';


export default async function FootBar({ idioma}) {
  const viento = (idioma === 'es') ? ' Viento Actual:' : 'Actual Wind:';
  const data = await getDataWind()
  const datos= data.current_weather.windspeed
  return (
    <div className="fixed bottom-0 w-full h-12 bg-black border-t-2 border-blue-500 rounded-t-lg flex items-center justify-center z-50">
      <div className="w-3/4 flex justify-star m-2 text-white">
        {`${viento} ${datos} Knts`}
      </div>  
      <div className="w-3/4 flex justify-end m-2">
        <Idiomas idioma={idioma} />
      </div>
    </div>
  );
};

