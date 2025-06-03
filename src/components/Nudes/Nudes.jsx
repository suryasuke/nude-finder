import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as nsfwjs from "nsfwjs"; 
import "@tensorflow/tfjs"; 
import '../Nudes/Nudes.css'
import logo from '../../assests/logo removed.png'

function Nudes() {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await nsfwjs.load();
      setModel(loadedModel);
    };

    loadModel();
  }, []);


  useEffect(()=>{
        const intervalId = setInterval(() => {
      if (model && webcamRef.current) {
        captureImage();
      }
    }, 1000); 

    return () => clearInterval(intervalId);

  } , [model])


  const captureImage = async () => {
    if (!model || !webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = imageSrc;

    img.onload = async () => {
      const predictions = await model.classify(img);
      console.log(predictions);

      const nudeProbability = predictions.find(
        (p) => p.className === "Porn" || p.className === "Sexy"
      )?.probability;

      if (nudeProbability && nudeProbability > 0.5) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
  };

  return ( 
  
  <>

<div className="logo">
<img src={logo} alt="logo-nudity"/>
      </div>
    <div className="nudes-container">

     
      <div className="webcam-wrapper">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/png"
          className="webcam"
        />
        {isBlurred && <div className="blurred-overlay"></div>}
      </div>
      <button onClick={captureImage} className="capture-button">
        Capture & Analyze
      </button>
    </div>
  </>
  );
}

export default Nudes;
