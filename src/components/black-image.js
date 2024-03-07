'use client'
// black-image.jsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const BlackImage = ({ titulo, src, alt, link }) => {
  const [isTouched, setIsTouched] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  return (
    <div>
      <section className="h-full w-full">
        <div className={` relative filter grayscale ${isTouched ? 'hover:filter-none' : ''} transition-all duration-500`}>
          <Link href={link} passHref>
            <div onClick={handleClick} className="flex relative items-center justify-center">              
                <Image
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className='w-full h-full relative object-cover '
                />
              <div className={`text-5xl text-white md:text-7xl ${isTouched ? 'hover:text-8xl' : ''} transition-all duration-500 absolute`}>
                <h1>{titulo}</h1>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

