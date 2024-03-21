import { BlackImage } from "../black-image";



export const ContenedorPortada = async({imageList}) => {


  return (
    <div>
      <section className="flex flex-col md:flex-row">
        {imageList && imageList.map((e,i)=>{
          return <div key={i} className="w-full h-1/2 md:w-1/2  md:h-full">
                    <BlackImage 
                    titulo={e.title} 
                    src={e.image.data.attributes.url} 
                    alt={e.alt} 
                    link={e.url}/>
                  </div> 
        })}
      </section>
    </div>
  );
};
