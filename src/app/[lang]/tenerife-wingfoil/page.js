import { Slaider } from '@/components/carrucel/slaider';
import { dbSlider } from './db.slider';
import { dbwingfoil } from './db.wingfoil';
import { BlackImage } from '@/components/black-image';

export const metadata = {
  en: {
    title: 'Wingfoil Gear - Wings, Foils, Foil Boards, and Accessories in Tenerife',
    description: 'Discover our premium collection of wings, foils, foil boards, and accessories for an unparalleled wingfoiling experience in Tenerife. Explore high-quality equipment designed to elevate your wingfoil sessions. Browse our range, from cutting-edge wings to specialized foils and accessories.',
    keywords: 'Wingfoil Wings, Foils, Foil Boards, Wingfoil Accessories, Wingfoil Gear in Tenerife, Purchase Wingfoil Equipment, Wingfoiling Tenerife',
  },
  es: {
    title: 'Equipamiento de Wingfoil - Alas, Foils, Tablas de Foil y Accesorios en Tenerife',
    description: 'Explora nuestra colección premium de alas, foils, tablas de foil y accesorios para vivir una experiencia única de wingfoil en Tenerife. Descubre equipos de alta calidad diseñados para elevar tus sesiones de wingfoil. Navega por nuestra variedad, desde alas de vanguardia hasta foils y accesorios especializados.',
    keywords: 'Alas de Wingfoil, Foils, Tablas de Foil, Accesorios de Wingfoil, Equipamiento de Wingfoil en Tenerife, Compra de Equipamiento de Wingfoil, Wingfoiling Tenerife',
  },
};




export default function Wingfoil({params}) {
  const currentUrl = `https://tenerife-kite-foil.com/${params.lang}/${params.slug}`;
  const idioma= params.lang;
  const currentMetadata = metadata[idioma];
  const data= (idioma==='es')? dbwingfoil.es : dbwingfoil.en;
  const imageObj= dbSlider.es.slaider.images
  return (
    <div>
      <title>{currentMetadata?.title}</title>
      <link rel="canonical" href={currentUrl} />
      <meta name="description" content={currentMetadata?.description} />
      <meta name="keywords" content={currentMetadata?.keywords} />
      <div className="flex flex-col bg-black flex justify-center">
        <section className="text-center">
          <Slaider idioma={idioma} db={dbSlider} imageObj={imageObj} mwith={''} />
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
