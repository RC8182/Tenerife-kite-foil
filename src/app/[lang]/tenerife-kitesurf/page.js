import { Slaider } from '@/components/carrucel/slaider';
import { dbSlider } from './db.slider';
import { dbKitesurf } from './db.kitesurf';
import { BlackImage } from '@/components/black-image';

export const metadata = {
  en: {
    title: 'Kitesurf Equipment - Kites, Boards, Surfboards, Kite Bars, and Accessories in Tenerife',
    description: 'Explore our premium collection of kites, boards, surfboards, kite bars, and accessories. Find everything you need to enhance your kitesurfing experience in Tenerife. Browse our purchasing options, from high-performance kites to specialized accessories.',
    keywords: 'Kitesurf Kites, Kitesurf Boards, Surfboards, Kite Bars, Kitesurf Accessories, Kitesurf Equipment in Tenerife, Purchase Kitesurf Equipment, Kitesurf Gear Tenerife',
  },
  es: {
    title: 'Equipamiento de Kitesurf - Cometas, Tablas, Tablas de Surf, Barras de Kitesurf y Accesorios en Tenerife',
    description: 'Explora nuestra colección de alta calidad de cometas, tablas, tablas de surf, barras de kitesurf y accesorios. Encuentra todo lo que necesitas para mejorar tu experiencia de kitesurf en Tenerife. Descubre nuestras opciones de compra, desde cometas de alto rendimiento hasta accesorios especializados.',
    keywords: 'Cometas de Kitesurf, Tablas de Kitesurf, Tablas de Surf, Barras de Kitesurf, Accesorios de Kitesurf, Equipamiento de Kitesurf en Tenerife, Compra de Equipamiento de Kitesurf, Kitesurf Gear Tenerife',
  },
};



export default function Kitesurf({params}) {
  const idioma= params.lang;
  const currentMetadata = metadata[idioma];
  const data= (idioma==='es')? dbKitesurf.es : dbKitesurf.en;
  return (
    <div>
      <title>{currentMetadata?.title}</title>
      <meta name="description" content={currentMetadata?.description} />
      <meta name="keywords" content={currentMetadata?.keywords} />
      <div className="flex flex-col bg-black flex justify-center">
        <section className="text-center">
          <Slaider idioma={idioma} db={dbSlider} mwith={''} />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {data && data.map((e,i)=>{
            return <div key={i} className="w-auto h-auto">
                      <BlackImage titulo={e.titulo} src={e.src} alt={e.alt} link={e.link}/>
                    </div> 
          })}
        </section>

      </div>
    </div>
  );
}
