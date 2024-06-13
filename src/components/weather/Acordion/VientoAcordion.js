'use client'
import React, { useState } from 'react';
import arrow from '/public/icons/flecha.png'
import Image from 'next/image';
import { useRangeTime } from '@/context/context';

export const VientoAcordion = ({ idioma, direccion, hora, viento, racha }) => {
  const title = (idioma === 'es') ? 'Información de Viento' : 'Wind Forecast';
  const [isOpen, setIsOpen] = useState(false);
  const {minVal, maxVal}= useRangeTime();


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue-500 border border-b-2 border-orange-200 rounded-t-xl focus:ring-2 focus:ring-orange-200 dark:focus:ring-gray-800 hover:bg-blue-100 gap-3"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
          onClick={toggleAccordion}
        >
          <span>{title}</span>
          <svg
              data-accordion-icon
              className={`w-3 h-3 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" className={`border border-b-4 border-orange-300 ${isOpen ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 border border-b-0 border-gray-20">
          {/* Crear una tabla para mostrar los datos */}
          <table className="w-full">
            <thead>
              <tr className='text-blue-500'>
                <th>Hora</th>
                <th>Viento</th>
                <th>Racha</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
            {hora.slice(minVal, maxVal + 1).map((item, index) => (
              <tr key={index}>
                {/* Formatear la hora en el formato "00:00" */}
                <td className='text-center'>{item.padStart(5, '0')}</td>
                <td className='text-center'>
                  <div className="flex flex-col items-center">
                    <span>{viento[index + minVal]+" kt"}</span>
                  </div>
                </td>
                <td className='text-center'>
                  <div className="flex flex-col items-center">
                    <span>{racha[index + minVal]+" kt"}</span>
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
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
