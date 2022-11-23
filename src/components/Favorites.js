import React from 'react'
import { connect } from 'react-redux'

const Favorites = ({authData}) => {
  console.log(authData?.userData?.likes)

  return (
    <div>Favorites</div>
  )
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth
  }
}

export default connect(mapStateToProps, null)(Favorites)
