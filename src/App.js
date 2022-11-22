import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/authComponents/Login';
import Register from './components/authComponents/Register';
import RequireAuth from './components/authComponents/RequireAuth';
import Favorites from './components/Favorites';
import Cocktail from './components/cocktailComponents/Cocktail';


function App() {

  const [name, setName] = useState("")

  const handleSearch = (name) => {
    setName(name)
  }

  return (

      <div>
        <Navigation handleSearch={handleSearch}  />
          <BrowserRouter>
            <ScrollToTop >
              <Routes>
                <Route path="/" element={<Home name={name}/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cocktail/:id' element={<Cocktail />} />

                <Route element={<RequireAuth />}>
                  <Route path='/favorites/:id' element={<Favorites />} />
                </Route>

              </Routes>
            </ScrollToTop>
          </BrowserRouter>
      </div>
  );
}

export default App;
