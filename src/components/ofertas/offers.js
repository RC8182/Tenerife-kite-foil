import React from 'react'
import OfferCard from './offerCard'
import { fetchProducts } from '@/utils/azul-fetch';

export const Offers = async ({ idioma }) => {
    const offersApi = await fetchProducts();
    const offersList = offersApi;
    const title = (idioma === 'es') ? 'Nuestras Ofertas' : 'Sales';
    //console.log(offersList[0])
    // const x= await getProducts()
    // console.log(x)
    return (
      <div id='contenedor-ofertas' className='p-8 '>
        <div className="flex flex-col p-2 items-center justify-center text-center bg-black">
          <h1 className="text-2xl text-white bold">
            {title}
          </h1>
        </div>
        <hr className="divider border-t-4 border-orange-300" />
        <div className='flex gap-4 flex-wrap justify-center'>
          {
            offersList && offersList.map((e, i) => {
              const originalPrice = parseFloat(e.regular_price);
              const salePrice = parseFloat(e.sale_price);
  
              if (e.sku && originalPrice && salePrice && e.permalink && e.images && e.images[0].src) {
                let discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;
                discountPercentage = Math.round(discountPercentage);
  
                return (
                  <div key={i}>
                    <OfferCard
                      idioma={idioma}
                      img={e.images[0].src}
                      alt={e.images[0].name}
                      title={e.sku}
                      discount={discountPercentage}
                      price={e.price}
                      link={e.permalink}
                    />
                  </div>
                );
              }
              return null;
            })
          }
        </div>
      </div>
    );
  };
  

  export async function getProducts() {
    const category = 625;  // Reemplaza esto con el ID de la categoría deseada
    const limit = 8;
  
    const res = await fetch(`http://localhost:3000/api/products?category=${category}&limit=${limit}`);
    
    console.log(res);
  
    if (!res.ok) {
      return {
        notFound: true,
      };
    }
  
    const data = await res.json();
    return data;
  }