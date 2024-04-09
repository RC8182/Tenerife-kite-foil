import { BlackImage } from '@/components/black-image';
import { Slaider } from '@/components/carrucel/slaider';
import { fetchStrapi } from '@/utils/functions';
import React from 'react'

export default async function Page ({params}) {
    const currentUrl = `https://tenerife-kite-foil.com/${params.lang}/${params.dynamicSportPage}`;
    const idioma= params.lang;
    const page= params.dynamicSportPage;
    const apiPage= await fetchStrapi('paginas', idioma, 'slider','black');
    const objSelectedPage = apiPage.data.find(item => item.attributes.slug === page);
    const sliderObj=objSelectedPage?.attributes.slider[0];
    const blackObj=objSelectedPage?.attributes;
    const listaBlackImage= blackObj?.black;
    const meta_title= objSelectedPage?.attributes.metadata_title;
    const meta_description= objSelectedPage?.attributes.metadata_title;
    const meta_keywords= objSelectedPage?.attributes.metadata_title;

    return (
        <div>
          <title>{meta_title}</title>
          <link rel="canonical" href={currentUrl} />
          <meta name="description" content={meta_description} />
          <meta name="keywords" content={meta_keywords} />
          <div className="flex flex-col bg-black justify-center">
            <section className="text-center">
              <Slaider idioma={idioma} sliderObj={sliderObj} mwith={''} />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {listaBlackImage && listaBlackImage.map((e,i)=>{
                return <div key={i} className="w-auto h-auto">
                          <BlackImage titulo={e.title} src={e.image.data.attributes.url} alt={e.alt} link={e.url}/>
                        </div> 
              })}
            </section>
    
          </div>
        </div>
      );
    }
