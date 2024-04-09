import Image from 'next/image';
import sunrise from "/public/icons/if-weather-sunrise-removebg-preview.png"
export const Sunrise = ({ amanecer, idioma }) => {
    const title= (idioma === 'es')? 'Amanecer': 'Sunrise';
    return (
        <div className="flex flex-col text-xs">
            <div className="flex items-center">
                <Image
                    className="w-9 h-9 rounded-full mr-2"
                    src={sunrise}
                    alt="Icono-Sunrise"
                    width={36}
                    height={36}
                    loading="lazy"
                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="mr-2">{title}:</div>
                        <div>{amanecer} AM</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
