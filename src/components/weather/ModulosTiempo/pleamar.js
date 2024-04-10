import Image from 'next/image';
import icon from '/public/icons/forecast_weather-pleamar-removebg-preview.png'
export const Pleamar = ({idioma, alta1, alta2}) => {
  const text1= (idioma === 'es')? 'Pleamar 1:' : 'High Tide 1:';
  const text2= (idioma === 'es')? 'Pleamar 2:' : 'High Tide 2:';

    return (
        <div className="flex flex-col text-xs">
            <div className="flex items-center my-2">
                <Image
                    className="icono-pleamar w-9 h-9 rounded-full mr-2"
                    src={icon}
                    alt="Icono-Pleamar"
                    width={36}
                    height={36}
                    loading="lazy"
                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="mr-2">{text1}</div>
                        <div>{alta1}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{text2}</div>
                        <div>{alta2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
