import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './util/ScrollToTop'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/authComponents/Login';
import Register from './components/authComponents/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

      <div>
          <BrowserRouter>
            <ScrollToTop >
                <Navigation />
                  <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                  </Routes>
              </ScrollToTop>
          </BrowserRouter>
      </div>



  );
}

export default App;
