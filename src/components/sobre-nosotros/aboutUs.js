import React from 'react';

const aboutUs = {
    es: {
      title:'Sobre Nosotros',  
      text: `¡Bienvenido a Tenerife Kite Foil, tu destino definitivo para experimentar la emocionante fusión entre el viento y las olas! En asociación con AzulKiteboarding, contamos con una sólida trayectoria de 25 años como pioneros en este apasionante deporte en España.\n\nEn Tenerife Kite Foil, compartimos la misma pasión por el kitesurf y el wing foil que ha impulsado a AzulKiteboarding a ofrecer una amplia gama de servicios y productos de alta calidad. Si buscas cursos de kitesurf o wing foil, nuestros instructores experimentados están aquí para guiarte y ayudarte a dominar el arte de navegar con el viento y las olas.\n\nNos enorgullece ser una de las primeras empresas dedicadas a la venta de material de kitesurf y wing foil en España, con nuestra tienda ubicada en El Médano, Tenerife. Desde cometas y tablas hasta hidrofoils y alas de wing foiling, ofrecemos todo lo que necesitas para disfrutar al máximo de tu experiencia en el agua.\n\nExplora nuestro outlet, donde encontrarás ofertas irresistibles en material de temporadas anteriores en liquidación, así como opciones de material usado y de prueba. Si no cuentas con tu propio equipo, también te ofrecemos servicios de alquiler de material de kitesurf y wing foil para que puedas vivir la experiencia sin preocupaciones.\n\nSituados en primera línea de mar en El Médano, Tenerife, te invitamos a descubrir la emoción de Tenerife Kite Foil. Nuestro objetivo es proporcionar una experiencia única en deportes acuáticos. ¡Esperamos verte pronto en Tenerife Kite Foil, tu conexión perfecta con el kitesurf y el wing foil en Tenerife!`,
    },
    en: {
      title:'About Us',  
      text: `Welcome to Tenerife Kite Foil, your ultimate destination to experience the thrilling fusion of wind and waves! In partnership with AzulKiteboarding, we boast a solid 25-year history as pioneers in this exciting sport in Spain.\n\nAt Tenerife Kite Foil, we share the same passion for kitesurfing and wing foiling that has driven AzulKiteboarding to offer a wide range of high-quality services and products. Whether you're looking for kitesurfing or wing foiling courses, our experienced instructors are here to guide you and help you master the art of navigating the wind and waves.\n\nWe take pride in being one of the first companies dedicated to selling kitesurfing and wing foiling equipment in Spain, with our store located in El Médano, Tenerife. From kites and boards to hydrofoils and wing foiling wings, we offer everything you need to make the most of your water experience.\n\nExplore our outlet, where you'll find irresistible deals on previous-season equipment on clearance, as well as options for used and test material. If you don't have your own gear, we also provide kitesurfing and wing foiling equipment rental services, allowing you to experience the thrill worry-free.\n\nSituated on the frontline of the sea in El Médano, Tenerife, we invite you to discover the excitement of Tenerife Kite Foil. Our goal is provide a unique watersport experience. We look forward to seeing you soon at Tenerife Kite Foil, your perfect connection to kitesurfing and wing foiling in Tenerife!`,
    },
  };
  

const AboutUs = ({idioma}) => {
    const data=(idioma ==='es')? aboutUs.es : aboutUs.en;
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <main className="flex flex-col p-4 items-center justify-center flex-1 text-center">
        <h1 className="text-4xl text-blue-500 bold ">
          {data.title}
        </h1>

        <p className="mt-3 text-xl md:text-2xl text-white rounded-md bg-blue-500 p-4">
          {data.text}
        </p>
      </main>
    </div>
  );
}

export default AboutUs;
