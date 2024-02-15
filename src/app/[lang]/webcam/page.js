import { Slaider } from '@/components/carrucel/slaider';
import Webcam from '@/components/webcam/webcam';
import React from 'react';

export default function Webcampage({params}) {
  const idioma= params.lang;

  return (
    <div className="m-4 bg-gray-100 min-h-screen flex justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[rgb(0,59,112)]" >El Médano Web Cam</h1>

        <div className="m-4 flex justify-center">
          <Webcam className="w-[600px] h-[300px] sm:w-[300px] sm:h-[150px]" />
        </div>


        <div className='flex justify-center'>
          <Slaider idioma={idioma} />
        </div>
      </div>
    </div>
  );
}
