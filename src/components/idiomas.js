import Link from 'next/link';

export const Idiomas = ({ idioma }) => {
  return (
    <div className="p-2 w-30 h-8 text-sm text-white bg-blue-600 rounded-lg flex items-center justify-center">
      {(idioma === 'en') ?
        <Link href="/es">Español?</Link> :
        <Link href="/en">English?</Link>}
    </div>
  );
};
