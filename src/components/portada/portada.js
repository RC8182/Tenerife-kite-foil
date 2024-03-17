import { fetchStrapi } from "@/utils/functions";
import { BlackImage } from "../black-image";



export const ContenedorPortada = async({idioma}) => {
  const data= await fetchStrapi('portadas', idioma, 'black');

  return (
    <div>
      <section className="flex flex-col md:flex-row">
        {data.data && data.data.map((e,i)=>{
          return <div key={i} className="w-full h-1/2 md:w-1/2  md:h-full">
                    <BlackImage 
                    titulo={e.attributes.black.title} 
                    src={e.attributes.black.image.data.attributes.url} 
                    alt={e.attributes.black.alt} 
                    link={e.attributes.black.url}/>
                  </div> 
        })}
      </section>
    </div>
  );
};
