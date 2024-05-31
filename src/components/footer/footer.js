import Link from 'next/link';
import azul from '../../../public/logo/azul-no-fondo.png';
import face from '../../../public/logo/logo-face.png';
import Image from 'next/image';
import { datos } from './db';

export default function Footer({ idioma }) {
  const datosFooter = idioma === 'es' ? datos.es : datos.en;

  return (
    <div className="bg-black text-white flex flex-col">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center align-items-center p-4">
        {/* Partner */}
          <div className='flex flex-col '>
            <p>{datosFooter.footer.azul.titulo}</p>
          <div className='flex justify-center'>
          <Link href="https://www.azulkiteboarding.com">
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
        </div>

        {/* Facebook Group */}
        <div className='flex flex-col '>
          <p>{datosFooter.footer.face.titulo}</p>
          <div className='flex justify-center'>
          <Link href={datosFooter.footer.face.url}>
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
        </div>
      </div>
      <div className="mt-1 flex flex-col mb-12 text-center">
        <p className="p-2">{datosFooter.footer.rights}</p>
      </div>
    </div>
  );
}
