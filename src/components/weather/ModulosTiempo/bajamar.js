import Image from 'next/image';
import icon from '/public/icons/water_climate_forecast_weather-bajamar-removebg-preview.png'

export const Bajamar = ({idioma, baja1, baja2}) => {
  const text1= (idioma === 'es')? 'Bajamar 1:' : 'Low Tide 1:';
  const text2= (idioma === 'es')? 'Bajamar 2:' : 'Low Tide 2:';


    return (
        <div className="flex flex-col text-xs">
            <div className="flex items-center my-2">
                <Image
                    className="icono-bajamar w-9 h-9 rounded-full mr-2"
                    src={icon}
                    alt="Icono-Bajamar"
                    width={36}
                    height={36}
                    loading="lazy"
                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="mr-2">{text1}</div>
                        <div>{baja1}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{text2}</div>
                        <div>{baja2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
