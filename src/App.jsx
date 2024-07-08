import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/VideoPlayer/Videoplayer'

const App = () => {
    const [playstate ,setPlayState] = useState (false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle ='Our Program' Title ='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle ='GALLERY' Title ='Campus Photos'/>
      <Campus/>
      <Title subTitle ='TESTIMONIALS' Title ='What Student Says'/>
      <Testimonials/>
      <Title subTitle ='Contact us' Title ='Get in touch'/>
      <Contact/>
      <Footer/>
      <Videoplayer playstate={playstate}  setPlayState={setPlayState}/>
      </div>
      
    </div>
  )
}
export default App
