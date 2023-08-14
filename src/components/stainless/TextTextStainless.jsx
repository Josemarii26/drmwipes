import React from 'react'
import { useTranslation } from 'react-i18next';

export const TextTextStainless = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="row" id='texto2columnas' >
            <br></br>
            <h1><strong id='txt-verde'>{t("stainless.key")}</strong> {t("stainless.features")}</h1>
            <br></br>
            <hr id='hr-green'></hr>


            <div className="col-md-5" id='text-pls-4'>



                <ul>
                    ✅ {t("stainless.g1")}
                </ul>
                <ul>
                    ✅ {t("stainless.g2")}
                </ul>
                <ul>
                    ✅ {t("stainless.g3")}
                </ul>
                <ul>
                    ✅ {t("stainless.g4")}
                </ul>




            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5" id='text-pls-4'>
                <ul>
                    ✅ {t("stainless.g5")}
                </ul>

                <ul>
                    ✅ {t("stainless.g6")}

                </ul>

                <ul>
                    ✅ {t("stainless.g7")}</ul>
                <ul>
                    ✅ {t("stainless.g8")}</ul>

                <ul>
                    ✅ {t("stainless.g9")}
                </ul>


            </div>
        </div>
    )
}
