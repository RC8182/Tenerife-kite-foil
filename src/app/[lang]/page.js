import { Offers } from '@/components/ofertas/offers';
import { ContenedorPortada } from '@/components/portada/portada';
import ScrollingBanner from '@/components/scrollingBanner/scrollingBanner';
import SeccionKiteshop from '@/components/kiteshop/kiteshop';





export default async function Home({params}) {
  const bannerTexts = [
    'Eleveight RSV8 kite 1.279€',
    'Eleveight WSV7 kite 1.279€',
    'ELEVEIGHT RS+V2 10m 1.510€',
  ];
  const idioma= params.lang;
  const metadata_title= (idioma === 'es')
  ? 'Tenerife Kite Foil - Tu destino para Kitesurf y Wing Foil' 
  :'Tenerife Kite Foil - Your Destination for Kitesurfing and Wing Foiling' ;
  const metadata_description=(idioma === 'es')
  ? 'Explora cursos de kitesurf y wing foil en Tenerife. Encuentra equipos de kitesurf y wing foil de alta calidad, incluyendo cometas, tablas, accesorios y más. Descubre nuestro outlet con artículos con descuento, equipo usado y opciones de alquiler' 
  :'Explore kitesurfing and wing foiling courses in Tenerife. Find top-quality kitesurfing and wing foil equipment, including kites, boards, accessories, and more. Discover our outlet for discounted items, used gear, and rental options.' ;
  const metadata_keywords= (idioma === 'es')
  ? 'Kitesurf en Tenerife, Cursos de Kitesurf en Tenerife, Wing Foil en Tenerife, Cursos de Wing Foil en Tenerife, Material de Kitesurf y Wing Foil en Tenerife, Cometas, Tablas, Accesorios en Tenerife, Outlet en Tenerife, Material Usado en Tenerife, Alquiler de Material en Tenerife' 
  :'Kitesurfing Tenerife, Kitesurf Courses Tenerife, Wing Foil Tenerife, Wing Foil Courses Tenerife, Kitesurf and Wing Foil Gear Tenerife, Kites, Boards, Accessories Tenerife, Outlet Tenerife, Used Gear Tenerife, Rental Equipment Tenerife' ;

  const currentUrl = `https://tenerife-kite-foil.com/${params.lang}`;
  return (
    <div>
      <title>{metadata_title}</title>
      <link rel="canonical" href={currentUrl} />
      <meta name="description" content={metadata_description} />
      <meta name="keywords" content={metadata_keywords} />
      <ContenedorPortada idioma={idioma}/>
      <ScrollingBanner title={'New Season  '} texts={bannerTexts} />
      <Offers idioma={idioma}/>
      <SeccionKiteshop idioma={idioma}/>
    </div>
  );
}
