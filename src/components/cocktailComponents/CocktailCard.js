import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const CocktailCard = ({cocktail}) => {

  const {idDrink, strDrink, strDrinkThumb, strGlass, strCategory, strAlcoholic} = cocktail

  return (


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strDrinkThumb}/>
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Card.Text>
            <p>{strCategory}</p>
            <p>{strAlcoholic}</p>
            <p>{strGlass}</p>
          </Card.Text>
          <Link to={`/cocktail/${idDrink}`} variant="primary">see more...</Link>
        </Card.Body>
      </Card>

  )
}

export default CocktailCard
