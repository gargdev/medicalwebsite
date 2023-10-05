import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Latest from '../components/Latest'
import Departments from '../components/Departments'

const HomePage = () => {
  return (
    <>
        {<Navbar/>}
        {<Hero/>}
        {<Services/>}
        {<About/>}
        {<Latest/>}
        {<Departments/>}
    </>
  )
}

export default HomePage
