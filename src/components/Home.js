import React from 'react'
import CocktailsContainer from './cocktailComponents/CocktailsContainer'

const Home = ({name}) => {


  return (

    <div>

      <CocktailsContainer name={name} />

    </div>
  )
}

export default Home
