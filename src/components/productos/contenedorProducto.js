import TipoProducto from "./tipoProducto";


export default function ContenedorProductos({ idioma, productos }) {
    const datosProductos =( idioma==='es') ? productos?.es : productos?.en;
  return (
    <div className="flex flex-col my-10">
      <div className="flex text-2xl text-blue-800 bold justify-center mb-4">
      <h2>{datosProductos.titulo}</h2>
      </div>
      
      <div className="flex flex-wrap justify-around gap-10 p-4">
        {datosProductos.productos.map((producto, index) => (
          <TipoProducto key={index} title={producto.title} src={producto.src.src} link={producto.url} />
        ))}
      </div>
    </div>

  )
}
