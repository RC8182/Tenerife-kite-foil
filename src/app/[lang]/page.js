import Navbar from '@/components/navbar/navbar';
import { Offers } from '@/components/ofertas/offers';
import { ContenedorPortada } from '@/components/portada/portada';
import AboutUs from '@/components/sobre-nosotros/aboutUs';
import { ContenedorTabs } from '@/components/tabsProductos/contenedorTabs';
import { fetchStrapi } from '@/utils/functions';




export default async function Home({params}) {
  const idioma= params.lang;

  const data= await fetchStrapi('paginas', idioma, 'black');

  const imageList= data.data[0]?.attributes.black;
  const metadata_title= data.data[0]?.attributes.metadata_title;
  const metadata_description= data.data[0]?.attributes.metadata_description;
  const metadata_keywords= data.data[0]?.attributes.meta_keywords;


  const currentUrl = `https://tenerife-kite-foil.com/${params.lang}`;

  


  return (
    <div>
      <title>{metadata_title}</title>
      <link rel="canonical" href={currentUrl} />
      <meta name="description" content={metadata_description} />
      <meta name="keywords" content={metadata_keywords} />
      <Navbar idioma={idioma} />
      <ContenedorPortada imageList={imageList}/>
            {/* <ContenedorTabs/> */}
      <Offers idioma={idioma}/>
      <AboutUs idioma={idioma}/>
    </div>
  );
}
