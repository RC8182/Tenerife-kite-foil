import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function OfferCard({idioma, title, discount, price, img, alt, link}){
    const title1= (idioma==='es')?'Hasta':'Up To';
    const title2= (idioma==='es')?' de descuento sobre el precio recomendado':'discount from recommended price.';

    return (
        <div className="max-w-80 min-w-32  mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5">
          <Link href={link} target='blank' >
            <div id='title' className="p-4 flex justify-center">
                <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{title}</div>
            </div>
            <div className=" p-2 flex ">
                <div className="flex justify-start">
                    <Image className="h-48 w-full object-cover md:w-48" 
                    src={img} 
                    alt={alt}
                    width={100}
                    height={100}/>
                </div>
                <div id='discount' className='max-w-40 max-h-40 flex justify-end'>

                    <div className='flex border-4 border-orange-500 rounded-xl'>
                        <div className="m-2 flex flex-col text-orange-500"> 
                            <div>{title1}</div>
                        <div className='text-6xl font-bold'>{`${discount}%`}</div>
                            <div className='text-xs'>{title2}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='price'  className="p-4">
                <div className="text-2xl font-bold flex justify-end">{price} €*</div>
            </div>
            </Link>
        </div>
        )
        
}
