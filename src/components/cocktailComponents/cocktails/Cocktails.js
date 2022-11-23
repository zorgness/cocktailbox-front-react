import React from 'react'
import CocktailCard from '../cocktail/CocktailCard'

const Cocktails = ({data, userLikes}) => {

  // console.log(userLikes)
  // // console.log(data)

  // const allIdDrinks = data.map(({idDrink}) => {
  //   return idDrink
  // })

  // const allUserLikesIdDrinks = userLikes.map(({idDrink}) => {
  //   return idDrink
  // })

  // console.log(allIdDrinks)
  // console.log(allUserLikesIdDrinks)

  // const result = allUserLikesIdDrinks.map(searchTerm => allIdDrinks.findIndex((compareTerm) => compareTerm === searchTerm));

  // console.log(result)


  return (
    <div className='d-flex justify-content-around flex-wrap gap-5'>

      {
        data.map((cocktail) => {

          return <CocktailCard
                    key={cocktail.idDrink}
                    cocktail={cocktail}
                    userLikes={userLikes}
                  />
        })
      }

    </div>
  )
}

export default Cocktails
