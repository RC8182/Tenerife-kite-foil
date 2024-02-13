import Webcam from '@/components/webcam/webcam';
import React from 'react';

export default function Webcampage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">El Médano Web Cam</h1>

        <div className="mb-4">
          <Webcam width={'600px'} height={'300px'} />
        </div>

        <div>
          {/* Agrega tu carrusel de ofertas aquí utilizando Tailwind CSS */}
          {/* Puedes usar librerías como slick-carousel o swiper para el carrusel */}
        </div>
      </div>
    </div>
  );
}
