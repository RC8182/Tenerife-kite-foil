// ScrollingBanner.js

const ScrollingBanner = ({title, texts }) => {
    const allTexts = texts.join('  - ');
    return (
        <div className="overflow-hidden bg-gray-900">
          <div className="p-4 mx-auto">
            <div className="marquee" style={{ animation: `marquee 25s linear infinite`}}>
            <span className="text-orange-500 text-3xl text-center">
                {title}
              </span>
              <span className="text-white">
                {allTexts}
              </span>
            </div>
          </div>
        </div>
      );
  };
  
  export default ScrollingBanner;





  
//   <style>
// /* Estilos para el banner */
// .marquee {
//   overflow: hidden;
//   background-color: #2d2d2d; /* Cambiar el color de fondo según necesites */
//   padding: 1rem;
//   margin: auto;
//   /* Ajusta el ancho del banner según lo necesites */

//   animation: marquee 25s linear infinite;
// }

// @keyframes marquee {
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }

// .text-orange {
//   color: #ff7e29; /* Cambiar el color del texto según necesites */
// }

// .text-white {
//   color: #ffffff; /* Cambiar el color del texto según necesites */
// }

// </style>
// <div class="overflow-hidden bg-gray-900">
//   <div class="p-4 mx-auto">
//     <div class="marquee">
//       <span class="text-orange text-3xl">
//         New Season
//       </span>
//       <span class="text-white">
//         Eleveight RSV8 kite from 1.279,00€ Eleveight XSV4 (2024) from 1.021,00€- Eleveight RS+V2 from 1.729,00€ 
//       </span>
//     </div>
//   </div>
// </div>
  