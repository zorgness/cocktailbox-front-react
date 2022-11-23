import React from 'react'
import { capitalize } from '../utils/capitalize'

const HomePage = ({authData}) => {
  return (

    <h1>Welcome {capitalize(authData?.userData?.username)}</h1>
  )
}

export default HomePage
