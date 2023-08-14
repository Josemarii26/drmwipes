import React from 'react';
import email from './correo-electronico-vacio2.png';
import phone from './telefono-inteligente (2).png';
import { useTranslation } from 'react-i18next';

export const WhereGym = () => {
  const [t, i18n] = useTranslation("global");

  const openEmail = () => {
    const emailAddress = 'distribucionesruizmillan@gmail.com';
    window.open(`mailto:${emailAddress}`);
  };

  const openPhone = () => {
    const phoneNumber = '685091830';
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className="row" id='row-max'>
      <h1><strong>{t("where.where")}</strong></h1>

      <div className="col-md-2"></div>
      <div className="col-md-3" id='column'>
        <img src={email} className="img-fluid" id='image' alt="logo" />

        <h3>{t("where.email")}</h3>

        <hr id='hr-gold'></hr>
        <p>distribucionesruizmillan@gmail.com</p>
        <button type="button" class="botoncito3" onClick={openEmail}>Email <span></span><span></span><span></span><span></span></button>
      </div>
      <div className="col-md-2"></div>

      <div className="col-md-3" id='column'>
        <img src={phone} className="img-fluid" id='image2' alt="logo" />

        <h3>{t("where.call")}</h3>

        <hr id='hr-gold'></hr>
        <p>685 09 18 30</p>
        <button type="button" class="botoncito3" onClick={openPhone}>{t("where.call2")}<span></span><span></span><span></span><span></span></button>
      </div>
      <div className="col-md-2"></div>
    </div>
  )
}
