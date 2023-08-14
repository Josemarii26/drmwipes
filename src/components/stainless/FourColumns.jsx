import React from 'react'
import palette from './palette.png';
import capacity from './capacity.png';
import weight from './weight.png';
import size from './size.png';
import { useTranslation } from 'react-i18next';



export const FourColumnsStainless = () => {
  const [t, i18n] = useTranslation("global");


  return (
    
    <div className="row" id='row-max'>
      
      <div className="col-md-2"></div>
      <div className="col-md-2" id='column'>
      <img src={size} className="img-fluid" alt="logo"  id='image5'/>
      <br></br>
      <br></br>
      <h3>{t("stainless.a10")}</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>{t("stainless.a10b")}</p>
      <p id='text-pls-5'>{t("stainless.a10c")}</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={weight} className="img-fluid" alt="logo" id='image5'  />
      <br></br>
      <br></br>
      <h3>{t("stainless.a11")}</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>{t("stainless.a11b")}</p>
      <p id='text-pls-5'>{t("stainless.a11c")}</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={capacity} className="img-fluid" alt="logo" id='image4' />
      <br></br>
      <br></br>
      <h3>{t("stainless.a12")}</h3>
      <hr id='hr-green'></hr>

      <p id='text-pls-5'>{t("stainless.a12b")}</p>
      <p id='text-pls-5'>{t("stainless.a12c")}</p>
      </div>

      <div className="col-md-2" id='column'>
      <img src={palette} className="img-fluid" alt="logo" id='image5' />
      <br></br>
      <br></br>
      <h3>{t("stainless.a13")}</h3>
      <hr id='hr-green'></hr>
      <p id='text-pls-5'><strong>{t("stainless.a13x")}</strong> {t("stainless.a13b")}</p>
      <p id='text-pls-5'><strong>{t("stainless.a14x")}</strong> {t("stainless.a14c")}</p>
      </div>
      <div className="col-md-2"></div>

      
      
      
    </div>
  )
}
