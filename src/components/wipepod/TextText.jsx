import React from 'react'
import { useTranslation } from 'react-i18next';


export const TextText = () => {

    const [t, i18n] = useTranslation("global");
    return (
        <div className="row" id='texto2columnas'>
            <br></br>
                <h1><strong id='txt-verde'>{t("wipepod.key")}</strong> {t("wipepod.features")}</h1>
                <br></br>
            <div className="col-md-5" id='text-pls-4'>
                
                <ul>
                ✅{t("wipepod.g1")}
                </ul>
                <ul>
                ✅{t("wipepod.g2")}
                </ul>
                <ul>
                ✅{t("wipepod.g3")}
                </ul>
                <ul>
                ✅{t("wipepod.g4")}
                </ul>
                <ul>
                ✅{t("wipepod.g5")}
                </ul>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5" id='text-pls-4'>
                <ul>
                ✅{t("wipepod.g6")}
                </ul>
                <ul>
                ✅{t("wipepod.g7")}        </ul>
                <ul>
                ✅{t("wipepod.g8")}         </ul>
                <ul>
                ✅{t("wipepod.g9")}            </ul>

            </div>
        </div>
    )
}
