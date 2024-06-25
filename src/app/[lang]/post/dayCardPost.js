import { Acordion } from "@/components/weather/Acordion/acordion";
import { Sunrise } from "@/components/weather/ModulosTiempo/sunrise";
import { Sunset } from "@/components/weather/ModulosTiempo/sunset";
import { TemperatureMaxMin } from "@/components/weather/ModulosTiempo/temperatureMaxMin";


export const DayCardPost = ({idioma, amanecer, atardecer, temperatura, fecha, hora, viento,racha, direccion, range_time}) => {
  const maxTemp = Math.max(...temperatura);
  const minTemp = Math.min(...temperatura);
  

  return (
<div className="flex m-2 mt-20 w-auto border-2 border-blue-500 rounded-md" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
      <div className="m-2 p-2 flex flex-col w-auto">
        <div className="capitalize">{fecha}</div>
        <div className="flex flex-row">
          <div>
            <Sunrise idioma={idioma} amanecer={amanecer} />
          </div>
          <div>
            <Sunset idioma={idioma} atardecer={atardecer} />
          </div>
        </div>
        <div>
          <TemperatureMaxMin idioma={idioma} temp_max={maxTemp} temp_min={minTemp}/>
        </div>
        <div className="flex flex-col mt-2 w-full">
          <Acordion tipo={'viento'} idioma={idioma} hora={hora} viento={viento} racha={racha} direccion={direccion} range_time={range_time} />
        </div>

        <div>{/* <Olas /> */}</div>
      </div>
    </div>
  );
};
