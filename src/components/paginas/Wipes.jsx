import React from 'react'
import { TextoCentradoWipes } from '../wipes/TextoCentradoWipes'
import { Collagex1Wipes } from '../wipes/Collagex1Wipes'
import { Footer } from '../Footer'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { TextoFotoWipes } from '../wipes/TextoFotoWipes'
import { TextTextWipes } from '../wipes/TextTextWipes'
import { Collage } from '../wipes/Collage'
import { Where } from '../wipes/Where'
import { NavBar } from '../NavBar'
import { WhatsApp } from '../WhatsApp'


export const Wipes = () => {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      
      <TextoCentradoWipes/>
      <TextoFotoWipes/>
      <Collagex1Wipes/>
      <TextTextWipes/>
      <Collage/>
      <Where/>
      <ScrollToTopButton/>
      <WhatsApp/>

      
      
      <Footer/>
        
      </header>
    </div>
  )
}
