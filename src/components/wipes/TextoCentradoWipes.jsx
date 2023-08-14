import React, { useEffect } from 'react'
import widepod from './widepod.jpg';
import wipes5 from './Wipes5.jpg';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const TextoCentradoWipes = () => {

  const [t, i18n] = useTranslation("global");

  useEffect(()=> {
    Aos.init();
    },[])

  return (
    
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={wipes5} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' data-aos="fade-left"><strong> {t("wipes.title1A")} <hr id='hr-black'></hr></strong></h4>
        <p id='menor'>{t("wipes.p1")}</p>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>
    

     
  )
}
