import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { connect } from 'react-redux';
import { userProfileFetch, userSetId, userLogout } from './redux/actions/authActions';
import ScrollToTop from './utils/ScrollToTop'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/authComponents/Login';
import RegisterContainer from './components/authComponents/RegisterContainer';
import RequireAuth from './components/authComponents/RequireAuth';
import FavoritesContainer from './components/favorites/FavoritesContainer';
import CocktailContainer from './components/cocktailComponents/cocktail/CocktailContainer';


function App({authData, logout, setId, fetchProfile}) {

  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleSearch = (name) => {
    setName(name)
    navigate('/')
  }

  const userId = window.localStorage.getItem('userId');

  useEffect(() => {

    if (userId) {
      setId(userId);
      fetchProfile(userId)
    }
  }, [userId, setId, fetchProfile]);


  return (

            <ScrollToTop >
            <Navigation handleSearch={handleSearch} authData={authData} logout={logout}   />
              <Routes>
                <Route path="/" element={<Home name={name} authData={authData}/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<RegisterContainer isEdit={false} />} />
                <Route path='/cocktail/:id' element={<CocktailContainer />} />

                <Route element={<RequireAuth />}>
                  <Route path='/favorites/:id' element={<FavoritesContainer />} />
                </Route>

              </Routes>
            </ScrollToTop>

  );
}


const mapStateToProps = (state) => {
  return {
    authData: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setId: userId => dispatch(userSetId(userId)),
    fetchProfile: userId => dispatch(userProfileFetch(userId)),
    logout: () => dispatch(userLogout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
