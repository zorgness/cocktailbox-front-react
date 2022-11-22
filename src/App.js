import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './util/ScrollToTop'
import Home from './components/Home';
import Navigation from './components/Navigation';

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
