import {Fragment} from 'react'
import Home from './components/LandingPage/LandingPage'
import Login from './components/Auth/Login/Login.js';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Fragment>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <section className="container">
            {/* <Alert /> */}
            <Routes>
              <Route path="/login" element={<Login />} />
              {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
          </section>

        </Fragment>
      </Router >
    </Fragment>
  );
}

export default App;
