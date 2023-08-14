import React from 'react'
import contact from './ABOUT (1).jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentradoContact = () => {

  const [t, i18n] = useTranslation("global");

  return (

    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={contact} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' data-aos="fade-left"><strong> {t("contact-us.title1")} <hr id='hr-black'></hr></strong></h4>
        <p id='menor'>{t("contact-us.title2")}</p>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>
  )
}
