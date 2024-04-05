'use client'
import { createContext, useState } from "react";

export const DataContext= createContext()

export const DataProvider = ({children}) => {
    
  const [idioma, setIdioma]= useState('es')
    const data={idioma, setIdioma}
    console.log(idioma)
    return (
      <DataContext.Provider value= {data} >
      {children}
      </DataContext.Provider>
    )
  }