import React from 'react'
import { useLocation } from 'react-router-dom'
import Like from './Like'

const Cocktail = ({data}) => {

  const {idDrink, strDrink, strGlass, strDrinkThumb, strInstructions } = data[0]

  const location = useLocation()

  // Get all ingredients not null
  const ingredients = [];
  for (const [, value] of Object.entries(data[0]).filter(element => element[0].includes('strIngredient') && element[1] !== null)) {
    ingredients.push(value)
  }

  // Get all measures not null
  const measures = [];
  for (const [, value] of Object.entries(data[0]).filter(element => element[0].includes('strMeasure') && element[1] !== null)) {
    measures.push(value)
  }


  return (

    <div className="text-center">
              <h2>{strDrink}</h2>
              <p>{strGlass}</p>

              <Like idDrink={idDrink} liked={location.state.liked}/>

      <div className="d-flex flex-wrap justify-content-around align-items-center">
              <img src={strDrinkThumb} className="img-fluid m-3 rounded" style={{maxWidth: '320px', height:'auto'}} alt={strDrink} />
          <div className="d-flex">
            <div style={{maxWidth: '300px '}} className="m-3">
                <ul className="list-group list-group-flush ingredients list-unstyled">
                  <li className="list-group-item disabled text-start">Ingredients</li>
                  {
                    ingredients.map((ingredient, index) => {
                      return <li className='list-group-item text-start border-0' key={index}>{ingredient}</li>
                    })
                  }
                </ul>
            </div>

            <div style={{maxWidth: "300px"}} className="m-3">
              <ul className="list-group list-group-flush measures list-unstyled">
                <li className="list-group-item disabled text-start">Measures</li>
                {
                    measures.map((measure, index) => {
                      return <li className='list-group-item text-start border-0' key={index}>{measure}</li>
                    })
                  }
              </ul>
            </div>
          </div>
        </div>

          <div className="mt-5 text-center">
            <p className="m-5">{strInstructions}</p>
          </div>

     </div>

  )
}

export default Cocktail
