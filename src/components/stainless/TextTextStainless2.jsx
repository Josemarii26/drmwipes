import React from 'react'
import { useTranslation } from 'react-i18next';

export const TextTextStainless2 = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="row" id='texto2columnas' >
            <br></br>
            <h1><strong id='txt-verde'>{t("stainless.key")}</strong> {t("stainless.features")}</h1>

            <br></br>
            <hr id='hr-green'></hr>

            <div className="col-md-5" id='text-pls-4'>
                
                <ul>
                ✅ {t("stainless.h1")}
                </ul>
                <ul>
                ✅ {t("stainless.h2")}
                </ul>
                
                
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5" id='text-pls-4'>
                
                <ul>
                ✅ {t("stainless.h3")}

                </ul>
                <ul>
                ✅ {t("stainless.h4")}
                </ul>
                
                

            </div>
        </div>
    )
}
