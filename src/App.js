import React from "react";
import ToDo from "./ToDo";
import './App.css';
import Navbar from "./NavBar/Navbar";
import AboutUs from "./About Us/AboutUs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="Container">
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<ToDo/>} ></Route>
          <Route exact path='/AboutUs' element={<AboutUs/>} ></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
