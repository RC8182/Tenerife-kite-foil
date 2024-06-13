import { BlackImage } from "../black-image";
import { datos } from "./db";

export const ContenedorPortada = async({idioma}) => {

  const imageList= (idioma == 'es')? datos.es.imageList : datos.en.imageList;

  return (
    <div>
      <section className="flex flex-col md:flex-row justify-center">
        {imageList && imageList.map((e,i)=>{
          
          return <div key={i} className="w-full h-1/2 md:w-1/2  md:h-full">
                    <BlackImage 
                    titulo={e.titulo} 
                    src={e.src} 
                    alt={e.alt} 
                    link={e.link}/>
                  </div> 
        })}
      </section>
    </div>
  );
};
