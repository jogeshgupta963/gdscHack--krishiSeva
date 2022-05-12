import {Fragment} from 'react';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login.js';
// import Login from './components/Auth/Forget Pass/Reset';
import Register from './components/Auth/Register/Register';
// import Navbar from './components/Navbar/Navbar.js';
// import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App () {
  return (
    <Fragment>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/dashboard" element={<LandingPage/>} />
              <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

        </Fragment>
      </Router>
    </Fragment>
  );
}

export default App;
