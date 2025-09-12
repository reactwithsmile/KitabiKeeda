import React from "react";
import "./css/app.css";
import Hero from "./component/hero";
import Card from "./component/card";
import Reason from "./component/reason";
import Payment from "./component/payment";
import Testimonial from "./component/testimonial";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { Express } from "express";

// const mongoose = require('mongoose');
// const DB = 'mongodb+srv://snehabaral2002:sneha123@cluster0.kbwqbyi.mongodb.net/?retryWrites=true&w=majority'

const App = () => {
  
  return (
    <Router>
      <Hero />
      <Card />
      <Routes>
      <Route exact path="./genres/card.jsx" element={<Card />}/>
      </Routes>
      <Reason />
      <Payment />
      <Testimonial />
     
    </Router>
  );
};

export default App;