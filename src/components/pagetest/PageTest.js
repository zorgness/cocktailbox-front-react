import React from 'react'
import {drinks} from '../../data/drinks'
import CocktailCardTest from '../cocktailComponents/cocktail/CocktailCardTest'

const PageTest = () => {

  return (
    <div>
      <h1>PageTest</h1>

      <div className='d-flex justify-content-center flex-wrap'>
      {
        drinks.map((drink, index) => {
          return <CocktailCardTest key={index} cocktail={drink} />
        })
      }

      </div>
    </div>
  )
}

export default PageTest
