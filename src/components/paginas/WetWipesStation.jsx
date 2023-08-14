import React from 'react'
import { TextoCentradoStationReal } from '../wetWipesStation/TextoCentradoStationReal'
import { TextoFotoStation } from '../wetWipesStation/TextoFotoStation'
import { Collagex1Station } from '../wetWipesStation/Collagex1Station'
import { Where } from '../wipes/Where'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import { WhatsApp } from '../WhatsApp'


export const WetWipesStation = () => {
  return (
    <div className="App">
    <NavBar/>
    <header className="App-header">
    <TextoCentradoStationReal/>
    <TextoFotoStation/>
    <Collagex1Station/>
    <Where/>
    <Footer/>
    <WhatsApp/>

    <ScrollToTopButton/>
    </header>
  </div>
  )
}
