import Link from 'next/link';
import ContenedorWebcam from '../webcam/contenedorWebcam';
import tenerife from '../../../public/logo/logo-blanco.png'
import Image from 'next/image';

export default function Navbar({webcam, idioma}) {

  return (
    <div className="bg-blue-500 p-6 flex flex-col md:flex-row items-center justify-between text-white">
      <Link href="/" className="font-semibold text-xl tracking-tight mb-4 md:mb-0">
      <Image
          className="color"
          src={tenerife}
          alt="Logo de azul kiteboarding"
          width={250}
          height={'auto'}
          priority

        />
      </Link>
      {
        (webcam === true)?
        <Link href="/webcam" className="text-white hover:text-orange mt-4 md:mt-0">
        <ContenedorWebcam idioma={idioma}/>
        </Link>
        : <div></div>
      }

    </div>
  );
}
