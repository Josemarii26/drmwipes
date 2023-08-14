import React, { useEffect } from 'react'
import menu1 from './Wipes3.jpg';
import menu2 from './menu2.jpg';
import menu3 from './menu3.jpg';
import menu4 from './menu4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';






export const CollageMenu = () => {

    const handleButtonClick = () => {
      
        window.scrollTo(0, 0);
      };

    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='negro'>
                <div className="col-md-1"></div>
                <div className="col-md-4 order-1 order-md-0" id='text-pls-3' >
                    <br></br>
                    <br></br>

                    <h1 data-aos="fade-left"><strong>{t("main.t1")}</strong></h1>
                    <hr id='hr-green'></hr>
                    <p >{t("main.t1p")}
                    </p>

                    <Link as={Link} to="/wipes" onClick={handleButtonClick}><button type="button" class="botoncito2" >{t("boton.boton")}<span></span><span></span><span></span><span></span></button></Link>

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 order-0 order-md-1" id='wapper3' >
                    <img src={menu1} className="img-fluid" alt="logo" />
                </div>
            </div>
            <div className="row" id='verde'>
                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={menu2} className="img-fluid" alt="logo" />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    <br></br>

                    <h1 data-aos="fade-right"><strong>{t("main.t2")}</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>{t("main.t2p")}</p>
              
                    
                    <Link as={Link} to="/wipepod" onClick={handleButtonClick}><button type="button" class="botoncito" >{t("boton.boton")}<span></span><span></span><span></span><span></span></button></Link>

                </div>
                <div className="col-md-1 order-3 oirder-md-2"></div>



            </div>

            <div className="row" id='negro'>
                <div className="col-md-1"></div>
                <div className="col-md-4 order-1 order-md-0" id='text-pls-3' >
                    <br></br>
                    <br></br>

                    <h1 data-aos="fade-left"><strong>{t("main.t3")}</strong></h1>
                    <hr id='hr-green'></hr>
                    <p >{t("main.t3p")}
                    </p>
                    
                    
                    <Link as={Link} to="/dispenser" onClick={handleButtonClick}><button type="button" class="botoncito2" >{t("boton.boton")}<span></span><span></span><span></span><span></span></button></Link>


                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 order-0 order-md-1" id='wapper2' >
                    <img src={menu3} className="img-fluid" alt="logo" />
                </div>
            </div>
            <div className="row" id='verde'>
                <div className="col-md-6 order-3 order-md-2 " id='wapper3'>
                    <img src={menu4} className="img-fluid" alt="logo" />
                </div>
                <div className="col-md-1 order-2 oirder-md-2"></div>
                <div className="col-md-4 order-3 order-md-2" id='text-pls-3' >
                    <br></br>
                    <br></br>
                    <h1 data-aos="fade-right"><strong>{t("main.t4")}</strong></h1>
                    <hr id='hr-black'></hr>
                    <p>{t("main.t4p")}</p>


                    <Link as={Link} to="/about-us" onClick={handleButtonClick}><button type="button" class="botoncito" >{t("boton.boton")}<span></span><span></span><span></span><span></span></button></Link>


                </div>
                <div className="col-md-1 order-3 oirder-md-2"></div>



            </div>
        </div>
    )
}
