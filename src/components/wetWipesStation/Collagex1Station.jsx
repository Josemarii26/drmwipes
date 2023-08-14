import React, { useEffect } from 'react'
import station from './Station3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


export const Collagex1Station = () => {
  const [t, i18n] = useTranslation("global");


    useEffect(()=> {
        Aos.init();
        },[])

    return (
        <div className="container-fluid" id='collage'>
            <div className="row" id='verde'>
                <div className="col-md-6" id='wapper' >
                    <img src={station} className="img-fluid" alt="logo"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4" id="text-pls-3">
                    <br></br>
                    <h1 data-aos="fade-left"><strong>{t("station.t1")}</strong></h1>
                    <hr id='hr-black'></hr>
                    <br></br>
                    <ul>
                ✅ {t("station.g1")}
                </ul>
                <ul>
                ✅ {t("station.g2")}
                </ul>
                <ul>
                ✅ {t("station.g3")}
                </ul>
                <ul>
                ✅ {t("station.g4")}           </ul>
                <ul>
                ✅ {t("station.g5")}
                </ul>
                <ul>
                ✅ {t("station.g6")}              </ul>
                <ul>
                ✅ {t("station.g7")}
                </ul>
                <ul>
                ✅ {t("station.g8")}            </ul>
                <ul>
                ✅ {t("station.g9")}
                </ul>
                </div>
                <div className="col-md-1"></div>

            </div>

        </div>
    )
}