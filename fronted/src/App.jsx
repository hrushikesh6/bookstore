import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from './components/Signup';
import Contact from './contact/Contacts';

function App() {
  return (
  <>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/course" element={<Courses />} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/contact" element={<Contact/>} />
  </Routes>
  
  
  </>
  );
}

export default App;
