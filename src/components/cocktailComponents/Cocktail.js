import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFindCocktailById } from '../../customHooks/actions/fetchDataAction'

const Cocktail = () => {

  const params = useParams()

  console.log(params.id)

  // useEffect(() => {

  // })

  return (
    <div>Cocktail</div>
  )
}

export default Cocktail
