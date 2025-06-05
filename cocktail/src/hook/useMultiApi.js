
import React, {useEffect} from "react";
function useMultiApi(setData, setIsLoading, urls) {
  useEffect(() => {
    if (!urls || urls.length === 0) return;

    setIsLoading(true); 

    Promise.all(
      urls.map(url =>
        fetch(`https://www.thecocktaildb.com/api/json/v2/9973533${url}`)
          .then(res => res.json())
          .then(data => ({ url, data }))
          .catch(err => {
            console.error("Erreur cocktail :", err);
            return { url, data: null };
          })
      )
    )
      .then(results => {
        setData(results);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [urls]);
}
export default useMultiApi;