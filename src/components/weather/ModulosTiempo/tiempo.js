import Image from 'next/image';
import ddespejado from '/public/icons/dia/soleado.png'
import ndespejado from '/public/icons/noche/moon-night.png'
import dnublado from '/public/icons/dia/nublado.png'
import nnublado from '/public/icons/noche/moon-night-cloud.png'
import dpnublado from '/public/icons/dia/nublado.png'
import npnublado from '/public/icons/noche/moon-night-cloud.png'
import dlluvia from '/public/icons/dia/sol-lluvia.png'
import nlluvia from '/public/icons/noche/night-rain.png'


export const Tiempo = ({ tiempo }) => {
    const fecha = new Date();
    const hora = fecha.getHours();


    let icon = '';
    switch (tiempo) {
        case 'Despejado':
        case 'Clear':    
            icon = hora > 7 && hora < 20 ? ddespejado : ndespejado;
            break;
        case 'Nubes Dispersas':
        case 'Scattered Clouds':    
        case 'Parcialmente Nublado':
        case 'Partly Cloudy':    
            icon = hora > 7 && hora < 20 ? dpnublado : npnublado ;
            break;
        case 'Mayormente Nublado':
        case 'Mostly Cloudy':    
        case 'Nublado':
        case 'Cloudy':    
            icon = hora > 7 && hora < 20 ? dnublado : nnublado;
            break;
        case 'Lluvia Dispersa':
        case 'Light Rain':    
        case 'Lluvia':
        case 'Rain':    
            icon = hora > 7 && hora < 20 ? dlluvia :nlluvia ;
            break;
        default:
            break;
    }

    return (
        <div className="flex text-base">
            <div className="flex flex-col items-center">
                <Image
                    className="w-9 h-9 rounded-full mr-2"
                    src={icon}
                    alt="Icono del tiempo"
                    width={36}
                    height={36}
                    loading="lazy"

                />
                <div className="flex flex-col">
                    <div className="font-semibold">{tiempo}</div>
                </div>
            </div>
        </div>
    );
};
