'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Componente para el gráfico de mareas
export const TideChart = ({ listaMareas, min_day, max_day, estadoActual, fechaBase }) => {
  const baseTime = fechaBase.getTime();
  const mareas = listaMareas?.map((e) => {
    const altura = parseFloat(e.altura);
    const fecha = e.fecha;
    const hora = e.hora;
    const diaHora = new Date(`${fecha} ${hora}`).getTime();
    return [diaHora, altura];
  });

  const newSeries = [{
    name: 'Tide',
    data: mareas || []
  }];

  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(newSeries);
  }, [listaMareas]);

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
      offsetX: 15
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
      min: baseTime - min_day * 24 * 60 * 60 * 1000,
      max: baseTime + max_day * 24 * 60 * 60 * 1000,
    },
    annotations: {
      xaxis: [
        {
          x: baseTime,
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
        x: baseTime,
        y: 0,
        marker: {
          size: 8,
          fillColor: 'rgb(255, 154, 0)',
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
          text: new Date(baseTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Hora actual en formato HH:mm
        }
      }]
    }
  };

  return (
    <ReactApexChart options={options} series={series} type="area" height={200} width={'100%'} />
  );
};

// Componente principal que obtiene y muestra los gráficos
export const Tides = ({ idioma, index }) => {
  const [mareas, setMareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMareas = async () => {
      const dataActual = await getDataTide();
      let mareasMes = dataActual.mareas.datos.marea;

      const hoy = new Date();
      const diaActual = hoy.getDate();

      // Verificar si es necesario obtener los datos del mes siguiente
      if ((hoy.getMonth() === 1 && diaActual >= 20) || diaActual >= 23) {
        const dataSiguiente = await getNextMonthDataTide();
        const mareasMesSiguiente = dataSiguiente.mareas.datos.marea;
        mareasMes = [...mareasMes, ...mareasMesSiguiente];
      }

      setMareas(mareasMes);
      setLoading(false);
    };

    fetchMareas();
  }, []);

  const obtenerMareasPorDia = (mareas, dias) => {
    let mareasPorDia = {};

    for (let i = -2; i <= dias; i++) {
      const dia = new Date();
      dia.setDate(dia.getDate() + i);
      const fecha = dia.toISOString().slice(0, 10);
      mareasPorDia[fecha] = mareas.filter(marea => marea.fecha === fecha);
    }

    return mareasPorDia;
  };

  const mareasProximos7Dias = obtenerMareasPorDia(mareas, 7);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const fechaSeleccionada = new Date();
  fechaSeleccionada.setDate(fechaSeleccionada.getDate() + index);
  const fechaFormato = fechaSeleccionada.toISOString().slice(0, 10);
  const mareasDiaSeleccionado = mareasProximos7Dias[fechaFormato] || [];

  // Obtener la última marea del día anterior y la primera del día siguiente
  const fechaAnterior = new Date(fechaSeleccionada);
  fechaAnterior.setDate(fechaAnterior.getDate() - 1);
  const fechaFormatoAnterior = fechaAnterior.toISOString().slice(0, 10);
  const mareasDiaAnterior = mareasProximos7Dias[fechaFormatoAnterior] || [];

  const fechaPosterior = new Date(fechaSeleccionada);
  fechaPosterior.setDate(fechaPosterior.getDate() + 1);
  const fechaFormatoPosterior = fechaPosterior.toISOString().slice(0, 10);
  const mareasDiaPosterior = mareasProximos7Dias[fechaFormatoPosterior] || [];

  // Combinar mareas del día seleccionado con la última del día anterior y la primera del día siguiente
  const mareasSeleccionadas = [
    ...mareasDiaAnterior.slice(-3),
    ...mareasDiaSeleccionado,
    ...mareasDiaPosterior.slice(0, 3)
  ].filter(Boolean); // Filtrar valores no válidos (undefined)

  return (
    <div className='contenedor-card bg-white text-black font-semibold text-12 rounded-lg min-w-full md:min-w-[350px] h-auto p-2 flex flex-col'>
      <div className='flex flex-col'>
        <div className="flex justify-center text-lg">
          <h2>{idioma === 'es' ? 'Mareas' : 'Tides'}</h2>
        </div>
        <div className='divider border border-orange-300'></div>
      </div>

      <div className='mt-4'>
        <h3 className="text-lg font-semibold">{fechaFormato}</h3>
        <div>
          {mareasDiaSeleccionado.map((marea, i) => (
            <p key={i}>{`${marea.hora} ${marea.tipo === 'pleamar' ? 'Pleamar' : 'Bajamar'}`}</p>
          ))}
        </div>
        <TideChart
          listaMareas={mareasSeleccionadas}
          min_day={0.5}
          max_day={0.75}
          estadoActual={idioma === 'es' ? 'Ahora' : 'Now'}
          fechaBase={fechaSeleccionada}
        />
      </div>
    </div>
  );
};

function obtenerMesActual() {
  const hoy = new Date();
  const año = hoy.getFullYear().toString();
  const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes como cadena y asegurarse de que tenga dos dígitos

  return año + mes;
}

function obtenerMesSiguiente() {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = hoy.getMonth() + 1; // Mes actual (0-11)
  const mesSiguiente = (mes + 1) % 12; // Mes siguiente
  const añoSiguiente = mesSiguiente === 0 ? año + 1 : año; // Ajustar año si el mes siguiente es enero

  return `${añoSiguiente}${(mesSiguiente + 1).toString().padStart(2, '0')}`;
}

// Función de obtención de datos (simulación)
export async function getDataTide() {
  const currentMonth = obtenerMesActual();
  const apiUrl = `https://ideihm.covam.es/api-ihm/getmarea?request=gettide&id=64&format=json&month=${currentMonth}`;
  const res = await fetch(apiUrl, { next: { revalidate: 1500 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data tide');
  }

  return res.json();
}

export async function getNextMonthDataTide() {
  const nextMonth = obtenerMesSiguiente();
  const apiUrl = `https://ideihm.covam.es/api-ihm/getmarea?request=gettide&id=64&format=json&month=${nextMonth}`;
  const res = await fetch(apiUrl, { next: { revalidate: 1500 } });

  if (!res.ok) {
    throw new Error('Failed to fetch next month data tide');
  }

  return res.json();
}
