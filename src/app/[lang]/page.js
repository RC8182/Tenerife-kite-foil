import Navbar from '@/components/navbar/navbar';
import { ContenedorPortada } from '@/components/portada/portada';;
import AboutUs from '@/components/sobre-nosotros/aboutUs';
import { ContenedorTabs } from '@/components/tabsProductos/contenedorTabs';



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
  const currentUrl = `https://tenerife-kite-foil.com/${params.lang}`;

  return (
    <div>
      <title>{currentMetadata?.title}</title>
      <link rel="canonical" href={currentUrl} />
      <meta name="description" content={currentMetadata?.description} />
      <meta name="keywords" content={currentMetadata?.keywords} />
      <Navbar idioma={idioma} />
      <ContenedorPortada idioma={idioma}/>
      <AboutUs idioma={idioma}/>
      <ContenedorTabs/>
    </div>
  );
}
