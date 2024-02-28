import Link from 'next/link';

export const Idiomas = ({ idioma }) => {
  return (
    <div className="p-2 w-30 h-10 text-md text-blue-700 bg-gray-100 border border-blue-500 rounded-lg">
      {(idioma === 'en') ?
        <Link href="/es">Español?</Link> :
        <Link href="/en">English?</Link>}
    </div>
  );
};
