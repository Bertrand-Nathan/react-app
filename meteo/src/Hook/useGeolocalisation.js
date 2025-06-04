import {useEffect, useState } from "react";

const useGeolocalisation = () => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    
    useEffect(() => {
        
        if(navigator.geolocation) {
            navigator.permissions.query({ name: 'geolocation' }).then(function(result){
            
            if (result.state === 'granted' || result.state === 'prompt') {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    }, function(error) {
                        console.error("Error occurred while retrieving location: ", error);
                    });
                } else if (result.state === 'denied') {
                    console.log("Geolocation permission denied.");
                }
            })
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [])
  
  return {latitude, longitude};
};

export default useGeolocalisation;