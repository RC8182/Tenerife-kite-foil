import { getDataTide } from "@/utils/functions";
import { Bajamar } from "./ModulosTiempo/bajamar";
import { Pleamar } from "./ModulosTiempo/pleamar";
import { TideChart } from "./Charts/TideChart";
import { CuentaAtras } from "./ModulosTiempo/cuentaAtras";


function obtenerMareasDelDia(mareas) {
  const hoy = new Date().toISOString().slice(0, 10); // Obtener la fecha actual en formato YYYY-MM-DD

  // Filtrar las mareas del día actual
  const mareasDelDia = mareas.filter(marea => marea.fecha === hoy);
  
  // Ordenar las mareas por hora
  const mareasOrdenadas = mareasDelDia.sort((a, b) => {
      const horaA = new Date(`${a.fecha}T${a.hora}`);
      const horaB = new Date(`${b.fecha}T${b.hora}`);
      return horaA - horaB;
  });

  // Inicializar las variables para almacenar las mareas
  let pleamar1, pleamar2, bajamar1, bajamar2;

  // Filtrar las pleamares y bajamares
  const pleamares = mareasOrdenadas.filter(marea => marea.tipo === "pleamar");
  const bajamares = mareasOrdenadas.filter(marea => marea.tipo === "bajamar");

  // Asignar los valores a las variables según el tipo de marea
  pleamar1 = pleamares.length > 0 ? pleamares[0].hora : null;
  pleamar2 = pleamares.length > 1 ? pleamares[1].hora : null;
  bajamar1 = bajamares.length > 0 ? bajamares[0].hora : null;
  bajamar2 = bajamares.length > 1 ? bajamares[1].hora : null;

  return { pleamar1, pleamar2, bajamar1, bajamar2 };
}

export const ActualTide = async({idioma}) => {
  const tides=(idioma === 'es')? 'Mareas': 'Tides';
  const data= await getDataTide();
  const mareasMes= data.mareas.datos.marea;
  const { pleamar1, pleamar2, bajamar1, bajamar2 } = obtenerMareasDelDia(mareasMes);
// Filtrar las mareas futuras y ordenarlas por hora
// Obtener la fecha y hora actual
const fechaHoraActual = new Date();
const mareasFuturas = mareasMes
  .filter(marea => new Date(`${marea.fecha}T${marea.hora}`) > fechaHoraActual)
  .sort((a, b) => new Date(`${a.fecha}T${a.hora}`) - new Date(`${b.fecha}T${b.hora}`));

// Obtener la próxima marea y su tipo
const proximaMarea = mareasFuturas[0];
const horarioProximaMarea = new Date(`${proximaMarea.fecha}T${proximaMarea.hora}`).getTime();
const tipoProximaMarea = proximaMarea.tipo;

  return (
    <div className='contenedor-card bg-white text-black font-semibold text-12 rounded-lg min-w-full md:min-w-[350px] h-auto p-2 flex flex-col'>
      <div className='flex flex-col'>
        <div className="flex justify-center text-lg">
          <h2>{tides}</h2>
        </div>
        <div className='divider border border-orange-300'></div>
      </div>

      <div className='m-2 flex justify-center'>
        <CuentaAtras objetivo={horarioProximaMarea} tipo={tipoProximaMarea} idioma={idioma} />
      </div>

      <div className='text-xs flex justify-center flex-wrap'>
        <div className='flex flex-col p-2'>
          <Bajamar baja1={bajamar1} baja2={bajamar2} idioma={idioma} />
        </div>

        <div className='divider border-l-2 border-orange-300'></div>

        <div className='flex flex-col p-2'>
          <Pleamar alta1={pleamar1} alta2={pleamar2} idioma={idioma} />
        </div>
      </div>

      <div className='justify-center'>
        {mareasMes ? (
          <TideChart min_day={0.5} max_day={0.75} estado={tipoProximaMarea} listaMareas={mareasMes} idioma={idioma}/>
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </div>
  );
};
