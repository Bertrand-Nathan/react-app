import React from 'react'
import { Link } from 'react-router'

const CardCocktail = ({data}) => {
    return (
        <>
            <Link to={`/details/${data.idDrink}`}>
                <div key={data.idDrink} className='card-cocktail'>
                    <h3>{data.strDrink}</h3>
                    <img src={data.strDrinkThumb} alt={data.strDrink} width={100} />
                </div>
            </Link>
        </>
    )
}

export default CardCocktail
