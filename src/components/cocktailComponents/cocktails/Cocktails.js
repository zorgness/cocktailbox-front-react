import React from 'react'
import CocktailCard from '../cocktail/CocktailCard'
import { useFindUserLikes } from '../../../customHooks/actions/fetchDataAction'

const Cocktails = ({cocktails}) => {

  const userId = localStorage.getItem('userId')

  const state = useFindUserLikes(userId)

  const { data } = state

  const findLike = (id) => {
    const tmp = data?.filter(({idDrink}) => {
      return idDrink === id
    })
    return tmp
  }

  // const handleClick = () => {
  //   setPage(prev => prev + 5)
  // }

  // console.log(page)

  return (
    <div>
    <div className='d-flex justify-content-around flex-wrap gap-5 m-5'>

      {
       cocktails.map((cocktail) => {

          return <CocktailCard
                    key={cocktail.idDrink}
                    cocktail={cocktail}
                    like={findLike(cocktail.idDrink)}
                  />
        })
      }

    </div>
      {/* <button onClick={handleClick}>next</button> */}
    </div>
  )
}

export default Cocktails
