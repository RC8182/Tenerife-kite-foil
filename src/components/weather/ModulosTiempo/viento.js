import Image from 'next/image'
import wind from '/public/icons/weather-wind.png'
export const Viento = ({ viento, titulo, update }) => {


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
                        <div className="mr-2">{titulo}:</div>
                        <div>{viento}</div>
                    </div>
                    <div className="text-xs">
                        <div className="mt-1">{update}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
