import React from 'react'
import { connect } from 'react-redux'
import { useFindUserLikes } from '../../customHooks/actions/fetchDataAction'
import { ErrorDisplay } from '../../customHooks/actions/fetchDataAction'
import Loader from '../Loader'
import FavoritePage from './FavoritePage'
import Favorites from './Favorites'

const FavoritesContainer = ({authData}) => {

  const userId = localStorage.getItem('userId')

  const state = useFindUserLikes(userId)

  const { data, error, status } = state

  const idList = data?.map(({idDrink}) => idDrink)

  console.log(idList)

  if (status === 'fail') {
    return <ErrorDisplay error={error}/>
  } else if (status === 'idle') {
    return <FavoritePage />
  } else if (status === 'fetching') {
    return <Loader />
  } else if (status === 'done') {
    return <Favorites list={idList} />
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth
  }
}

export default connect(mapStateToProps, null)(FavoritesContainer)
