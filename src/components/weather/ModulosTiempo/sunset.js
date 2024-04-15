import Image from 'next/image';
import sunset from "/public/icons/if-weather-sunset-removebg-preview.png"
export const Sunset = ({ atardecer, idioma }) => {
    const title= (idioma === 'es')? 'Atardecer' : 'Sunset';
    const horaAmanecer = new Date(atardecer).toLocaleTimeString(idioma, { hour: 'numeric', minute: 'numeric' });
    return (
        <div className="flex flex-col text-xs">
            <div className="flex items-center">
                <Image
                    className="w-9 h-9 rounded-full mr-2"
                    src={sunset}
                    alt="Icono-Sunset"
                    width={36}
                    height={36}
                    loading="lazy"

                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="mr-2">{title}:</div>
                        <div>{horaAmanecer}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
