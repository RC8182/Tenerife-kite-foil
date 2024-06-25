'use client';
import React, { useState } from 'react';
import arrow from '/public/icons/flecha.png';
import Image from 'next/image';
import { useRangeTime } from '@/context/context';

export const Acordion = ({ tipo, idioma, direccion, hora, viento, racha, chart}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { minVal, maxVal } = useRangeTime();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const getTitle = () => {
    if (tipo === 'viento') {
      return idioma === 'es' ? 'Información de Viento' : 'Wind Forecast';
    } else if (tipo === 'marea') {
      return idioma === 'es' ? 'Mareas' : 'Tides';
    }
    return '';
  };

  const getHeaders = () => {
    if (tipo === 'viento') {
      return (
        <tr className="text-orange-500">
          <th>{idioma === 'es' ? 'Hora' : 'Time'}</th>
          <th>{idioma === 'es' ? 'Viento' : 'Wind'}</th>
          <th>{idioma === 'es' ? 'Racha' : 'Gust'}</th>
          <th>{idioma === 'es' ? 'Dirección' : 'Direction'}</th>
        </tr>
      );
    }
    return null;
  };

  const renderBody = () => {
    if (hora && hora.length > 0) {
      return hora.slice(minVal, maxVal + 1).map((item, index) => {
        if (tipo === 'viento') {
          return (
            <tr key={index}>
              <td className='text-center'>{item.padStart(5, '0')}</td>
              <td className='text-center'>
                <div className="flex flex-col items-center">
                  <span>{viento[index + minVal] + " kt"}</span>
                </div>
              </td>
              <td className='text-center'>
                <div className="flex flex-col items-center">
                  <span>{racha[index + minVal] + " kt"}</span>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-end">
                  <span>{direccion[index + minVal]}º</span>
                  <div className="mt-2">
                    <Image
                      className="icono-flecha-rosa-viento w-5"
                      style={{ transform: `rotate(${direccion[index + minVal]}deg)` }}
                      src={arrow}
                      alt="Wind Compass"
                    />
                  </div>
                </div>
              </td>
            </tr>
          );
        } else if (tipo === 'marea') {
          // return (
          //   <tr key={index} className='text-red-500'>
          //     <td className='text-center'><Tides idioma={idioma} dia={3}/> {index}</td>
          //   </tr>
          // );
        }
        return null;
      });
    }
    return (
      <tr>
        <td className='text-center'>{chart}</td>
      </tr>
    );
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-2 border-blue-500 rounded-t-xl hover:bg-blue-100 gap-3"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
          onClick={toggleAccordion}
        >
          <span>{getTitle()}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" className={`border-2 rounded-b-xl border-blue-500 ${isOpen ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 border-b-0">
          <table className="w-full">
            <thead>
              {getHeaders()}
            </thead>
            <tbody>
              {renderBody()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
