'use client'
import { useEffect, useState } from 'react';
import Webcam from './webcam';

export default function ContenedorWebcam() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime < 9 || currentTime >= 19) {
      setIsOffline(true);
    }
  }, []);

  return (
    <div className="w-72 border border-white rounded-xl m-2 p-2">
        <div className='flex'>
            <div className='flex flex-col '> 
                {isOffline ? (
                    <div className="text-xl font-bold text-center mb-2">
                    Offline<span className="inline-block w-5 h-5 rounded-full bg-gray-500 ml-2"></span>
                    </div>
                ) : (
                    <div className="text-xl font-bold text-center mb-2">
                    Live<span className="inline-block w-5 h-5 rounded-full bg-red-500 ml-2 animate-pulse"></span>
                    </div>
                )}
                <div className="text-xs text-center text-black mt-2">Tecnología ofrecida por Telco Telecomunicaciones</div>
            </div>
            {!isOffline && <Webcam width={'300px'} height={'90px'}/>}
            {isOffline && <h2 className="text-center">Estaremos de vuelta a las 10hs</h2>}
        </div>
    </div>
  );
}
