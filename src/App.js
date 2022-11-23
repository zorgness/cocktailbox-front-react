import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/authComponents/Login';
import Register from './components/authComponents/Register';
import RequireAuth from './components/authComponents/RequireAuth';
import Favorites from './components/Favorites';
import CocktailContainer from './components/cocktailComponents/cocktail/CocktailContainer';


function App() {

  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleSearch = (name) => {
    setName(name)
    navigate('/')
  }

  return (

            <ScrollToTop >
            <Navigation handleSearch={handleSearch}  />
              <Routes>
                <Route path="/" element={<Home name={name}/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cocktail/:id' element={<CocktailContainer />} />

                <Route element={<RequireAuth />}>
                  <Route path='/favorites/:id' element={<Favorites />} />
                </Route>

              </Routes>
            </ScrollToTop>

  );
}

export default App;
