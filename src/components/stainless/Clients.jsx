import React from 'react'
import check from './check.png';
import { useTranslation } from 'react-i18next';




export const ClientsStainless = () => {
  const [t, i18n] = useTranslation("global");
  return (

    

    <div className="row" id='row-max'>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" id='text-pls-6'>
        <p><br></br>
      
      <br></br>{t("stainless.t1p3")}</p>
        </div>
        <div className="col-md-4"></div>
      </div>
      
      
      <div className="col-md-2"></div>
      

      <div className="col-md-2" id='column'>
      <hr id='hr-green'></hr>
      <img src={check} className="img-fluid" alt="logo" id='image4'  />
      <br></br>
      <br></br>
      
      

      <p id='text-pls-5'>{t("stainless.b1")}</p>
      
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2" id='column'>
      <hr id='hr-green'></hr>
      <img src={check} className="img-fluid" alt="logo" id='image4' />
      <br></br>
      <br></br>
      

      <p id='text-pls-5'>{t("stainless.b2")}</p>
      
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2" id='column'>
      <hr id='hr-green'></hr>
      <img src={check} className="img-fluid" alt="logo" id='image4' />
      <br></br>
      <br></br>
      
      <p id='text-pls-5'>{t("stainless.b3")}</p>
      
      </div>
      <div className="col-md-2"></div>

      
      
      
    </div>

  )
}
