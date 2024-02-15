import { datos } from './db'
import ProgressSlider from './progress-slider'


export const Slaider = ({idioma}) => {
    const datosSlider =( idioma==='es') ? datos?.es : datos?.en;
    const titulo= datosSlider.slaider.titulo;
    //const sub1= datosSlider.slaider.subtitulo;
    const items= datosSlider.slaider.items;
    return (
        <div className="flex justify-center md:max-w-xs">
            <div className="justify-center min-w-[300px] lg:min-w-screen text-[rgb(0,59,112)]">
                <div className=" font-bold flex flex-col items-center">
                    <h1>{titulo}</h1>
                    <div className="m-5">
                        <ProgressSlider items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}
