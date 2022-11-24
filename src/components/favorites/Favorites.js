import React from 'react'
import Favorite from './Favorite'

const Favorites = ({list}) => {

  return (
    <div>
     <h1>Favorites</h1>
      <div className='d-flex justify-content-around flex-wrap gap-5'>
        {
          list.map((id, index) => {
            return <Favorite key={index} id={id}/>
          })
        }
      </div>
    </div>
  )
}

export default Favorites
