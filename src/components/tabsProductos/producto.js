import { Slaider } from '../carrucel/slaider';

export const Producto = ({db}) => {
    const title = db.db.title;
    const size = db.db.size;
    const color = db.db.color;
    const imageObj = db.db.image; // Asegúrate de tener la url de la imagen en tu base de datos
    const price = db.db.price[0]; // Asegúrate de tener el precio en tu base de datos

    return (
        <div className="flex flex-col">
            <h5 className="mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <div className="w-100">
            <Slaider imageObj={imageObj} />
            </div>

            <p className="mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{`From €${price} *`}</p>
            <div className="flex flex-col justify-between p-4 leading-normal gap-4">
                <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Color</h6>
                <div className="flex flex-wrap gap-2">
                    {color && color.map((e, index) => (
                        <div key={index} className="border border-black p-2">{e}</div>
                    ))}
                </div>
                <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Kite Size</h6>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {size && size.map((e, index) => (
                        <div key={index} className="border border-black p-2 text-center min-w-[4rem]">{e}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}