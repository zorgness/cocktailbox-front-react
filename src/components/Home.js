import React from 'react'
import CocktailsContainer from './cocktailComponents/cocktails/CocktailsContainer'

const Home = ({name}) => {


  return (

    <div>

      <CocktailsContainer name={name} />

    </div>
  )
}

export default Home
