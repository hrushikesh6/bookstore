import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Contact from '../components/Contact'


function courses() {
    
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    {/* <Course/> */}
    <Contact />
    </div>
    <Footer />
    <div/>
    </>
  )
}

export default courses
