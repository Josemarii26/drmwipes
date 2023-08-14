
import './App.css';
import { MenuPrincipal } from './components/paginas/MenuPrincipal';
import { PaginaGym } from './components/paginas/PaginaGym';
import { Wipepod } from './components/paginas/Wipepod';
import { Wipes } from './components/paginas/Wipes';
import { Stainless } from './components/paginas/Stainless';
import { WetWipesStation } from './components/paginas/WetWipesStation';
import { ContactUs } from './components/paginas/ContactUs';
import { AboutUs } from './components/paginas/AboutUs';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';


import { useTranslation } from 'react-i18next';



function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <BrowserRouter>

      

      <Routes>

        <Route path='/' element={<MenuPrincipal />} />
        <Route path='/menu-principal' element={<MenuPrincipal />} />
        <Route path='/gym-zone' element={<PaginaGym />} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/wipes' element={<Wipes />} />
        <Route path='/wipepod' element={<Wipepod />} />
        <Route path='/wet-wipes-station' element={<WetWipesStation />} />
        <Route path='/stainless' element={<Stainless />} />
        <Route path='/contact-us' element={<ContactUs />} />
        


      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
