import Image from 'next/image';
import comp from "/public/icons/compass-celeste-removebg-preview.png"
export const Compass = ({ compass }) => {
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
                        <div className="mr-2">Dirección:</div>
                        <div>{compass}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
