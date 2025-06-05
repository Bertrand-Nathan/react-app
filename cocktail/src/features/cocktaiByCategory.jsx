import React, {useState} from 'react'
import { useParams } from 'react-router';
import useApi from '../hook/useApi';
import CardCocktail from '../components/cardCocktail';

const CocktaiByCategory = () => {
    const [dataCocktail, setDataCocktail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { slug } = useParams();
    
    useApi(setDataCocktail, setIsLoading, `/filter.php?c=${slug}`);

    const cocktails = dataCocktail?.drinks;

    return (
        <div>
            {isLoading && <p>Chargement...</p>}
            {!isLoading && cocktails && cocktails.map((cocktail) =>(
                <CardCocktail data={cocktail}/>
            ))}
        </div>
    )
}

export default CocktaiByCategory
