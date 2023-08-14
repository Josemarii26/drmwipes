import React, { useEffect } from 'react'
import stainless3 from './Stainless3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export const Collagex1Stainless2 = () => {
    const [t, i18n] = useTranslation("global");

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={stainless3} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-3">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>{t("stainless.t2")}</strong></h1>
                    <hr id='hr-black'></hr>
                    <br></br>
                    <p>{t("stainless.p21")}</p>
                    <p>{t("stainless.p31")}</p>
                                  
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}