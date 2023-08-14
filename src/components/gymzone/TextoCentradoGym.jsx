import React from 'react'

import wipes from './gym2.png';

import { useTranslation } from 'react-i18next';

export const TextoCentradoGym = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper23'>
        <img src={wipes} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo3' ><strong> {t("gym.title1A")} <hr id='hr-gold'></hr></strong></h4>
        <h4 id='menor2'>{t("gym.p1")}</h4>
          <a href='#widepod3'><button type="button" class="botoncito" href="#widepod3">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>





  )
}
