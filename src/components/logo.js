import Link from 'next/link'
import tenerife from '/public/logo/logo-negro.png'
import Image from 'next/image'

export default function Logo(){
  return (
    <div>
        <Link href="/" className="font-semibold text-xl tracking-tight mb-4 md:mb-0">
            <Image
                className="color"
                src={tenerife}
                alt="Logo de Tenerife Kite Foil"
                width={250}
                height={'auto'}
                priority

                />
        </Link>
</div>
  )
}
