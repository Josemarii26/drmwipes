import React, { useEffect } from 'react'
import widepod from './Widepod.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


export const Collagex1 = () => {
    const [t, i18n] = useTranslation("global");

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={widepod} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-2">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>{t("wipepod.t1")}</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>{t("wipepod.t1p")}</p>

                       <p> {t("wipepod.t1p2")}</p>

                        <p>{t("wipepod.t1p3")}
                    </p>
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}