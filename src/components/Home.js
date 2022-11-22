import React from 'react'
import CocktailsContainer from './CocktailsContainer'

const Home = ({name}) => {


  return (

    <div>

      <h1>Home</h1>

      <CocktailsContainer name={name} />

    </div>
  )
}

export default Home
