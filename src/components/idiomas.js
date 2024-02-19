import Link from 'next/link';

export const Idiomas = ({idioma}) => {


  return (
<div className="text-white">
    {(idioma === 'en') ?
    <Link href="/es" className="text-white">Español?</Link> :
    <Link href="/en" className="text-white">English?</Link>}
</div>

  )
}