import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ToDo from "./ToDo";
import Navbar from "./NavBar/Navbar";
import AboutUs from "./About Us/AboutUs";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
        <div className="Container">
          <Navbar/>
          <Routes>
              <Route exact path = '/' element ={<Login/>}></Route>
              <Route exact path='/ToDo' element={<ToDo/>} ></Route>
              <Route exact path='/AboutUs' element={<AboutUs/>} ></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
