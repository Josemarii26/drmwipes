import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import wipes4 from './Wipes3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';




export const Collage = () => {
    const [t, i18n] = useTranslation("global");


    useEffect(()=> {
        Aos.init();
        },[])
        
    return (
        <div className="container-fluid" id='collage'>
            
            <div className="row" id='verde'>
                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={wipes4} className="img-fluid" alt="logo" id='image' />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    <br></br>
                    
                    <h1 data-aos="fade-right"><strong>{t("wipes.t2")}</strong></h1>
                    <hr id='hr-black-S'></hr>
                    <p>{t("wipes.t2p")}</p>

                    <p>{t("wipes.t2p2")}</p>

                    <p>{t("wipes.t2p3")}
                    </p>
                </div>
                <div className="col-md-1 order-3 oirder-md-2"></div>

                

            </div>
        </div>
    )
}
