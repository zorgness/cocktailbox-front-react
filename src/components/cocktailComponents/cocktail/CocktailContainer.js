import React from 'react'
import { useParams } from 'react-router-dom'
import { useFindCocktailById } from '../../../customHooks/actions/fetchDataAction'
import Cocktail from './Cocktail'
import { ErrorDisplay } from '../../../customHooks/actions/fetchDataAction'
import Loader from '../../Loader'

const CocktailContainer = () => {

  const params = useParams()
  const state = useFindCocktailById(params.id)
  const {data, error, status} = state

  if (status === 'fail') {
    return <ErrorDisplay error={error}/>
  } else if (status === 'idle') {
    return 'pas de résultat'
  } else if (status === 'fetching') {
    return <Loader />
  } else if (status === 'done') {
    return <Cocktail data={data} />
  }
}


export default CocktailContainer
