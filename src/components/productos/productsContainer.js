'use client'
import React, { useEffect } from 'react';
import { fetchProducts} from '@/utils/azul-fetch';
import { useStore } from '@/context/checkbox';
import ProductsCard from './procuctsCard';
import { CategoryCheckbox } from './checkBox';
import Spinner from '../spinner/spinner';

export const ProductsContainer = ({ idioma }) => {
  const {
    selectedCategories, productsList, isLoading, error,
    setProductsList, setLoading, setError
  } = useStore();

  const categoryList = [
    { id: '584', name: 'Tablas de Kitesurf' },
    { id: '714', name: 'Ofertas' },
    { id: '250', name: 'Kitesurf Market' },
    { id: '285', name: 'WingFoil Market' },
    { id: '65', name: 'Accesorios' },
  ];

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      setError(null);
      try {
        const initialProducts = await fetchProducts();
        setProductsList(initialProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, [setProductsList, setLoading, setError]);

  useEffect(() => {
    const loadFilteredProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const filteredProducts = await fetchProducts(selectedCategories);
        setProductsList(filteredProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFilteredProducts();
  }, [selectedCategories, setProductsList, setLoading, setError]);

  const title = (idioma === 'es') ? 'Productos' : 'Products';

  return (
    <div id='contenedor-ofertas' className='p-8'>
      <div className="flex flex-col p-2 items-center justify-center text-center bg-black">
        <h1 className="text-2xl text-white bold">
          {title}
        </h1>
      </div>
      <hr className="divider border-t-4 border-blue-500" />
      <div className="flex flex-wrap gap-4 mb-4">
        {categoryList.map((e, i) => (
          <CategoryCheckbox key={i} id={e.id} name={e.name} />
        ))}
      </div>
      {isLoading && <div className="text-center">Loading...<Spinner/></div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className='flex gap-4 flex-wrap justify-center'>
        {productsList && productsList.map((e, i) => {
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
