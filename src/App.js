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


function App() {

  return (

      <div>
        <Navigation />
          <BrowserRouter>
            <ScrollToTop >
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

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
