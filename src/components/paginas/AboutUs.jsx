import React from 'react'
import { CollageAbout } from '../about/CollageAbout'
import { TextoCentradoAbout } from '../about/TextoCentradoAbout'
import { ColumnaAbout } from '../about/ColumnaAbout'
import { InicioAbout } from '../about/InicioAbout'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import { WhatsApp } from '../WhatsApp'



export const AboutUs = () => {
  return (
    <div className="App">
    <NavBar/>
    <header className="App-header">
    
    <TextoCentradoAbout/>
    <InicioAbout/>
    <CollageAbout/>
    <ColumnaAbout/>
    <ScrollToTopButton/>
    <WhatsApp/>

    <Footer/>
 
    </header>
  </div>
  )
}
