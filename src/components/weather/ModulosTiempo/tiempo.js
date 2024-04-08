import Image from 'next/image';
import ddespejado from '/public/icons/dia/soleado.png'
import ndespejado from '/public/icons/noche/moon-night.png'
import dnublado from '/public/icons/dia/nublado.png'
import nnublado from '/public/icons/noche/moon-night-cloud.png'
import dpnublado from '/public/icons/dia/nublado.png'
import npnublado from '/public/icons/noche/moon-night-cloud.png'
import dlluvia from '/public/icons/dia/sol-lluvia.png'
import nlluvia from '/public/icons/noche/night-rain.png'
import dcalima from  '/public/icons/dia/calima.png' 
import ncalima from '/public/icons/noche/moon-night.png'

export const Tiempo = ({ tiempo }) => {
    const fecha = new Date();
    const hora = fecha.getHours();

    let icon = '';
    switch (tiempo) {
        case 'Despejado':
            icon = hora > 7 && hora < 20 ? ddespejado : ndespejado;
            break;
        case 'Nubes Dispersas':
        case 'Parcialmente Nublado':
            icon = hora > 7 && hora < 20 ? dpnublado : npnublado ;
            break;
        case 'Mayormente Nublado':
        case 'Nublado':
            icon = hora > 7 && hora < 20 ? dnublado : nnublado;
            break;
        case 'Lluvia Dispersa':
        case 'Lluvia':
            icon = hora > 7 && hora < 20 ? dlluvia :nlluvia ;
            break;
        case 'Calima':
            icon = hora > 7 && hora < 20 ? dcalima : ncalima;
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-col text-base">
            <div className="flex items-center">
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
