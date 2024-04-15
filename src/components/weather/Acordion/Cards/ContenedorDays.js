import React from 'react';
import { DayCard } from "./DayCard";

export const ContenedorDays = ({idioma, fechas, hora, amanecer, atardecer, temperatura, viento, direccion, racha, cantidadDias }) => {
    const lang = (idioma === 'es') ? 'es-ES' : 'en-US';
    const dias = [];

    for (let i = 0; i < cantidadDias; i++) {
        const inicioIndice = i * 24;
        const finIndice = inicioIndice + 24;

        const horasFormateadas = hora.slice(inicioIndice, finIndice).map((horaItem) => {
            // Parsear la hora en caso de que esté en un formato diferente
            const horaDate = new Date(horaItem);
            // Formatear la hora y los minutos con dos dígitos
            const formattedHour = horaDate.getHours().toString().padStart(2, '0');
            const formattedMinute = horaDate.getMinutes().toString().padStart(2, '0');
            // Retornar la hora formateada
            return `${formattedHour}:${formattedMinute}`;
        });

        dias.push({
            fecha: new Date(fechas[i]).toLocaleString(lang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}),
            horarios: {
                hora: horasFormateadas,
                temperatura: temperatura.slice(inicioIndice, finIndice),
                viento: viento.slice(inicioIndice, finIndice),
                direccion: direccion.slice(inicioIndice, finIndice),
                racha: racha.slice(inicioIndice, finIndice),
            },
            amanecer: amanecer[i],
            atardecer: atardecer[i],
        });
    }

    return (
        <div>
            {dias.map((dia, index) => (
                <DayCard
                    key={index}
                    idioma={idioma}
                    fecha={dia.fecha}
                    hora={dia.horarios.hora}
                    temperatura={dia.horarios.temperatura}
                    viento={dia.horarios.viento}
                    racha={dia.horarios.racha}
                    direccion={dia.horarios.direccion}
                    amanecer={dia.amanecer}
                    atardecer={dia.atardecer}
                />
            ))}
        </div>
    );
}
