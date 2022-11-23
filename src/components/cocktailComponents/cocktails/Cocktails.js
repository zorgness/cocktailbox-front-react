import React from 'react'
import CocktailCard from '../cocktail/CocktailCard'

const Cocktails = ({data}) => {

  return (
    <div className='d-flex justify-content-around flex-wrap gap-5'>

      {
        data.map((cocktail) => {
          return <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        })
      }

    </div>
  )
}

export default Cocktails
