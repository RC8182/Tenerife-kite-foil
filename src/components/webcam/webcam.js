

export default function Webcam({width,height}) {
    return (
      <div>
         <img className="video" 
         id="video" 
         alt="Imagen de la Webcam de El Médano, Tenerife"
         src="https://azul-kite.ddns.net/api/webcam" 
         controls autoPlay 
         style={{ width: width, height: height }}></img>
      </div>
    );
  }
  