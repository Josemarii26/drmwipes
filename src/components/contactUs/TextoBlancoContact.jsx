import React from 'react'
import { useTranslation } from 'react-i18next';

export const TextoBlancoContact = () => {

  const [t, i18n] = useTranslation("global");
  return (
    <div className="row" id='widepod'>
      <div className="col-md-3"></div>
      <div className="col-md-6" id='text-pls-5'>
        <p id='txt-verde'>{t("contact-us.p1")}
        </p>
        <p>{t("contact-us.p15")} </p>
        <p>{t("contact-us.p2")}

        </p>
        <p id='txt-verde'>{t("contact-us.p3")}</p>
      </div>

    </div>

  )
}
