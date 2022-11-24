import React, {Fragment} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CommentForm = () => {

  const ratingOptions = [5,4,3,2,1].map((score, index) => {

    return (
        <Fragment key={index}>
            <input type="radio" value={score} checked={""} name="rating" id={`selected-${score}`} onChange={() => console.log(score)} />
            <label onClick={() => console.log("star")}></label>
         </Fragment>

      )
    })

  return (
    <div className="container">
      <h3>Donnez votre avis sur "cocktail name"</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows={3} />
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
