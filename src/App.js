import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import React, {Component, useState} from "react";
import './App.css';
import Login from './pages/Login';
import {Route,Routes,Redirect} from 'react-router-dom';
import Register from './Components/Register';


function App() {
  return (
    

    <div className="App">
      <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/register' element = {<Register/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
