import React from 'react'
import OfferCard from './offerCard'
import { fetchStrapi } from '@/utils/functions';

export const Offers = async({idioma}) => {
    const offersApi=await fetchStrapi('ofertas', idioma, 'oferta','');
    const offersList= offersApi.data[0]?.attributes.oferta;
    const title= (idioma==='es')? 'Nuestras Ofertas':'Our Offers';
  return (
    <div id='contenedor-ofertas' className='p-8'>
        <div className="flex flex-col p-4 items-center justify-center text-center bg-blue-500">
            <h1 className="text-4xl text-white bold">
                {title}
            </h1>
        </div>
        <div className='flex gap-4 flex-wrap'>
            {
                offersList && offersList.map((e,i)=>{
                    return <div key={i}> 
                        <OfferCard 
                        img={`${process.env.NEXT_PUBLIC_STRAPI_LOCAL_HOST}${e.image.data.attributes.url}`}
                        alt={e.alt}
                        title={e.title} 
                        idioma={idioma} 
                        discount={e.discount_percent} 
                        price={e.price}
                        link={e.url}/>
                    </div>
                })
            }
        </div>

    </div>
  )
}
