'use client'
import { fetchProducts } from '@/utils/azul-fetch';
import { useStore } from '@/context/checkbox';
import { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner';
import { CategoryCheckbox } from './checkBox';
import ProductsCard from './procuctsCard';

export const ProductsContainer = ({ idioma }) => {
  const { selectedCategory, setSelectedCategory, setDefaultCategory, isLoading, setLoading, error, setError } = useStore();
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await getProducts();
        setProductsList(products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadProducts();
  }, [setLoading, setError]);

  useEffect(() => {
    if (idioma === 'es') {
      setDefaultCategory(716);  // ID for "Ofertas"
    } else {
      setDefaultCategory(714);  // ID for "Sales"
    }
  }, [idioma, setDefaultCategory]);

  const categoryList = (idioma === 'es') ? 
    [    
      { id: 61, name: 'Kitesurf Market' },
      { id: 513, name: 'Cometas' },
      { id: 519, name: 'Tablas de Kitesurf' },
      { id: 716, name: 'Ofertas' },
      { id: 65, name: 'Accesorios' },
      { id: 68, name: 'WingFoil Market' },
    ]
    :
    [
      { id: 250, name: 'Kitesurf Market' },
      { id: 555, name: 'Kites' },
      { id: 584, name: 'Kitesurf Boards' },
      { id: 714, name: 'Sales' },
      { id: 265, name: 'Accesories' },
      { id: 285, name: 'WingFoil Market' },
    ];

  const title = (idioma === 'es') ? 'Productos' : 'Products';

  const filteredProductsList = productsList.filter(product => product.permalink.includes(`/${idioma}/`));

  const categorySelected = selectedCategory 
    ? filteredProductsList.filter(product => product.categories.some(category => category.id === selectedCategory))
    : filteredProductsList;

  return (
    <div id='contenedor-ofertas' className='p-8'>
      <div className="flex flex-col p-2 items-center justify-center text-center bg-black">
        <h1 className="text-2xl text-white bold">
          {title}
        </h1>
      </div>
      <hr className="divider border-t-4 border-blue-500" />
      <div className="flex flex-wrap gap-4 m-4 text-xl justify-center">
        {categoryList.map((e, i) => (
          <CategoryCheckbox 
            key={i} 
            id={e.id} 
            name={e.name}
            selectedCategory={selectedCategory}
            onChange={() => setSelectedCategory(e.id)}
          />
        ))}
      </div>
      {isLoading && <div className="text-center">Loading...<Spinner /></div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className='flex gap-4 flex-wrap justify-center'>
        {categorySelected && categorySelected.map((e, i) => {
          const originalPrice = parseFloat(e.regular_price);
          const salePrice = parseFloat(e.sale_price);

          let discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;
          discountPercentage = Math.round(discountPercentage);

          return (
            <div key={i}>
              <ProductsCard
                idioma={idioma}
                img={e.images[0].src}
                alt={e.images[0].name}
                title={e.name}
                discount={discountPercentage}
                price={e.price}
                link={e.permalink}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

async function getProducts() {
  let products = await fetchProducts();
  return products;
}