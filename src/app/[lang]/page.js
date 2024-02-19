import Navbar from '@/components/navbar/navbar';
import kite from '/public/fotos/portada/kite.jpg';
import wing from '/public/fotos/portada/wing.jpg';
import Link from 'next/link';
import { Slaider } from '@/components/carrucel/slaider';

const data = {
  "es": {
    "kiteUrl":"https://www.azulkiteboarding.com/es/categoria-producto/kitesurf-market/cometas-kitesurf-market/todas-las-cometas/",
    "wingUrl":"https://www.azulkiteboarding.com/es/categoria-producto/kitesurf-market/tablas-wing-foil/todos-los-wingfoil/",
    "welcome": {
      "titulo": "Bienvenidos a Tenerife Kite Foil!",
      "p1": "Si estás buscando hacer cursos de kitesurf o cursos de wing foil, nuestros experimentados instructores están aquí para ayudarte a dominar el viento y las olas. También somos una de las primeras empresas dedicadas a la venta de material de kitesurf y wing foil en España desde nuestra tienda situada en El Médano (Tenerife), incluyendo cometas, tablas, hidrofoils, alas de wing foiling y accesorios.",
      "p2": 'Si buscas una oferta, no te pierdas nuestro outlet donde encontrarás material de temporadas anteriores en liquidación, y nuestra oferta de material usado y de prueba. Si no tienes tu propio equipo, también ofrecemos alquiler de material de kitesurf y wing foil.',
      "p3": "Todo esto en El Médano – Tenerife, en primera línea de mar. ¡Esperamos verte pronto en AZULKITEBOARDING, tu lugar para el kitesurf y el wing foil en Tenerife!"
    }
  },
  "en": {
    "kiteUrl":"https://www.azulkiteboarding.com/en/categoria-producto/kitesurf-market-en/kites-kitesurf-market/all-kites/",
    "wingUrl":"https://www.azulkiteboarding.com/en/categoria-producto/kitesurf-market-en/wingfoil-en/all-wingfoil/",
    "welcome": {
      "title": "Welcome to Tenerife Kite Foil!",
      "p1": "If you're looking to take kitesurfing or wing foil courses, our experienced instructors are here to help you master the wind and waves. We are also one of the first companies dedicated to the sale of kitesurfing and wing foil equipment in Spain from our store located in El Médano (Tenerife), including kites, boards, hydrofoils, wing foiling wings, and accessories.",
      "p2": "If you're looking for a deal, don't miss our outlet where you'll find discounted items from previous seasons, and our offer of used and test equipment. If you don't have your own gear, we also offer kitesurfing and wing foil equipment rentals.",
      "p3": "All of this in El Médano - Tenerife, right on the waterfront. We hope to see you soon at AZULKITEBOARDING, your place for kitesurfing and wing foil in Tenerife!"
    }
  }
};



export default function Home({params}) {
  const idioma= params.lang;
  const lang=(idioma==='es')? data.es : data.en;

  return (
    <div>
      <Navbar webcam={true} idioma={idioma}/>
      <section className="h-screen flex md:flex-row">
        <Link href={lang.kiteUrl} target="_blank" passHref className="w-full md:w-1/2 bg-cover bg-center hover:filter hover:grayscale transition-all duration-500 flex items-center justify-center" style={{backgroundImage: `url(${kite.src})`}}>
        <h1 className="text-white text-center text-7xl hover:text-8xl transition-all duration-500">Kite</h1>
        </Link>
        <Link href={lang.wingUrl} target="_blank" passHref className="w-full md:w-1/2 bg-cover bg-center hover:filter hover:grayscale transition-all duration-500 flex items-center justify-center" style={{backgroundImage: `url(${wing.src})`}}>
         <h1 className="text-white text-center text-7xl hover:text-8xl transition-all duration-500">Wing Foil</h1>
        </Link>
      </section>
      <section className="bg-blue-500  p-8 text-white">
        <h1 className="text-4xl mb-4">{lang.welcome.titulo}</h1>
        <p className="mb-4">{lang.welcome.p1}</p>

        <p className="mb-4">{lang.welcome.p2}</p>

        <p>{lang.welcome.p3}</p>
      </section>
      <section className='flex justify-center'>
        <Slaider idioma={idioma}/>
      </section>

    </div>
  );
}
