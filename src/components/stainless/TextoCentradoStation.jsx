import React from 'react'
import station from './Station.jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentradoStation = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={station} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo21' ><strong> {t("stainless.title1A")} <hr id='hr-black'></hr></strong></h4>
        <h4 id='menor'>{t("stainless.p1")}</h4>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>





  )
}
