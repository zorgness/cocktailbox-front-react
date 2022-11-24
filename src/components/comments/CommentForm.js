import React, {useReducer, Fragment} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { dataSubmitReducer } from '../../customHooks/reducers/dataSubmitReducer';


const CommentForm = ({idCocktail}) => {

  const userId = localStorage.getItem('userId');

  const initialState = {
    account: userId,
    content: "",
    rating: 0,
    idDrink: idCocktail
  }

  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);

  const {content, rating } = state

  const handleSubmit = (e) => {
    e.preventDefault();
    if(content.length < 5) {
      return
    }
    console.log(state)
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

export default CommentForm
