import React from 'react'
import marriot from './Marriot1.png';
import anytime from './Anytime.png';
import hilton from './Hilton.png';
import { useTranslation } from 'react-i18next';



export const Clients = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
    <h1><strong id='txt-verde'>{t("main.clients")}</strong> {t("main.help")}</h1>
    <hr id='hr-green'></hr>
    <div className="row" >
      <div className="col-md-4" >
        <img src={marriot} className="img-fluid" alt="logo" id='marriot' />
      </div>
      <div className="col-md-4">
        <img src={anytime} className="img-fluid" alt="logo" id='anytime' />
      </div>
      <div className="col-md-4">
        <img src={hilton} className="img-fluid" alt="logo" id='hilton' />
      </div>
    </div>
    </>
  )
}
