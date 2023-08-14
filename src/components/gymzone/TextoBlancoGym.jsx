import React from 'react'
import { useTranslation } from 'react-i18next';


export const TextoBlancoGym = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="row" id='widepod3'>
      <div className="col-md-3"></div>
      <div className="col-md-6" id='text-pls-5'>
        <p id='text-gold'>{t("gym.p2")}
        </p>

        <p id='text-white'> {t("gym.p3")}</p>

        <p id='text-white'>{t("gym.t1p3")}
        </p>

        <p id='text-gold'> {t("gym.t1p4")}</p>

      </div>

    </div>

  )
}
