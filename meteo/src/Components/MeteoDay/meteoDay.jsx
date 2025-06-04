import React, { useState, useEffect } from "react";
import Loader from "react-js-loader";
import useGeolocalisation from "./../../Hook/useGeolocalisation";
import useMeteo from "../../Hook/useMeteo";
const MeteoDay = ({ meteoData, setMeteoData }) => {
    const [isLoading, setIsLoading] = useState(true);
    
    console.log("Météo du jour", meteoData);
    const { latitude, longitude } = useGeolocalisation();

    useEffect(() => {
        if (!latitude || !longitude) {
            setIsLoading(true);
        } 
    }, [latitude, longitude]);
    
    const url = latitude && longitude
  ?  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&appid=04a1fb98e66801b3cb9b693ff63ae455`
  : null;

    useMeteo(setMeteoData, setIsLoading, url);
    

    return (
        <>  
            <h1>Météo du jour</h1>
            {isLoading && (
                <div className={"item"}>
                    <Loader type="box-rotate-y" bgColor={"red"} color={"#ffff"} title={"La pluie arrive bientôt"} size={100} />
                </div>
            )}
            {!isLoading && meteoData && (
                <div>
                    <p>Ville: {meteoData.name}</p>
                    <p>Température: {Number.parseFloat(meteoData.main.temp).toFixed(2)} C</p>
                    <p>Description: {meteoData.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${meteoData.weather[0].icon}.png`} alt="Weather Icon" />
                </div>
            )}
        </>
    );
};

export default MeteoDay;