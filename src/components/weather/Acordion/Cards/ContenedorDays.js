'use client'
import MultiRangeSlider from "@/components/rangeSlider/rangeSlider";
import { DayCard } from "./DayCard";
import { useRangeDay } from "@/context/context";

export const ContenedorDays = ({idioma, dias }) => {

    const { minVal, maxVal } = useRangeDay();

    // Crear un nuevo arreglo con los días filtrados según el rango de posiciones
    const diasFiltrados = dias.slice(minVal - 1, maxVal);
    return (
        <div className="flex flex-col">
            <div className="m-4">
                <MultiRangeSlider
                    min={1}
                    max={7}
                    title={(idioma==='es'? 'Días a mostrar': 'Days to show' )}
                    />
            </div>
            <div className="m-4">
                <MultiRangeSlider
                    min={0}
                    max={23}
                    title={(idioma==='es'? 'Horario a mostrar': 'Time to show' )}
                    context={'time'}
                    />
            </div>

            <div>
                {diasFiltrados.map((dia, index) => (
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
        </div>

    );
}
