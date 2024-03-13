import React from 'react';
import { dbproductos } from './dbproductos';
import TabComponent from './tabComponent';

export const ContenedorTabs = () => {
  const db = dbproductos;

  return (
    <div className="flex flex-wrap">
      {db && db.map((e, i) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" key={i}>
          <TabComponent db={e} />
        </div>
      ))}
    </div>
  );
};