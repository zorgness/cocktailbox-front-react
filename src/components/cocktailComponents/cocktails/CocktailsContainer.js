import { useFindCocktailByName, ErrorDisplay } from '../../../customHooks/actions/fetchDataAction'
import Cocktails from './Cocktails'
import HomePage from '../../HomePage'
import Loader from '../../../Loader'

const CocktailsContainer = ({name}) => {

  const state = useFindCocktailByName(name)

  const {data , error, status} = state

  if (status === 'fail') {
    return <ErrorDisplay error={error}/>
  } else if (status === 'idle') {
    return <HomePage />
  } else if (status === 'fetching') {
    return <Loader />
  } else if (status === 'done') {
    return <Cocktails data={data} />
  }
}

export default CocktailsContainer
