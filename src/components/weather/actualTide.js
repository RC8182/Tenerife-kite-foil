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

  // Verificar el número de mareas disponibles para el día actual
  if (mareasOrdenadas.length === 3) {
      // Si hay solo 3 mareas, consideramos que hay una pleamar y una bajamar
      pleamar1 = mareasOrdenadas[0];
      bajamar1 = mareasOrdenadas[1];
      pleamar2 = bajamar2 = mareasOrdenadas[2];
  } else if (mareasOrdenadas.length >= 4) {
      // Si hay 4 o más mareas, consideramos las primeras dos pleamares y las últimas dos bajamares
      pleamar1 = mareasOrdenadas[0];
      pleamar2 = mareasOrdenadas[1];
      bajamar1 = mareasOrdenadas[mareasOrdenadas.length - 2];
      bajamar2 = mareasOrdenadas[mareasOrdenadas.length - 1];
  } else {
      // Si hay menos de 3 mareas, no podemos determinar pleamares ni bajamares
      console.log("No hay suficientes mareas para el día actual");
  }

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
    <div className='contenedor-card bg-white text-black text-18 rounded-lg w-300 h-400  p-8 flex flex-col'>
      <div className='flex flex-col'>
        <div>
          <h2>{tides}</h2>
        </div>
        <div className='divider border border-orange-300'></div>
      </div>

      <div className='m-2 flex justify-center'>
        <CuentaAtras objetivo={horarioProximaMarea} tipo={tipoProximaMarea} />
      </div>

      <div className='text-xs flex justify-center flex-wrap'>
        <div className='flex flex-col m-4 p-2'>
          <Bajamar baja1={bajamar1.hora} baja2={bajamar2.hora} idioma={idioma} />
        </div>

        <div className='divider border-l-2 border-orange-300'></div>

        <div className='flex flex-col m-4 p-2'>
          <Pleamar alta1={pleamar1.hora} alta2={pleamar2.hora} idioma={idioma} />
        </div>
      </div>

      <div className='justify-center'>
        {mareasMes ? (
          <TideChart min_day={0.5} max_day={0.75} estado={tipoProximaMarea} listaMareas={mareasMes} />
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </div>
  );
};
