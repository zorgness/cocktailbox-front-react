import React from 'react'
import CocktailsContainer from './cocktailComponents/cocktails/CocktailsContainer'

const Home = ({name, authData}) => {

  return (

    <div>

      <CocktailsContainer name={name} authData={authData} />

    </div>
  )
}

export default Home
