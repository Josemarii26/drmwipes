import React from 'react'
import about from './About.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export const TextoCentradoAbout = () => {

  const [t, i18n] = useTranslation("global");

  return (

    <div className="col-md-12">
      <div id="top"></div>
      <div className="image-container" id='wapper2'>
        <img src={about} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' ><strong> {t("about.title1A")} <hr id='hr-black'></hr></strong></h4>
          <h4 id='menor' >{t("main.p1")}</h4>

          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></a>
        </div>

      </div>
    </div>
  )
}
