'use client'
import { useState } from "react";
import { datos } from "./db";
import { DropdownButton } from "./dropdownButton";
const ContenedorWebcam= dynamic(()=> import ("../webcam/contenedorWebcam"));
import Logo from "../logo";
import dynamic from "next/dynamic";
import { Idiomas } from "../idiomas";

export default function Navbar ({idioma}) {
  const lang=(idioma==='es')? datos.es : datos.en;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openTab, setOpenTab] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tabs= lang.nav_items;

  return (
    <div className="text-black border-gray-200" onMouseLeave={()=>{setOpenTab(null)}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Idiomas idioma={idioma}/>
        <Logo/>
        <ContenedorWebcam/>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-700 bg-gray-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >

          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
        <ul className="flex flex-col justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-orange-500" style={{ backgroundColor: '#3B82F6' }}>
          <li>
            <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
          </li>
          {tabs?.map((e,i) => (
            <div key={i} >
              <DropdownButton tabs={e} openTab={openTab} setOpenTab={setOpenTab} />
            </div>
          ))}     
        </ul>
      </div>
    </div>
  );
};
