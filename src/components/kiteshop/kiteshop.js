import { datos } from "./db";

export default function SeccionKiteshop({idioma}) {
    const data= (idioma === 'es')? datos.es : datos.en;
    const productos= data.products;
    const outlet= data.outlet;
    const sales= data.sales;
    const test= data.test;
    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-col items-center justify-center p-2 bg-black m-0 text-white text-2xl">
                {data.title}
            </div>
            <hr className=" divider border-t-4 border-blue-500" />
            <div className="flex flex-col md:flex-row md:justify-center container mx-auto p-6">
                <div className="md:w-1/3 md:mr-4 mb-4">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className=" text-orange-500 text-xl font-bold mb-4">{data.aboutUs.title}</h2>
                        <hr className=" divider border-t-2 border-blue-500" />
                        <p>{data.aboutUs.text}</p>
                    </div>
                </div>
                <div className="md:w-1/3 md:mx-2 mb-4">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-orange-500 text-xl font-bold mb-4">{productos.title}</h2>
                        <hr className=" divider border-t-2 border-blue-500" />
                        <ul>
                            {
                                productos.productsList && productos.productsList.map((e, index) => {
                                    return (
                                        <li key={index}>
                                        {e}
                                        <hr className="divider border-t-1 border-blue-300" />
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/3 md:ml-4">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <div className="flex flex-col">
                            <h2 className="text-orange-500 text-xl font-bold mb-2">{sales.title}</h2>
                            <hr className=" divider border-t-2 border-blue-500" />
                            <p>{sales.text}</p>
                            <h2 className="text-orange-500 text-xl font-bold mb-2">{outlet.title}</h2>
                            <hr className=" divider border-t-2 border-blue-500" />
                            <p>{outlet.text}</p>
                            <h2 className="text-orange-500 text-xl font-bold mb-2">{test.title}</h2>
                            <hr className=" divider border-t-2 border-blue-500" />
                            <p>{test.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
