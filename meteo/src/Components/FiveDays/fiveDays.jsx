import React, { useState, useEffect } from "react";
import Loader from "react-js-loader";
import useGeolocalisation from "../../Hook/useGeolocalisation";
import useMeteo from "../../Hook/useMeteo";
// import "./App.css";
const FiveDays = ({ meteoData, setMeteoData }) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const api_key = "04a1fb98e66801b3cb9b693ff63ae455";

    const { latitude, longitude } = useGeolocalisation();

    useEffect(() => {
        if (!latitude || !longitude) {
            setIsLoading(true);
        } 
    }, [latitude, longitude]);
    
    const url = latitude && longitude
        ?  `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric&lang=fr`
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
            {!isLoading && meteoData && 
                <>
                <h2>Ville: {meteoData.city.name}</h2>
                {meteoData.list.map((day, index) => (
                    <div key={index} className="card-meteo">
                        <p>Température: {day.main.temp} C</p>
                        <p>Description: {day.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather Icon" />
                        <p>{day.dt_txt}</p>
                    </div>
                ))}
                </>
            }
        </>
    );
};

export default FiveDays;