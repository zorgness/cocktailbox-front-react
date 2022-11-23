import * as React from 'react'
import { dataReducer } from '../reducers/dataReducer'
import { fetchDataByName, fetchDataById, fetchDataByIngredient } from '../../api/fetchData'

const useFetchData = () => {

  const initialState = {
    data: null,
    error: null,
    status: 'idle',
  }

  const [state, dispatch] = React.useReducer(dataReducer, initialState )

  const {data, error, status} = state

  const execute = React.useCallback(promise => {
    dispatch({type: 'fetching'})
    promise
      .then(data => dispatch({type: 'done', payload: data}))
      .catch(error => dispatch({type: 'fail', error}))

  }, [])

  return {data, error, status, execute}
}

export const useFindCocktailByName = (name) => {
  const {data, error, status, execute} = useFetchData()
  React.useEffect(() => {
    if(!name) {
      return
    }
     execute(fetchDataByName(name))
  }, [name,execute])

  return {data, error, status}
}

export const useFindCocktailById = (id) => {
  const {data, error, status, execute} = useFetchData()
  React.useEffect(() => {
    if(!id) {
      return
    }
     execute(fetchDataById(id))
  }, [id,execute])

  return {data, error, status}
}

export const useFindCocktailByIngredient= (ingredient) => {
  const {data, error, status, execute} = useFetchData()
  React.useEffect(() => {
    if(!ingredient) {
      return
    }
     execute(fetchDataByIngredient(ingredient))
  }, [ingredient,execute])

  return {data, error, status}
}

export const ErrorDisplay = ({error}) => {
  return (
    <div style={{color: 'red'}}>
      Une erreur est survenue lors de la recherche du Cocktail detail :{' '}
      <pre style={{color: 'grey'}}> Détail : {error.message}</pre>
    </div>
  )
}
