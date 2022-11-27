import React, {useReducer, Fragment } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { dataSubmitReducer } from '../../customHooks/reducers/dataSubmitReducer';
import { userSendComment } from '../../redux/actions/commentAction'
import { Link } from 'react-router-dom'

const CommentForm = ({idCocktail, send, name, notify }) => {

  const userId = localStorage.getItem('userId');

  const initialState = {
    account: `/api/users/${userId}`,
    content: "",
    rating: 0,
    idDrink: idCocktail
  }

  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);

  const {content, rating } = state

  const handleSubmit = (e) => {
    e.preventDefault();
    if(content.length < 1) {
      return
    }
    send(state)
    notify('envoyé')
    dispatch({type: "input", name: "content", value: initialState.content})
    dispatch({type: "input", name: "rating", value: initialState.rating})

  }

  const ratingOptions = [5,4,3,2,1].map((level, index) => {

    return (
        <Fragment key={index}>
            <input type="radio" value={level} checked={rating === level} name="rating" id={`selected-${level}`} onChange={() => console.log(level)} />
            <label onClick={() =>  dispatch({type: "input",name: "rating", value: level})}></label>
         </Fragment>
      )
    })




  return (
    <div className="container">
      <h3>Donnez votre avis sur {name}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            value={content}
              onChange={e =>
                dispatch({
                  type: "input",
                  name: e.target.name,
                  value: e.target.value
                })
            }
           />
        </Form.Group>

        <Form.Group>
          <div className="rating-container">
            <div className="rating-box-title">Give your rating please</div>
            <div className="rating-box">
                { ratingOptions }
            </div>
          </div>
        </Form.Group>

        <Form.Group>
        {
          userId ? <Button type='submit' variant="success">Submit</Button>
          : <Link to='/login' className='btn btn-success'>Login</Link>
        }

        </Form.Group>
      </Form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    send: options => dispatch(userSendComment(options))
  }
}

export default connect(null, mapDispatchToProps )(CommentForm)
