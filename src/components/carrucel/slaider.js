import ProgressSlider from "./progress-slider";

export const Slaider = ({ idioma, db, imageObj}) => {
  const datosSlider = (idioma === 'es') ? db?.es : db?.en;
  const titulo = datosSlider?.slaider.titulo;

  return (
    <div className={`flex justify-center `}>
      <div className="justify-center min-w-[300px] text-[rgb(0,59,112)]">
        <div className="flex flex-col items-center text-4xl text-blue-500 ">
          <h1>{titulo}</h1>
          <div className="relative max-w-full overflow-hidden"> 
            <ProgressSlider items={imageObj}/> 
          </div>
        </div>
      </div>
    </div>
  );
};
