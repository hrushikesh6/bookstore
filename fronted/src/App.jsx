import React, { useContext, useEffect } from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from './components/Signup';
import Contact from './contact/Contacts';
import { Toaster } from 'react-hot-toast';
// import { useAuth } from './context/AuthProvider.js';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useContext(AuthContext);

  useEffect(() => {
    console.log("value of authUser: ", authUser);
  }, [authUser])

  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/course" element={<Courses />}  /> */}
          <Route exact path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>



    </>
  );
}

export default App;
