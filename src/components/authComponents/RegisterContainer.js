import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import Register from './Register'
import { userRegisterComplete } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterContainer = ({registerData, complete}) => {

  const {registrationSuccess, confirmationSuccess} = registerData
  const [counter, setCounter] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    if(registrationSuccess) {
      setInterval(
        () => {

          setCounter(counter - 1);
        },
        1000
      )
    }

    if(counter < 0) {
      complete()
      navigate('/login')
    }

  }, [counter, registrationSuccess, confirmationSuccess, navigate, complete])

  if (!registrationSuccess) {
    return <Register/>
  }



  return (
    <div className="card mt-3 mb-6 shadow-sm">
      <div className="card-body">
        <h2>Congratulations!</h2>
        <p className="card-text">
          You have confirmed your account. You'll be redirected to Login page in&nbsp;
          {counter} seconds.
        </p>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    registerData: state.registration
  }
};

const mapDispatchToProps = dispatch => {
  return {
    complete: () => dispatch(userRegisterComplete)
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterContainer)
