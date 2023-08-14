import React from 'react'
import { useTranslation } from 'react-i18next';


export const TextTextWipes = () => {
  const [t, i18n] = useTranslation("global");

    return (
        <div className="row" id='texto2columnas' >

            <div className="col-md-5" id='text-pls-4'>
                <br></br>
                <h3><strong id='txt-verde'>{t("wipes.key")}</strong> {t("wipes.features")}</h3>
                <br></br>
                <ul>
                ✅ {t("wipes.g1")}
                </ul>
                <ul>
                ✅ {t("wipes.g2")}
                </ul>
                <ul>
                ✅ {t("wipes.g3")}
                </ul>
                <ul>
                ✅ {t("wipes.g4")}               </ul>
                <ul>
                ✅ {t("wipes.g5")} 
                </ul>
                <ul>
                ✅ {t("wipes.g6")}               </ul>
                <ul>
                ✅ {t("wipes.g7")}
                </ul>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5" id='text-pls-4'>
                <br></br>
                <h3><strong id='txt-verde'>{t("wipes.alcohol")}</strong> {t("wipes.wipes")}</h3>
                <br></br>
                <ul>
                ✅ {t("wipes.g8")}

                </ul>
                <ul>
                ✅ {t("wipes.g9")}
                </ul>
                <ul>
                ✅ {t("wipes.g10")}           </ul>
                <ul>
                ✅ {t("wipes.g11")}           </ul>
                <ul>
                ✅ {t("wipes.g12")}           </ul>
                <br></br>
                

            </div>
        </div>
    )
}
