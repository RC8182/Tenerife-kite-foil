import Image from 'next/image';
import temperatura from "/public/icons/if-weather-temp-removebg-preview.png"
export const Temperature = ({ temp_amb, temp_agua }) => {


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
                        <div className="mr-2">Temperatura ambiente:</div>
                        <div>{temp_amb}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">Temperatura del agua:</div>
                        <div>{temp_agua}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
