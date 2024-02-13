import Link from 'next/link';
import Webcam from '../webcam/webcam';

export default function Navbar({webcam}) {
  return (
    <div className="bg-blue-500 p-6 flex flex-col md:flex-row items-center justify-between text-white">
      <Link href="/" className="font-semibold text-xl tracking-tight mb-4 md:mb-0">
        Tenerife Kite Foil
      </Link>
      {
        (webcam === true)?
        <Link href="/webcam" className="text-white hover:text-orange mt-4 md:mt-0">
        <Webcam width={'100px'} height={'60px'} />
        </Link>
        : <div></div>
      }

    </div>
  );
}
