import React from 'react';
// import { Olas } from '../../Modulos Tiempo/Olas'
import { Sunrise } from '../../ModulosTiempo/sunrise';
import { Sunset } from '../../ModulosTiempo/sunset';
import { TemperatureMaxMin } from '../../ModulosTiempo/temperatureMaxMin';
import { VientoAcordion } from '../../Acordion/VientoAcordion';

export const DayCard = ({idioma, amanecer, atardecer, temperatura, fecha, hora, viento,racha, direccion, range_time}) => {
  const maxTemp = Math.max(...temperatura);
  const minTemp = Math.min(...temperatura);
  

  return (
    <div className="flex m-2 w-auto border-2 border-orange-300 rounded-md">
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
          <VientoAcordion idioma={idioma} hora={hora} viento={viento} racha={racha} direccion={direccion} range_time={range_time} />
        </div>

        <div>{/* <Olas /> */}</div>
      </div>
    </div>
  );
};
