import React from 'react'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { NavBar } from '../NavBar'
import { TextoBlancoContact } from '../contactUs/TextoBlancoContact'
import { TextoCentradoContact } from '../contactUs/TextoCentradoContact'
import { Where } from '../wipes/Where'
import { Footer } from '../Footer'
import { WhatsApp } from '../WhatsApp'

export const ContactUs = () => {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <TextoCentradoContact/>
        <TextoBlancoContact />
        <Where />
        <ScrollToTopButton />
        <WhatsApp/>

        <Footer/>

      </header>
    </div>
  )
}
