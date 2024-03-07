import { BlackImage } from "../black-image";
import { dbPortada } from "./dbPortada";


export const ContenedorPortada = ({idioma}) => {
  const data= (idioma==='es')? dbPortada.es : dbPortada.en;
  return (
    <div>
      <section className="flex flex-col md:flex-row">
        {data && data.map((e,i)=>{
          return <div key={i} className="w-full h-1/2 md:w-1/2  md:h-full">
                    <BlackImage titulo={e.titulo} src={e.src} alt={e.alt} link={e.link}/>
                  </div> 
        })}
      </section>
    </div>
  );
};
