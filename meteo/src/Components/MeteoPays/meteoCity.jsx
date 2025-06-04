import React, { useState } from 'react';
import useMeteo from '../../Hook/useMeteo';
import Loader from 'react-js-loader';
const MeteoCity = ({ meteoData, setMeteoData, ville }) => {
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=04a1fb98e66801b3cb9b693ff63ae455`;
  useMeteo(setMeteoData, setIsLoading, url);

  return (
    <div>
      {isLoading ? (
        <div className={"item"}>
            <Loader type="box-rotate-y" bgColor={"red"} color={"#ffff"} title={"La pluie arrive bientôt"} size={100} />
        </div>
      ) : meteoData ? (
        <div>
          <h2>Ville: {meteoData.name}</h2>
          <p>Température: {Number.parseFloat(meteoData.main.temp).toFixed(2)} C</p>
          <p>Description: {meteoData.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${meteoData.weather[0].icon}.png`} alt="Weather Icon" />
        </div>
      ) : (
        <p>Aucune donnée météo disponible.</p>
      )}
    </div>
  );
};

export default MeteoCity;
