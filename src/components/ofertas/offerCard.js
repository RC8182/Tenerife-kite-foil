import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function OfferCard({idioma, title, discount, price, img, alt, link, estado }){

    const title1= (idioma==='es')?'Hasta':'Up To';
    const title2= (idioma==='es')?' de descuento sobre el precio recomendado':'discount from recommended price.';
    const delivery= (idioma==='es')?'Transporte Incluido!':'Delivery Included!';

    return (
        <div className="max-w-80 min-w-32  mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5 hover:shadow-2xl">
          <Link href={link} target='blank' >
            <div id='title' className="p-4 flex justify-center  bg-orange-500">
                <div className="uppercase tracking-wide text-xl text-white font-semibold">{title}</div>
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

                    <div className='flex border-4 border-blue-500 rounded-xl'>
                        <div className="m-2 flex flex-col text-orange-500"> 
                            <div className='text-blue-700'>{title1}</div>
                        <div className='text-6xl font-bold'>{`${discount}%`}</div>
                            <div className='text-xs text-blue-700'>{title2}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='price' className="p-4 flex space-x-4">
                <div className="text-2xl text-orange-500 font-bold flex justify-end">{delivery}</div>
                <div className="flex flex-col">
                    <div className='flex'>
                        <div className="text-2xl font-bold flex justify-end">{price}</div>
                        <div className="text-lg flex justify-end">€*</div>
                    </div>
                    <div>
                        <div className="text-sm text-blue-500 font-bold flex justify-end"><span className='text-orange-500'>*</span>{estado}</div>
                    </div>

                </div>
            </div>



            </Link>
        </div>
        )
        
}
