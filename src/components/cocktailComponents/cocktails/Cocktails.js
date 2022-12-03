import React from 'react'
import CocktailCard from '../cocktail/CocktailCard'
import { useFindUserLikes } from '../../../customHooks/actions/fetchDataAction'

const Cocktails = ({cocktails}) => {

  const userId = localStorage.getItem('userId')

  const state = useFindUserLikes(userId)

  const { data } = state

  const findCardIsLikedByUser = (id) => {
    const tmp = data?.filter(({idDrink}) => {
      return idDrink === id
    })
    return tmp?.length < 1
  }



  return (
    <div>
    <div className='d-flex justify-content-around flex-wrap gap-5 m-5'>

      {
       cocktails.map((cocktail) => {
        console.log(findCardIsLikedByUser(cocktail.idDrink))
          return <CocktailCard
                    key={cocktail.idDrink}
                    cocktail={cocktail}
                    isLiked={findCardIsLikedByUser(cocktail.idDrink)}
                  />
        })
      }

    </div>

    </div>
  )
}

export default Cocktails
