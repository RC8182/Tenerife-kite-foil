import React from 'react';
import { Sunrise } from '../../ModulosTiempo/sunrise';
import { Sunset } from '../../ModulosTiempo/sunset';
import { TemperatureMaxMin } from '../../ModulosTiempo/temperatureMaxMin';
import { Acordion } from '../acordion';
import { Tides } from '../../tides';

export const DayCard = ({idioma, amanecer, atardecer, temperatura, fecha, hora, viento,racha, direccion, range_time, chart}) => {
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
          <Acordion tipo={'viento'} idioma={idioma} hora={hora} viento={viento} racha={racha} direccion={direccion} range_time={range_time} />
        </div>
        <div className="flex flex-col mt-2 w-full">
          <Acordion tipo={'marea'} idioma={idioma} chart={chart} />
        </div>

        <div>{/* <Olas /> */}</div>
      </div>
    </div>
  );
};
