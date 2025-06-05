import React, { useEffect, useState } from 'react';
import useApi from '../hook/useApi';
import useMultiApi from '../hook/useMultiApi';
import CardCocktail from '../components/cardCocktail';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [cocktailData, setCocktailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [urls, setUrls] = useState([]);

  useApi(setCategories, () => {}, "/list.php?c=list");

  useEffect(() => {
    if (categories.drinks) {
      const newUrls = categories.drinks.map(cat =>
        `/filter.php?c=${encodeURIComponent(cat.strCategory)}`
      );
      setUrls(newUrls);
    }
  }, [categories]);

  useMultiApi(setCocktailData, setIsLoading, urls);

  return (
    <div className="list-cocktails">
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        cocktailData.map(({ url, data }) => {
          const category = decodeURIComponent(url.split('=')[1]);
          const drinks = data?.drinks || [];

          return (
            <div key={category} >
              <h2>{category}</h2>
              <div>
                {drinks.map((cocktail) => (
                  <CardCocktail key={cocktail.idDrink} data={cocktail} />
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;