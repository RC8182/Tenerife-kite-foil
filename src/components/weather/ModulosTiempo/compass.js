import Image from 'next/image';
import comp from "/public/icons/compass-celeste-removebg-preview.png"

function obtenerPuntoCardinal(grados) {
    const direcciones = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
                   "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

    // Asegurarse de que los grados estén en el rango de 0 a 360
    grados %= 360;

    // Calcular el índice correspondiente al punto cardinal
    const index = Math.round(grados / (360 / direcciones.length));

    return direcciones[index % direcciones.length];
}

export const Compass = ({ grados, idioma }) => {
    const title=(idioma==='es')?'Dirección:':'Direction';

    const puntoCardinal= obtenerPuntoCardinal(grados);
    return (
        <div className="flex flex-col text-xs">
            <div className="flex items-center">
                <Image
                    className="w-8 h-8 rounded-full mr-2"
                    src={comp}
                    alt="Icono-Compass"
                    width={36}
                    height={36}
                    loading="lazy"
                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="mr-2">{title}</div>
                        <div>{`${puntoCardinal} ${grados}º`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
