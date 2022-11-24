import React, {useReducer, Fragment} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { dataSubmitReducer } from '../../customHooks/reducers/dataSubmitReducer';
import { userSendComment } from '../../redux/actions/commentAction'

const CommentForm = ({idCocktail, send, commentData}) => {

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
    if(content.length < 0) {
      return
    }
    console.log(state)
    send(state)
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
      <h3>Donnez votre avis sur "cocktail name"</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            defaultValue={content}
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
            <div className="rating-box-title">rate please</div>
            <div className="rating-box">
                { ratingOptions }
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <Button type='submit' variant="primary">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    commentData: state.comment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    send: options => dispatch(userSendComment(options))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(CommentForm)
