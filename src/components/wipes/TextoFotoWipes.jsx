import React from 'react'
import { useTranslation } from 'react-i18next';
import wipes from './Wipes.jpg';

export const TextoFotoWipes = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="row" id='widepod'>
      <div className="col-md-1">

      </div>
      <div className="col-md-4" id='text-pls-2'>
        <h1><strong>{t("wipes.t")} </strong></h1>
        <hr id='hr-green'></hr>
        <p>{t("wipes.p2")}</p>

          <p>{t("wipes.p3")}</p>


          </div>
      <div className="col-md-2">

      </div>

      <div className="col-md-4" id='wapper' >
        <img src={wipes} className="img-fluid" alt="logo" />
      </div>

    </div>
  )
}
