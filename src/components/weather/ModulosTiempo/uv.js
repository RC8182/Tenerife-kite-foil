import Image from 'next/image'
import iUv from "/public/icons/if-weather-uv1-removebg-preview.png"
export const Uv = ({uv}) => {

    return (
        <div className="flex flex-col text-xs">
            <div className="flex m-1">
                <Image 
                    className='icono-uv'    
                    width={36}
                    height={36}
                    src={iUv}
                    alt='Icono-UV'
                    />
                <div className="flex flex-col items-center">
                    <div className="flex">
                        <div className="m-1">
                            Indice Ultravioleta: 
                        </div>
                        <div className="m-1">
                            {uv}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
