import { Idiomas } from "../idiomas";


export default function FootBar({ idioma }) {
  return (
    <div className="fixed bottom-0 w-full h-12 bg-orange-500 border-t-2 border-white rounded-t-lg flex items-center justify-center">
        <div className="w-3/4 flex justify-star m-2 text-white">
            Viento Actual: 
        </div>  
      <div className="w-3/4 flex justify-end m-2">
        <Idiomas idioma={idioma} />
      </div>
    </div>
  );
}
