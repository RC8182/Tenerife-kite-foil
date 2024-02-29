import Navbar from '@/components/navbar/navbar';
import { Slaider } from '@/components/carrucel/slaider';
import { todos_productos } from './db-todosProductos';
import { dbOfertas } from './db-ofertas';
import ContenedorProductos from '@/components/productos/contenedorProducto';
import { nueva_temporada } from './db-nueva-temporada';
import Imagen from '../../../public/fotos/portada/portada.jpg'
import Image from 'next/image';



export const metadata = {
  en: {
    title: 'Tenerife Kite Foil - Your Destination for Kitesurfing and Wing Foiling',
    description: 'Explore kitesurfing and wing foiling courses in Tenerife. Find top-quality kitesurfing and wing foil equipment, including kites, boards, accessories, and more. Discover our outlet for discounted items, used gear, and rental options.',
    keywords: 'Kitesurfing Tenerife, Kitesurf Courses Tenerife, Wing Foil Tenerife, Wing Foil Courses Tenerife, Kitesurf and Wing Foil Gear Tenerife, Kites, Boards, Accessories Tenerife, Outlet Tenerife, Used Gear Tenerife, Rental Equipment Tenerife',
  },
  es: {
    title: 'Tenerife Kite Foil - Tu destino para Kitesurf y Wing Foil',
    description: 'Explora cursos de kitesurf y wing foil en Tenerife. Encuentra equipos de kitesurf y wing foil de alta calidad, incluyendo cometas, tablas, accesorios y más. Descubre nuestro outlet con artículos con descuento, equipo usado y opciones de alquiler.',
    keywords: 'Kitesurf en Tenerife, Cursos de Kitesurf en Tenerife, Wing Foil en Tenerife, Cursos de Wing Foil en Tenerife, Material de Kitesurf y Wing Foil en Tenerife, Cometas, Tablas, Accesorios en Tenerife, Outlet en Tenerife, Material Usado en Tenerife, Alquiler de Material en Tenerife',
  },
};


export default function Home({params}) {
  const idioma= params.lang;
  const currentMetadata = metadata[idioma];

  return (
    <div>
      <title>{currentMetadata?.title}</title>
      <meta name="description" content={currentMetadata?.description} />
      <meta name="keywords" content={currentMetadata?.keywords} />
      <Navbar idioma={idioma} />

      <div className="relative w-screen h-screen">
      <Image
        src={Imagen}
        alt="Kitesurf en Tenerife"
        loading="lazy"
        style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <h1 className="p-6 text-4xl md:text-5xl lg:text-7xl text-white font-semibold absolute bottom-0 left-0 mb-4 mr-4">
        <span className="block mb-2 md:mb-4">KITESURF &</span>
        <span>WINGFOIL SHOP</span>
      </h1>
    </div>

      <section>
        <ContenedorProductos idioma={idioma} productos={nueva_temporada}/>
      </section>
      <section>
        <ContenedorProductos idioma={idioma} productos={todos_productos}/>
      </section>
      <section className='flex justify-center'>
      <Slaider idioma={idioma} db={dbOfertas} mwith={'xs'}/>

      </section>

    </div>
  );
}
