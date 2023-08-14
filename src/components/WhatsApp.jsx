import React, { useState, useEffect } from 'react';
import whats from './whats.webp';



export const WhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '685091830'; // Reemplaza con el número de teléfono de WhatsApp
    const message = encodeURIComponent('¡Hola! Estoy contactándote desde el sitio web.'); // Mensaje predefinido
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  

  return (
    <div
      className={`scroll-to-top2 ${isVisible ? 'show' : ''}`}
      onClick={openWhatsApp}
    >
      <img src={whats} className="img-fluid33" alt="logo" id='image33' />
    </div>
  );
};

export default WhatsApp;