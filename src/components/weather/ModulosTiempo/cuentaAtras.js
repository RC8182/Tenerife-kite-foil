'use client'
import React, { useState, useEffect } from "react";

function secondsToHours(seconds) {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds / 60) % 60);
  const second = seconds % 60;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

export const CuentaAtras = ({ objetivo, tipo, idioma }) => {
  const loading=(idioma === 'es')? 'Cargando...': 'Loading...';
  const cambioMarea=(idioma === 'es')? 'Cambio Marea': 'Tidal shift';
  const to=(idioma === 'es')? 'para': 'to';
  const pleamar= (idioma === 'es')? 'Pleamar': 'High Tide';
  const bajamar=(idioma === 'es')? 'Bajamar': 'Low Tide';
  const estado= (tipo === 'pleamar')? pleamar : bajamar; 
  const [segundosRestantes, setSegundosRestantes] = useState(null);

  useEffect(() => {
    const calcularSegundosRestantes = () => {
      const horaActual = new Date().getTime();
      const dif = objetivo - horaActual;
      const segundos = Math.floor(dif / 1000);
      return segundos > 0 ? segundos : 0;
    };

    const actualizarSegundosRestantes = () => {
      setSegundosRestantes(calcularSegundosRestantes());

      const timeoutId = setTimeout(() => {
        setSegundosRestantes((prevSegundos) => {
          const nuevosSegundos = prevSegundos - 1;
          return nuevosSegundos > 0 ? nuevosSegundos : 0;
        });
      }, 1000);

      return () => clearTimeout(timeoutId);
    };

    const intervalId = setInterval(actualizarSegundosRestantes, 1000);
    return () => clearInterval(intervalId);
  }, [objetivo]);

  if (segundosRestantes === null) {
    return <div>{loading}</div>;
  }

  return (
    <div className="CuentaAtras">
      {segundosRestantes === 0 ? (
        <div>{cambioMarea}</div>
      ) : (
        <div>
          {`${secondsToHours(segundosRestantes)} ${to} ${estado}.`}
        </div>
      )}
    </div>
  );
};
