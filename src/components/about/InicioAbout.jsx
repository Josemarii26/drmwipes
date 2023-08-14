import React from 'react'
import { useTranslation } from 'react-i18next';

export const InicioAbout = () => {

    const [t, i18n] = useTranslation("global");
    return (
        <div className="row" id='widepod'>
            <div className="col-md-3"></div>
            <div className="col-md-6" id='text-pls-5'>
                <p>{t("about.p2")}
                </p>
                <p id='txt-verde'> {t("about.p3")}</p>
                <h1><strong>{t("about.p4")}</strong></h1>
                <hr id='hr-green'></hr>
                <p>{t("about.p5")}</p>
            </div>



        </div>

    )
}
