

export default function Webcam({width,height}) {
    return (
      <div>
         <img className="video" 
         id="video" 
         src="https://azul-kite.ddns.net/api/webcam" 
         controls autoPlay 
         style={{ width: width, height: height }}></img>
      </div>
    );
  }
  