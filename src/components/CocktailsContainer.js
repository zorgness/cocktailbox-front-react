import { useFindCocktailByName } from '../customHooks/actions/fetchDataAction'

const CocktailsContainer = ({name}) => {

  const state = useFindCocktailByName(name)

  const {data , error, status} = state

  if (status === 'fail') {
    throw error
  } else if (status === 'idle') {
    return 'enter un nom de Coktail'
  } else if (status === 'fetching') {
    return 'chargement en cours ...'
  } else if (status === 'done') {
    console.log(data)
    return "done"
  }
}

export default CocktailsContainer
