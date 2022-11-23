import React, {useState, useEffect} from 'react'
import { useFindCocktailByName, ErrorDisplay } from '../../../customHooks/actions/fetchDataAction'
import Cocktails from './Cocktails'
import HomePage from '../../HomePage'
import Loader from '../../Loader'
import { connect } from 'react-redux'
import { fetchData } from '../../../api/fetchData'

const CocktailsContainer = ({name, authData}) => {

  const [userLikes, setUserLikes] = useState([])

  useEffect(() => {

        authData?.userData?.likes.forEach(element => {
          const urlMain = process.env.REACT_APP_URL_MAIN
          fetchData(urlMain + element)
          .then(res => {
            setUserLikes(prev => [...prev, res])

          })
        });
  }, [authData?.userData?.likes.length])


  const state = useFindCocktailByName(name)

  const {data , error, status} = state

  if (status === 'fail') {
    return <ErrorDisplay error={error}/>
  } else if (status === 'idle') {
    return <HomePage authData={authData} />
  } else if (status === 'fetching') {
    return <Loader />
  } else if (status === 'done') {
    return <Cocktails data={data} userLikes={userLikes}  />
  }
}

const mapStateToProps = state => {

  return {
    authData: state.auth
  }
}

export default connect(mapStateToProps, null)(CocktailsContainer)
