import { useFindCocktailByName, ErrorDisplay } from '../../../customHooks/actions/fetchDataAction'
import Cocktails from './Cocktails'

const CocktailsContainer = ({name}) => {

  const state = useFindCocktailByName(name)

  const {data , error, status} = state

  if (status === 'fail') {
    return <ErrorDisplay error={error}/>
  } else if (status === 'idle') {
    return 'enter un nom de Cocktail'
  } else if (status === 'fetching') {
    return 'chargement en cours ...'
  } else if (status === 'done') {
    return <Cocktails data={data} />
  }
}

export default CocktailsContainer
