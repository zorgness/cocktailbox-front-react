import React from 'react'
import { useParams } from 'react-router-dom'
import { useFindCocktailById } from '../../customHooks/actions/fetchDataAction'

const Cocktail = () => {

  const params = useParams()
  const state = useFindCocktailById(params.id)
  const {data, error, status} = state

  console.log(status)
  console.log(error)
  console.log(data)


  return (
    <div>
      <h1>{data?.[0]?.strDrink}</h1>
    </div>
  )
}

export default Cocktail
