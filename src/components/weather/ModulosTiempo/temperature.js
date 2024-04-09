import Image from 'next/image';
import temperatura from "/public/icons/if-weather-temp-removebg-preview.png"
export const Temperature = ({ temp_amb, temp_agua, idioma }) => {

    const t_ambiente= (idioma === 'es')? 'Temperatura ambiente': 'Ambient temperature';
    const t_agua= (idioma === 'es')? 'Temperatura de agua':'Water temperature';
    return (
        <div className="flex flex-col text-xs">
            <div className="flex items-center">
                <Image
                    className="w-9 h-9 rounded-full mr-2"
                    src={temperatura}
                    alt="Icono-Temperature"
                    width={36}
                    height={36}
                    loading="lazy"
                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="mr-2">{t_ambiente}:</div>
                        <div>{temp_amb}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{t_agua}:</div>
                        <div>{temp_agua}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
