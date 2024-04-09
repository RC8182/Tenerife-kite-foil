import Image from 'next/image';
import iUv from '/public/icons/if-weather-uv1-removebg-preview.png';

export const Uv = ({ uv, idioma }) => {
    const title = idioma === 'es' ? 'Indice UV' : 'UV Index';
    
    return (
        <div className="flex flex-col text-xs items-center">
            <div className="flex m-1 items-center">
                <div className="flex items-center">
                    <Image 
                        className='icono-uv'    
                        width={36}
                        height={36}
                        src={iUv}
                        alt='Icono-UV'
                    />
                    <div className="m-1">
                        {title}: {uv}
                    </div>
                </div>
            </div>
        </div>
    );
};
