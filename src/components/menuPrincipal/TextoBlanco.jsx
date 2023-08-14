import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export const TextoBlanco = () => {

  const [t, i18n] = useTranslation("global");

  
    const handleButtonClick = () => {
      
      window.scrollTo(0, 0);
    };


    return (
      <div className="row" id='widepod'>
        <div className="col-md-1"></div>
        <div className="col-md-10" id='text-pls-5'>
          <h1><strong>{t("main.title2")}</strong> <br /> <strong id='txt-verde'>{t("main.since")} 1992</strong></h1>
          <hr id='hr-green'></hr>
          <p>{t("main.p1")}</p>
          <p>{t("main.p2")}</p>
          <p>{t("main.p3")}</p>
          <p>{t("main.p4")}</p>
          <p>{t("main.p5")}</p>

          <Link as={Link} to="/about-us" onClick={handleButtonClick}><button type="button" class="botoncito2" >{t("boton.boton")} <span></span><span></span><span></span><span></span></button></Link>

        </div>
        <div className="col-md-1">
        </div>



      </div>

    )
  }
