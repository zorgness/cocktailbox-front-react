import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Like from './Like';

const CocktailCard = ({cocktail, liked}) => {


  const {idDrink, strDrink, strDrinkThumb, strGlass, strCategory, strAlcoholic} = cocktail

  const imgStyles = {backgroundImage: `linear-gradient(190deg, #fa7c30 16%, rgba(0, 0, 0, 0)16%), url(${strDrinkThumb})`, backgroundSize: "cover", backgroundPosition: "center", height: "280px" }

  return (


      <Card style={{ width: '18rem' }}>
        <div className='rounded-top' style={imgStyles}>
          <div className='text-end m-1'>
            <Like idDrink={idDrink} liked={liked}/>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>

              <Card.Text>{strCategory}</Card.Text>
              <Card.Text>{strAlcoholic}</Card.Text>
              <Card.Text>{strGlass}</Card.Text>

          <Link to={`/cocktail/${idDrink}`} className="btn btn-primary">see more...</Link>
        </Card.Body>
      </Card>

  )
}


export default CocktailCard
