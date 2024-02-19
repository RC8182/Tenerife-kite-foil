import Link from 'next/link';
import azul from '../../../public/logo/azul-no-fondo.png'
import tenerife from '../../../public/logo/logo-blanco.png'
import face from '../../../public/logo/logo-face.png'
import Image from 'next/image';
import { datos } from './db';

export default function Footer ({idioma}) {
    const datosFooter= (idioma==='es')? datos.es : datos.en
    return (
        <div className="bg-blue-500 text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
                    {/* Logo */}
                    <Link href="/" className="font-semibold text-xl tracking-tight mb-4 md:mb-0">
                        <Image
                            className="color"
                            src={tenerife}
                            alt="Logo de Tenerife Kite Foil"
                            width={250}
                            height={'auto'}
                            priority

                            />
                    </Link>

                {/* Partner */}
                <div className="mb-4">
                    <p>{datosFooter.footer.azul.titulo}</p>
                        <Link href="https://www.azulkiteboarding.com" className="font-semibold text-xl tracking-tight mb-4 md:mb-0">
                            <Image
                                className="color"
                                src={azul}
                                alt="Logo de azul kiteboarding"
                                width={150}
                                height={'auto'}
                                priority

                                />
                        </Link>
                </div>
        
                {/* Facebook Group */}
                <div className="mb-4">
                    <p>{datosFooter.footer.face.titulo}</p>
                    <Link href={datosFooter.footer.face.url} className="font-semibold text-xl tracking-tight mb-4 md:mb-0">
                        <Image
                            className="color"
                            src={face}
                            alt={datosFooter.footer.face.alt}
                            width={150}
                            height={'auto'}
                            priority

                            />
                    </Link>
                </div>

                <p className='p-2'>{datosFooter.footer.rights}</p>
            </div>
        </div>
      );
}
