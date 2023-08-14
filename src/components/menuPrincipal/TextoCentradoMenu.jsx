import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import gym2 from './gym2.png';
import widepod2 from './widepod0.jpg';

import wipes from './widepod0Mejor2.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


import { useTranslation } from 'react-i18next';

export const TextoCentradoMenu = () => {

    const handleButtonClick = () => {

        window.scrollTo(0, 0);
    };

    const [t, i18n] = useTranslation("global");

    const [showFirstContent, setShowFirstContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstContent((prevShowFirstContent) => !prevShowFirstContent);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Aos.init();
}, [])


    return (
        <>
        {showFirstContent ? <div className="col-md-12" data-aos="fade-left">
            <div className="image-container" id='wapper2'>
                <img src={gym2} className="img-fluid" alt="logo" />
                <div className="text-overlay">
                    <h1><strong id='text-gold'>{t("main.title1A")}</strong> {t("main.title1A1")}</h1>
                    <h2>{t("main.title1A2")}</h2>

                    <Link as={Link} to="/gym-zone" onClick={handleButtonClick}><button type="button" class="botoncito3">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></Link>
                </div>

            </div>
        </div>
        :
        <div className="col-md-12">
                <div className="image-container" id='wapper2'>
                    <img src={widepod2} className="img-fluid" alt="logo" />
                    <div className="text-overlay2"> <h1 className='titulo'><strong> {t("main.title1B1")}<br></br>{t("main.title1B2")}</strong></h1>
                        <Link as={Link} to="/wipes" onClick={handleButtonClick}><button type="button" class="botoncito">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></Link>

                    </div>

                </div>
            </div>}
            </>
    );
}
