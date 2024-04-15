import Image from 'next/image';
import temperatura from "/public/icons/if-weather-temp-removebg-preview.png"
export const TemperatureMaxMin = ({ temp_max, temp_min, idioma }) => {

    const max= (idioma === 'es')? 'Temperatura Máxima': 'Max Temperature';
    const min= (idioma === 'es')? 'Temperatura Mínima':'Min Temperature';
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
                        <div className="mr-2">{max}:</div>
                        <div>{temp_max}º</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{min}:</div>
                        <div>{temp_min}º</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
