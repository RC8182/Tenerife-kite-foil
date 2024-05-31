import { BlackImage } from '@/components/black-image';
import { Slaider } from '@/components/carrucel/slaider';
import React from 'react'
import { datos } from './db';

export default async function Page ({params}) {
    const currentUrl = `https://tenerife-kite-foil.com/${params.lang}/${params.dynamicSportPage}`;
    const idioma= params.lang;
    const page= params.dynamicSportPage;
    const data= (idioma=== 'es')? datos.es : datos.en;
    const objSelectedPage = data.pages.find(item => item.slug === page);
    const sliderList=objSelectedPage?.images.corrucel;
    const listaBlackImage= objSelectedPage?.images.blackImage;


    return (
        <div>
          <title>{objSelectedPage.seo.title}</title>
          <link rel="canonical" href={currentUrl} />
          <meta name="description" content={objSelectedPage.seo.description} />
          <meta name="keywords" content={objSelectedPage.seo.keywords} />
          <div className="flex flex-col bg-black justify-center">
            <section className="text-center">
              {<Slaider idioma={idioma} sliderList={sliderList} mwith={''} />}
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {listaBlackImage && listaBlackImage.map((e,i)=>{
                return <div key={i} className="w-auto h-auto">
                          <BlackImage titulo={e.titulo} src={e.src} alt={e.alt} link={e.link}/>
                        </div> 
              })}
            </section>
    
          </div>
        </div>
      );
    }
