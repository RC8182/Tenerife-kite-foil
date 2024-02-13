import Navbar from '@/components/navbar/navbar';
import kite from '../../public/fotos/portada/kite.jpg'
import wing from '../../public/fotos/portada/wing.jpg'

export default function Home() {
  return (
    <div>
      <Navbar webcam={true}/>
      <div className="h-screen flex sm:flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-cover bg-center hover:filter hover:grayscale transition-all duration-500" style={{backgroundImage: `url(${kite.src})`}}></div>
        <div className="w-full md:w-1/2 bg-cover bg-center hover:filter hover:grayscale transition-all duration-500" style={{backgroundImage: `url(${wing.src})`}}></div>
      </div>
    </div>

  );
}