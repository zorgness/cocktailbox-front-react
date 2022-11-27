import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import LoginModal from '../authComponents/LoginModal';
import { dataSubmitReducer } from '../../customHooks/reducers/dataSubmitReducer';
import { userLoginAttempt, closeModal} from '../../redux/actions/authActions';

const Login = ({authData, auth, closeModal}) => {

  const initialState = {
    email: "",
    password: "",
  }

  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);

  const {email, password} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {email: email, password: password }
    auth(options)
  };

  const handleCloseModal = () => {
    closeModal()
    navigate('/')
  }

  return (
    <div className="index-item">

    <LoginModal
            show={authData?.modal}
            onHide={() => handleCloseModal()}
          />

  <Container className='mt-5'>

      {
        authData?.error && <p className='text-white position-absolute bg-dark'>{authData?.error}</p>
      }

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete='false'
          name="email"
          defaultValue={email}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }

          />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete='false'
          name="password"
          defaultValue={password}
          onChange={e =>
            dispatch({
            type: "input",
            name: e.target.name,
            value: e.target.value
            })
          }
           />
      </Form.Group>


      <Form.Group className="text-center">
          <Button className='btn btn-primary'  type="submit">
            Submit
          </Button>
      </Form.Group>

    </Form>

    <div className='mt-5 text-end'>
      <h6>Vous n'avez pas encore de compte ?</h6>
          <Link to="/register" className='text-secondary'>inscrivez-vous ici</Link>
    </div>
  </Container>

  </div>
  )
}


const mapStateToProps = state => {
  return {
    authData: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
      auth: options => dispatch(userLoginAttempt(options)),
      closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
