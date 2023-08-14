import React from 'react'
import { useTranslation } from 'react-i18next';




export const InicioStation = () => {
  const [t, i18n] = useTranslation("global");

    return (
        <div className="row" id='widepod'>
            <div className="col-md-1"></div>
            <div className="col-md-10" id='text-pls-5'>
                <h1><strong>{t("stainless.t")}</strong> </h1>
                <hr id='hr-green'></hr>
                <p>{t("stainless.p2")}</p>

                <p>{t("stainless.p3")}</p>


                <p>{t("stainless.p4")}</p>

                <p>{t("stainless.p5")}</p>
            </div>
            <div className="col-md-1">
            </div>



        </div>
    )
}
