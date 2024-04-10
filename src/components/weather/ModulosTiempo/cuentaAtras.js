'use client'
import React, { useState, useEffect } from "react";

function secondsToHours(seconds) {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds / 60) % 60);
  const second = seconds % 60;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

export const CuentaAtras = ({ objetivo, tipo }) => {
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
    return <div>Cargando...</div>;
  }

  return (
    <div className="CuentaAtras">
      {segundosRestantes === 0 ? (
        <div>Cambio de marea</div>
      ) : (
        <div>
          Faltan {secondsToHours(segundosRestantes)} para {tipo}.
        </div>
      )}
    </div>
  );
};
