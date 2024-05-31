// black-image.jsx
import Link from 'next/link';
import Image from 'next/image';
import { TextHover } from './text-hover';

export const BlackImage = async({ titulo, src, alt, link }) => {

  return (
    <div>
      <section className="h-full w-full">
        <div className={`relative filter grayscale hover:filter-none transition-all duration-500`}>
          <Link href={link} passHref target='blank'>
            <div onClick={handleClick(link)} className="flex relative items-center justify-center">              
              <Image
                src={src.src}
                alt={alt}
                width={1000}
                height={1000}
                loading="lazy"
                className='w-full h-full relative object-cover '
              />
              <div className={"absolute inset-0 flex items-center justify-center text-white"}>
                <TextHover title={titulo}/>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
  
};

function handleClick(e) {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    e.preventDefault();
    const url = e.currentTarget.parentNode.href;
    setTimeout(() => {
      window.open(url, '_blank');
    }, 2000);
  }
}