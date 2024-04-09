import Image from 'next/image'
import wind from '/public/icons/weather-wind.png'
export const Viento = ({ viento, idioma, update }) => {
    const titulo= (idioma === 'es')? 'Viento Actual:': 'Actual Wind:'; 
    const lastUpdate=(idioma === 'es')? 'Actualizado:' : 'Last Update:';

    return (
        <div className="flex flex-col text-xs">
            <div className="flex items-center">
            <Image
                className="color"
                src={wind}
                alt="Logo de Tenerife Kite Foil"
                width={35}
                height={'auto'}
                priority

                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="ml-2">{titulo}</div>
                        <div className='pl-2'>{viento}</div>
                    </div>
                    <div className="flex text-xs">
                        <div className="ml-2">{lastUpdate}</div>
                        <div className="pl-1">{update}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
