import React from 'react'
import station2 from './Station2.jpg';
import { useTranslation } from 'react-i18next';


export const TextoFotoStation = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="row" id='widepod'>
      <div className="col-md-2">

      </div>
      <div className="col-md-4" id='text-pls-3'>
        <h1>{t("station.t")}</h1>
        <hr id='hr-green-s'></hr>
        <p>{t("station.p2")}</p>
        <p>{t("station.p3")}</p>
      </div>
      <div className="col-md-1">

      </div>

      <div className="col-md-3" id='wapper' >
        <img src={station2} className="img-fluid" id='station-img2' alt="logo" />
      </div>

    </div>
  )
}
