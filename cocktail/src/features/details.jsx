import React, { useState } from 'react';
import useApi from '../hook/useApi';
import { useParams } from 'react-router';

const Details = () => {
  const [detailsCocktail, setDetailsCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useApi(setDetailsCocktail, setIsLoading, `/lookup.php?i=${id}`);

  const cocktail = detailsCocktail?.drinks?.[0] || null;

  const ingredients = cocktail
    ? Object.keys(cocktail)
        .filter(key => key.startsWith('strIngredient') && cocktail[key])
        .map(key => cocktail[key])
    : [];

  return (
    <div className='list-cocktails'>
      {isLoading && <p>Chargement...</p>}

      {!isLoading && cocktail ? (
        <div>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width={200} />
          <div>
            <h2>{cocktail.strDrink}</h2>
            <p>Instruction: {cocktail.strInstructionsFR || cocktail.strInstructions}</p>
            <h3>Ingrédients :</h3>
            <ul className="ingredients-list">
              {ingredients.map((ingr, index) => (
                <li className='ingredient' key={index}>{ingr}
                  <img src={`https://www.thecocktaildb.com/images/ingredients/${ingr}-Small.png`} alt={ingr} />
                </li>
                
              ))}
            </ul>
          </div>
          
        </div>
      ) : (
        !isLoading && <p>Aucune donnée trouvée.</p>
      )}
    </div>
  );
};

export default Details;
