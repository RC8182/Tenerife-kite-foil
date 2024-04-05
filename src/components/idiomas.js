'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const Idiomas = ({ idioma }) => {
  const params= useParams();
  const ruta = params.dynamicSportPage ? `/${params.dynamicSportPage}` : '';
  return (
    <div className="p-2 w-30 h-8 text-sm text-white bg-blue-600 rounded-lg flex items-center justify-center">
      {(idioma === 'en') ?
        <Link href={`/es/${ruta}`}>Español?</Link> :
        <Link href={`/en/${ruta}`}>English?</Link> 
      }
    </div>
  );
};




