import React, {useEffect} from "react";

function useApi(setData, setIsLoading, url) {
  useEffect(() => {
    if (!url) return;
    setIsLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533${url}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Erreur cocktail :", err))
      .finally(() => setIsLoading(false));
  }, [url]);
}

export default useApi;