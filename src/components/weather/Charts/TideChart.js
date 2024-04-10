'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const TideChart = ({ listaMareas, min_day, max_day, estado }) => {
  const hoy = new Date().getTime();
  const estadoActual=(estado === 'bajamar')?  'Bajando' :'Subiendo';

  function dia(n){
    return n * 86400000;
  }
  
  const mareas = listaMareas?.map((e)=> {
    const altura = parseFloat(e.altura);
    const fecha = e.fecha;
    const hora = e.hora;
    const diaHora = new Date(fecha + ' ' + hora).getTime();
    return [diaHora, altura];
  });

  const newSeries = [{
    name: 'Tide',
    data: mareas || []
  }];

  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(newSeries);
  }, []);

  // Encontrar la marea más cercana en el tiempo a la hora actual
  const currentMareaData = mareas.reduce((closestMarea, marea) => {
    const [mareaDate] = marea;
    const [closestDate] = closestMarea;
    return Math.abs(hoy - mareaDate) < Math.abs(hoy - closestDate) ? marea : closestMarea;
  }, mareas[0]);

  const maxY = Math.max(...mareas.map(m => m[1]));
  const minY = Math.min(...mareas.map(m => m[1]));
  const rangeY = maxY - minY;

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: true,
      offsetX: 30
    },
    stroke: {
      curve: 'smooth'
    },
    yaxis: {
      labels: {
        style: {
          colors: 'black',
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400
        }
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          hour: 'HH:mm'
        },
        style: {
          colors: 'black',
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400
        }
      },
      min: hoy - dia(min_day),
      max: hoy + dia(max_day),
    },
    annotations: {
      xaxis: [
        {
          x: new Date().getTime(),
          borderColor: 'rgb(255, 154, 0)',
          label: {
            borderColor: 'rgb(255, 154, 0)',
            orientation: 'horizontal',
            text: estadoActual,
            style: {
              color: '#fff',
              background: '#0093D1',
            }
          }
        }
      ],
      points: [{
        x: new Date().getTime(),
        y: '0',
        marker: {
          size: 8,
          fillColor: '#fff',
          strokeColor: '#0093D1',
          radius: 5,
        },
        label: {
          borderColor: 'rgb(255, 154, 0)',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#0093D1',
          },
          text: Date().slice(16,21) +' hs',
        }
      }]
    }
  };


  return (
    <ReactApexChart options={options} series={series} type="area" height={200} width={'100%'}  />
  );
};
