import ProgressSlider from './progress-slider';

export const Slaider = ({ idioma, db, mwith }) => {
  const datosSlider = (idioma === 'es') ? db?.es : db?.en;
  const titulo = datosSlider?.slaider.titulo;
  const items = datosSlider?.slaider.items;

  return (
    <div className={`flex justify-center ${mwith ? `max-w-${mwith}` : 'md:w-screen'}`}>
      <div className="justify-center min-w-[300px] text-[rgb(0,59,112)]">
        <div className="flex flex-col items-center text-4xl text-blue-500 ">
          <h1>{titulo}</h1>
          <div className="m-5">
            <ProgressSlider items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};
