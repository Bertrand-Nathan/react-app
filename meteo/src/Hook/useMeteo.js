import { useEffect } from 'react';

export default function useMeteo(setMeteoData, setIsLoading, url) {
  useEffect(() => {
    if (!url) return;

    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => setMeteoData(data))
      .catch(err => console.error("Erreur météo :", err))
      .finally(() => setIsLoading(false));
  }, [url]);
}
