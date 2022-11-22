import React from 'react'
import CocktailCard from './CocktailCard'

const Cocktails = ({data}) => {

  return (
    <div className='d-flex justify-content-around flex-wrap gap-5'>

      {
        data.map((cocktail) => {
          return <CocktailCard cocktail={cocktail} />
        })
      }

    </div>
  )
}

export default Cocktails
