import Image from 'next/image'
import Link from 'next/link'

export default function TipoProducto({title,src,link}) {
  return (
    <Link href={link} target="_blank">
    <div className="relative group bg-gray-200  hover:text-blue-700 transition-colors duration-200 ease-in-out p-4 rounded-md w-[300px]">
      <h2 className="p-2 absolute left-0 top-1/2 transform -translate-y-1/2">{title}</h2>
      <div className="relative h-62 w-32 mx-auto -mt-12 group-hover:mt-0 transition-all duration-200 ease-in-out">
        <Image src={src} width={150} height={130}  />
      </div>
    </div>
    </Link>
  )
}
