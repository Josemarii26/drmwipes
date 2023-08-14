import React, { useEffect } from 'react'
import stainless2 from './Stainless2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export const Collagex1Stainless = () => {
  const [t, i18n] = useTranslation("global");


    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={stainless2} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-3">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>{t("stainless.t1")}</strong></h1>
                    <hr id='hr-black'></hr>
                    <br></br>
                    <p>{t("stainless.t1p")}</p>
                    <p>{t("stainless.t1p2")}</p>
                    
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}