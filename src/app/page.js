import Navbar from '@/components/navbar/navbar';
import kite from '../../public/fotos/portada/kite.jpg';
import wing from '../../public/fotos/portada/wing.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar webcam={true}/>
      <div className="h-screen flex sm:flex-col md:flex-row">
        <Link href={'https://www.azulkiteboarding.com/es/categoria-producto/kitesurf-market/cometas-kitesurf-market/todas-las-cometas/'} target="_blank" passHref className="w-full md:w-1/2 bg-cover bg-center hover:filter hover:grayscale transition-all duration-500 flex items-center justify-center" style={{backgroundImage: `url(${kite.src})`}}>
        <h1 className="text-white text-center text-7xl hover:text-8xl transition-all duration-500">Kite</h1>
        </Link>
        <Link href={'https://www.azulkiteboarding.com/es/categoria-producto/kitesurf-market/tablas-wing-foil/todos-los-wingfoil/'} target="_blank" passHref className="w-full md:w-1/2 bg-cover bg-center hover:filter hover:grayscale transition-all duration-500 flex items-center justify-center" style={{backgroundImage: `url(${wing.src})`}}>
         <h1 className="text-white text-center text-7xl hover:text-8xl transition-all duration-500">Wing Foil</h1>
        </Link>
      </div>
    </div>
  );
}
