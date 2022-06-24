import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route , Navigate  } from 'react-router-dom';

import ToDo from "./ToDo";
import Navbar from "./NavBar/Navbar";
import AboutUs from "./About Us/AboutUs";
import Login from "./Login/Login";
import NotFound from "./PageNotFound/NotFound";

function App() {
  
  return (
    <Router>
        <div className="Container">
          <Navbar/>
          <Routes>
              
                <Route exact path = '/' element ={<Login/>}></Route>
                <Route exact path='/ToDo' element={<ToDo/>} ></Route>
                <Route exact path='/AboutUs' element={<AboutUs/>} ></Route>
                <Route exact path='/NotFound' element={<NotFound/>} ></Route>
                <Route path="*" element={<Navigate to="/NotFound" />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
