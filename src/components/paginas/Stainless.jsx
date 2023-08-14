import React from 'react'
import { TextoCentradoStation } from '../stainless/TextoCentradoStation'
import { InicioStation } from '../stainless/InicioStation'
import { Collagex1Stainless } from '../stainless/Collagex1Stainless'
import { TextTextStainless } from '../stainless/TextTextStainless'
import { Collagex1Stainless2 } from '../stainless/Collagex1Stainless2'
import { TextTextStainless2 } from '../stainless/TextTextStainless2'
import { Where } from '../wipes/Where'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { Footer } from '../Footer'
import { ClientsStainless } from '../stainless/Clients'
import { FourColumnsStainless } from '../stainless/FourColumns'
import { NavBar } from '../NavBar'
import { WhatsApp } from '../WhatsApp'

export const Stainless = () => {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <TextoCentradoStation />
        <InicioStation />
        <Collagex1Stainless/>
        <ClientsStainless/>
        <TextTextStainless/>
        <Collagex1Stainless2/>
        <FourColumnsStainless/>
        <TextTextStainless2/>
        
        <Where/>
        <WhatsApp/>

        <Footer/>
        <ScrollToTopButton/>



      </header>
    </div>
  )
}
