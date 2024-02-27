import TipoProducto from "./tipoProducto";


export default function ContenedorProductos({ idioma, productos }) {
    const datosSlider =( idioma==='es') ? productos?.es : productos?.en;
  return (
    <div className="flex flex-wrap justify-around gap-10 p-4">
      {datosSlider.productos.map((producto, index) => (
        <TipoProducto key={index} title={producto.title} src={producto.src} />
      ))}
    </div>
  )
}
