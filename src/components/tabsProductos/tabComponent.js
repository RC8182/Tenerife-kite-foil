'use client'
import { useState } from 'react';
import { Producto } from './producto';
import { Description } from './description';


export default function TabComponent(db){
  const [selectedTab, setSelectedTab] = useState('kite');
  const type= db.db.type
    const tabs = [
        { id: 'kite', label:type ,content:<Producto db={db}/> },
        { id: 'descripcion', label: 'Descripción', content:<Description db={db}/> },
    ];

  return (
    <div className="w-350 max-h-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" role="tablist">
        {tabs.map(tab => (
          <li key={tab.id} className="me-2">
            <button
              id={`${tab.id}-tab`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={selectedTab === tab.id}
              className={`inline-block p-4 ${selectedTab === tab.id ? 'text-blue-600' : 'hover:text-gray-600'} rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div id="defaultTabContent">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${selectedTab === tab.id ? 'block' : 'hidden'}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {/* Aquí puedes agregar el contenido de cada pestaña */}
            <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{tab.content}</h1>

          </div>
        ))}
      </div>
    </div>
  );
};
