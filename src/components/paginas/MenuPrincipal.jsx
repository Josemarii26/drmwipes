import React from 'react'
import { NavBar } from '../NavBar'
import { TextoCentradoMenu } from '../menuPrincipal/TextoCentradoMenu'
import { Footer } from '../Footer'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { TextoBlanco } from '../menuPrincipal/TextoBlanco'
import { CollageMenu } from '../menuPrincipal/CollageMenu'
import { Clients } from '../menuPrincipal/Clients'
import WhatsApp from '../WhatsApp'



export const MenuPrincipal = () => {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <TextoCentradoMenu/>
      <TextoBlanco/>
      
      <CollageMenu/>
      <Clients/>
      <Footer/>
      <ScrollToTopButton/>
      <WhatsApp/>

        
      </header>
    </div>
  )
}
