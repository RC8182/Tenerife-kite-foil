import Image from 'next/image'
import Link from 'next/link'
import imageUrl from'/public/fotos/medano.png'

export default function TipoProducto({title,src,link,alt}) {
  return (
    <Link href={link} target="_blank">
    <div className="relative group text-white hover:text-orange-600 transition-colors duration-200 ease-in-out p-4 rounded-md w-[300px] mh[150px]"
    style={{ backgroundImage: `url(${imageUrl.src})` }}>
      <h2 className="p-2 absolute left-0 top-1/2 transform -translate-y-1/2">{title}</h2>
      <div className="relative h-62 w-32 mx-auto -mt-12 group-hover:mt-0 transition-all duration-200 ease-in-out">
        <Image src={src} width={150} height={130} alt={alt}  />
      </div>
    </div>
    </Link>
  )
}
