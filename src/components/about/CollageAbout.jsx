import React, { useEffect } from 'react'
import about1 from './About1.jpg';
import about2 from './About2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';



export const CollageAbout = () => {

    const [t, i18n] = useTranslation("global");

    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='negro'>
                <div className="col-md-1"></div>
                <div className="col-md-4 order-1 order-md-0" id='text-pls-3' >
                    

                    <h1 data-aos="fade-left"><strong>{t("about.t1")}</strong></h1>
                    <hr id='hr-green-s'></hr>
                    <p >{t("about.t1p")}</p>
                    <br></br>
                    <p>{t("about.t1p2")}</p>
                    <br></br>
                    


                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 order-0 order-md-1" id='wapper2' >
                    <img src={about1} className="img-fluid" alt="logo" />
                </div>
            </div>

            <div className="row" id='verde'>

                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={about2} className="img-fluid" alt="logo"  />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    
                    
                    
                    

                    <h1 data-aos="fade-right"><strong>{t("about.t2")}</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>{t("about.t2p")}</p>
                    <br></br>
                    <p>{t("about.t2p2")}</p>
                    


                </div>
                <div className="col-md-1 order-3 order-md-2"></div>



            </div>
        </div>
    )
}
