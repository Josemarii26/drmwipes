import React from 'react'
import img1 from './wipepodF.png';
import { useTranslation } from 'react-i18next';



export const TextoFoto = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="row" id='widepod'>
      <div className="col-md-1">

      </div>
      <div className="col-md-4" id='text-pls-3'>
        <h1>{t("wipepod.t")}</h1>
        <hr id='hr-green-s'></hr>
        <p>{t("wipepod.p2")}</p>
        <p>{t("wipepod.p3")}</p>
      </div>
      <div className="col-md-2">

      </div>

      <div className="col-md-4" id='wapper' >
        <img src={img1} className="img-fluid" alt="logo" id='imagenF'/>
      </div>

    </div>
  )
}
