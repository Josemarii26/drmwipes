import React from 'react'
import { NavBarGold } from '../NavBarGold'
import { TextoCentradoGym } from '../gymzone/TextoCentradoGym'
import { TextoBlancoGym } from '../gymzone/TextoBlancoGym'
import { Collagex1Gym } from '../gymzone/Collagex1Gym'
import { WhereGym } from '../gymzone/WhereGym'
import { Footer } from '../Footer'
import WhatsApp from '../WhatsApp'
import ScrollToTopButtonGold from '../ScrollToTopButtonGold'

export const PaginaGym = () => {
  return (
    <div className="App">
      <NavBarGold/>
      <header className="App-header">
        <TextoCentradoGym/>
        <TextoBlancoGym/>
        <Collagex1Gym/>
        <WhereGym/>
        <WhatsApp/>
        <ScrollToTopButtonGold/>


        <Footer/>
      

        
      </header>
    </div>
  )
}
