import React from 'react'
import widepod from './widepod0.jpg';

import { useTranslation } from 'react-i18next';

export const TextoCentrado = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="col-md-12">
      <div className="image-container" id='wapper2'>
        <img src={widepod} className="img-fluid" alt="logo" />
        <div className="text-overlay2" > <h4 className='titulo2' ><strong> {t("wipepod.title1A")} <hr id='hr-black'></hr></strong></h4>
        <h4 id='menor'>{t("wipepod.p1")}</h4>
          <a href='#widepod'><button type="button" class="botoncito" href="#widepod">{t("boton.boton")}<span></span><span></span><span></span><span></span></button></a>

        </div>

      </div>
    </div>





  )
}