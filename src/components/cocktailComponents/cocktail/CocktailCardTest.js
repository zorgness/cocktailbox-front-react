import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Like from './Like';
import { connect } from 'react-redux'
import { useFindNumberOfLikes } from '../../../customHooks/actions/fetchDataAction';

const CocktailCard = ({cocktail, like, likeData}) => {


  const {idDrink, strDrink, strDrinkThumb, strGlass, strCategory, strAlcoholic} = cocktail

  // const state = useFindNumberOfLikes(idDrink)

  // const { data } = state

  const likeInfo = likeData?.drinks.filter(drink => drink.idDrink === idDrink)


  const imgStyles = {backgroundImage: `linear-gradient(190deg, #fa7c30 18%, rgba(0, 0, 0, 0)18%), url(${strDrinkThumb})`, backgroundSize: "cover", backgroundPosition: "center", height: "280px" }

  return (


      <Card style={{ width: '18rem' }}>
        <div className='rounded-top' style={imgStyles}>
          <div className='text-end mx-2'>
            <Like
             idDrink={idDrink}
             dataLike={like}
             />

            <h2 className='text-white'>{likeInfo[0]?.id}</h2>
          </div>
        </div>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{strDrink}</Card.Title>
            {/* <Card.Text>{data ?? 0} like{data > 1 ? 's' : ''}</Card.Text> */}
          </div>


              <Card.Text>{strCategory}</Card.Text>
              <Card.Text>{strAlcoholic}</Card.Text>
              <Card.Text>{strGlass}</Card.Text>

          <Link
            to={`/cocktail/${idDrink}`}
            className="btn btn-primary"
            state={{dataLike: like}}
            >
            see more...
            </Link>
        </Card.Body>
      </Card>

  )
}

const mapStateToProps = (state) => {
  return {
    likeData: state.like
  }
}

export default connect(mapStateToProps, null)(CocktailCard)
