'use client'
import React, { useState, useEffect } from 'react';
import kite from '/public/fotos/portada/kite.jpg';
import wing from '/public/fotos/portada/wing.jpg';
import Link from 'next/link';
import Image from 'next/image';

export const BlackImage = ({idioma}) => {
  const [isTouched, setIsTouched] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const urlKite= (idioma==='es')?'https://www.azulkiteboarding.com/es/categoria-producto/kitesurf-market/cometas-kitesurf-market/todas-las-cometas/' 
  :'https://www.azulkiteboarding.com/en/categoria-producto/kitesurf-market-en/kites-kitesurf-market/all-kites/'
  const urlWing=(idioma==='es')?'https://www.azulkiteboarding.com/es/categoria-producto/kitesurf-market/tablas-wing-foil/todos-los-wingfoil/' 
  :'https://www.azulkiteboarding.com/en/categoria-producto/kitesurf-market-en/wingfoil-en/all-wingfoil/'

  const handleClick = (e) => {
    if (isSmallScreen) {
    e.preventDefault();
    setIsTouched(true);
    const url = e.currentTarget.parentNode.href;
    setTimeout(() => {
      window.open(url, '_blank');
    }, 2000);
  }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen">
        <div className={`w-full h-1/2 md:w-1/2 h-full relative filter grayscale ${isTouched ? 'hover:filter-none' : ''} transition-all duration-500`}>
          <Link href={urlKite} passHref>
            <div onClick={handleClick} className="flex items-center justify-center h-full">
              <div className="relative w-full h-full">
                <Image
                  src={kite}
                  alt="Kitesurf en Tenerife"
                  loading="lazy"
                  style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={`text-5xl text-white md:text-7xl ${isTouched ? 'hover:text-8xl' : ''} transition-all duration-500 absolute`}>
                <h1>KiteSurf</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className={`w-full h-1/2 md:w-1/2 h-full relative filter grayscale ${isTouched ? 'hover:filter-none' : ''} transition-all duration-500`}>
          <Link href={urlWing} passHref>
            <div onClick={handleClick} className="flex items-center justify-center h-full">
              <div className="relative w-full h-full">
                <Image
                  src={wing}
                  alt="WingFoil en Tenerife"
                  loading="lazy"
                  style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={`text-5xl text-white md:text-7xl ${isTouched ? 'hover:text-8xl' : ''} transition-all duration-500 absolute`}>
                <h1>WingFoil</h1>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
