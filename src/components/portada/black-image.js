import React from 'react'
import kite from '/public/fotos/portada/kite.jpg';
import wing from '/public/fotos/portada/wing.jpg';
import Link from 'next/link';
import Image from 'next/image';

export const BlackImage = () => {
  return (
<div>
  <section className="flex flex-col md:flex-row">
    <div className='w-full h-1/2 relative md:w-1/2 relative'>
      <Link href={''} target="_blank" passHref>
      <div className=" filter grayscale hover:filter-none hover:text-8xl transition-all duration-500 flex items-center justify-center">
        <div className="relative w-screen h-screen ">
          <Image
            src={kite}
            alt="Kitesurf en Tenerife"
            loading="lazy"
            style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
          />
          </div>
          <div className="text-white text-7xl hover:text-8xl transition-all duration-500 absolute">
            <h1>KiteSurf</h1>
          </div>
          </div>
        </Link>
    </div>
    <div className='w-full h-1/2 relative md:w-1/2 relative'>
      <Link href={''} target="_blank" passHref>
      <div className=" filter grayscale hover:filter-none transition-all duration-500 flex items-center justify-center">
        <div className="relative w-screen h-screen">
          <Image
            src={wing}
            alt="WingFoil en Tenerife"
            loading="lazy"
            style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
          />
          </div>
            <h1 className="text-white text-7xl hover:text-8xl transition-all duration-500 absolute">KiteSurf</h1>
          </div>
        </Link>
    </div>
  </section>
</div>
  )
}

