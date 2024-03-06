import Navbar from '@/components/navbar/navbar';
import { Slaider } from '@/components/carrucel/slaider';
import { todos_productos } from './db-todosProductos';
import { dbOfertas } from './db-ofertas';
import ContenedorProductos from '@/components/productos/contenedorProducto';
import { nueva_temporada_kite } from './db-nueva-temporada-kite';
import { nueva_temporada_wing } from './db-nueva-temporada-wing';
import Imagen from '../../../public/fotos/portada/portada.jpg'
import Image from 'next/image';
import AboutUs from '@/components/sobre-nosotros/aboutUs';
import { BlackImage } from '@/components/portada/black-image-scroll';



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
      <BlackImage idioma={idioma}/>

      {/* <section>
        <h2 className="flex text-4xl text-blue-500 bold justify-center m-4">Nueva Temporada</h2>
        <ContenedorProductos idioma={idioma} productos={nueva_temporada_kite}/>
        <ContenedorProductos idioma={idioma} productos={nueva_temporada_wing}/>
      </section>
      <section>
        
      </section>
      <section>
      <h2 className="flex text-4xl text-blue-500 bold justify-center m-4">Todos los Productos</h2>
        <ContenedorProductos idioma={idioma} productos={todos_productos}/>
      </section>
      <section className='flex justify-center'>
      <Slaider idioma={idioma} db={dbOfertas} mwith={'xs'}/>
      </section>
      <section>
        <AboutUs idioma={idioma}/>
      </section> */}
    </div>
  );
}
