import React, { useEffect } from 'react'
import wipes2 from './Wipes2.jpg';
import img1 from './img1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


export const Collagex1Wipes = () => {

    const [t, i18n] = useTranslation("global");


    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='negro' >
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-2">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>{t("wipes.t1")}</strong></h1>
                    <hr id='hr-green'></hr>
                    <p>{t("wipes.t1p")}</p>

                    <p>{t("wipes.t1p2")}</p>


                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6" id='wapper3' >
                    <img src={wipes2} className="img-fluid" alt="logo" />
                </div>

            </div>

        </div>
    )
}