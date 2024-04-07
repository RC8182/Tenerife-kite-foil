'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export const Idiomas = ({ idioma }) => {
  const pathname = usePathname()
  const dividir= pathname.split('/')
  const ruta = dividir[2] ? `/${dividir[2]}` : '';

  return (
    <div className="p-2 w-30 h-8 text-sm text-white bg-blue-600 rounded-lg flex items-center justify-center">
      {(idioma === 'en') ?
        <Link href={`/es/${ruta}`}>Español?</Link> :
        <Link href={`/en/${ruta}`}>English?</Link> 
      }
    </div>
  );
};




