import React from 'react'
import { useTranslation } from 'react-i18next';


export const ColumnaAbout = () => {

  const [t, i18n] = useTranslation("global");
  return (
    <div className="col-md-8" id='text-pls-7'>
      <h1><strong id='txt-verde'>{t("about.continue")}</strong> {t("about.goals")}</h1>
      <hr id='hr-green'></hr>
      <br></br>
      <ul>
        ✅ {t("about.g1")}

      </ul>
      <ul>
        ✅ {t("about.g2")}
      </ul>
      <ul>
        ✅  {t("about.g3")}         </ul>
      <ul>
        ✅  {t("about.g4")}           </ul>
      <ul>
        ✅  {t("about.g5")} </ul>

      <ul>
        ✅  {t("about.g6")}
      </ul>
      <ul>
        ✅ {t("about.g7")}
      </ul>
    </div>

  )
}
